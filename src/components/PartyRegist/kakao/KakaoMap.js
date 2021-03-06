/* eslint-disable no-loop-func */
import React, { useState, useEffect } from "react";
import styled from "styled-components";

import "./KakaoMap.css";

const { kakao } = window;

var markers = [];
var ps;
var infowindow;
var map;

//현재 위치 가져오기
var gps_use = null; //gps의 사용가능 여부
var gps_lat = null; // 위도
var gps_lng = null; // 경도
var gps_position; // gps 위치 객체

const KakaoMap = ({ setStore, setAddress, setPlace_url, setXy, setOpen }) => {
  const [keyword, setKeyword] = useState("");

  //현재 위치 가져오기
  const gps_check = () => {
    if (navigator.geolocation) {
      var options = { timeout: 60000 };
      navigator.geolocation.getCurrentPosition(
        showLocation,
        errorHandler,
        options
      );
    } else {
      alert("GPS_추적이 불가합니다.");
      gps_use = false;
    }
  };

  //gps 이용 가능 시 위도와 경도 반환
  const showLocation = (position) => {
    gps_use = true;
    gps_lat = position.coords.latitude;
    gps_lng = position.coords.longitude;



    var mapContainer = document.getElementById("map"), // 지도를 표시할 div
      mapOption = {
        // center: new kakao.maps.LatLng(37.566826, 126.9786567), // 지도의 중심좌표
        center: new kakao.maps.LatLng(gps_lat, gps_lng), // 지도의 중심좌표
        level: 3, // 지도의 확대 레벨
      };

    // 지도를 생성합니다
    map = new kakao.maps.Map(mapContainer, mapOption);
    // 장소 검색 객체를 생성합니다
    ps = new kakao.maps.services.Places();
    // 검색 결과 목록이나 마커를 클릭했을 때 장소명을 표출할 인포윈도우를 생성합니다
    infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });

    gpsTracking();
  };

  //현재 위치 가져오기 에러
  const errorHandler = (err) => {
    if (err.code === 1) {
      alert("위치가 허용되지 않았습니다.");
    } else if (err.code === 2) {
      alert("위치를 반환할 수 없습니다.");
    }
    gps_use = false;
  };
  // 현재 위치로 마커 이동
  const gpsTracking = () => {
    if (gps_use) {
      map.panTo(new kakao.maps.LatLng(gps_lat, gps_lng));
      var gps_content =
        '<div><img style="width:17px; height:17px;" class="pulse" draggable="false" unselectable="on" src="https://ssl.pstatic.net/static/maps/m/pin_rd.png" alt="location"></div>';
      var currentOverlay = new kakao.maps.CustomOverlay({
        position: new kakao.maps.LatLng(gps_lat, gps_lng),
        content: gps_content,
        map: map,
      });
      currentOverlay.setMap(map);
    } else {
      alert("접근차단하신 경우 새로고침, 아닌 경우 잠시만 기다려주세요.");
      gps_check();
    }
  };


  useEffect(() => {
    gps_check();

    if (gps_use === null) {
      var mapContainer = document.getElementById("map"), // 지도를 표시할 div
        mapOption = {
          center: new kakao.maps.LatLng(37.566826, 126.9786567), // 지도의 중심좌표
          level: 3, // 지도의 확대 레벨
        };

      // 지도를 생성합니다
      map = new kakao.maps.Map(mapContainer, mapOption);
      // 장소 검색 객체를 생성합니다
      ps = new kakao.maps.services.Places();
      // 검색 결과 목록이나 마커를 클릭했을 때 장소명을 표출할 인포윈도우를 생성합니다
      infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });
    }
  }, []);



  //장소검색
  const searchPlaces = () => {
    var keyword = document.getElementById("keyword").value;

    if (!keyword.replace(/^\s+|\s+$/g, "")) {
      alert("키워드를 입력해주세요!");
      return false;
    }
    // 장소검색 객체를 통해 키워드로 장소검색을 요청합니다
    ps.keywordSearch(keyword, placesSearchCB, {location: new kakao.maps.LatLng(gps_lat, gps_lng)});
  };

  // 장소검색이 완료됐을 때 호출되는 콜백함수 입니다
  function placesSearchCB(data, status, pagination) {
    if (status === kakao.maps.services.Status.OK) {

      // 정상적으로 검색이 완료됐으면
      // 검색 목록과 마커를 표출합니다
      displayPlaces(data);

      // 페이지 번호를 표출합니다
      displayPagination(pagination);
    } else if (status === kakao.maps.services.Status.ZERO_RESULT) {
      alert("검색 결과가 존재하지 않습니다.");
      return;
    } else if (status === kakao.maps.services.Status.ERROR) {
      alert("검색 결과 중 오류가 발생했습니다.");
      return;
    }
  }

  // 검색 결과 목록과 마커를 표출하는 함수입니다
  function displayPlaces(places) {
    var listEl = document.getElementById("placesList"),
      menuEl = document.getElementById("menu_wrap"),
      fragment = document.createDocumentFragment(),
      bounds = new kakao.maps.LatLngBounds(),
      listStr = "";

    // 검색 결과 목록에 추가된 항목들을 제거합니다
    removeAllChildNods(listEl);

    // 지도에 표시되고 있는 마커를 제거합니다
    removeMarker();

    for (let i = 0; i < places.length; i++) {
      // 마커를 생성하고 지도에 표시합니다
      var placePosition = new kakao.maps.LatLng(places[i].y, places[i].x),
        marker = addMarker(placePosition, i),
        itemEl = getListItem(i, places[i]); // 검색 결과 항목 Element를 생성합니다

      // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
      // LatLngBounds 객체에 좌표를 추가합니다
      bounds.extend(placePosition);

      // 마커와 검색결과 항목에 mouseover 했을때
      // 해당 장소에 인포윈도우에 장소명을 표시합니다
      // mouseout 했을 때는 인포윈도우를 닫습니다
      (function (marker, place_name, address_name, place_url, x, y) {
        kakao.maps.event.addListener(marker, "mouseover", function (e) {
          displayInfowindow(marker, place_name);
        });

        kakao.maps.event.addListener(marker, "mouseout", function () {
          infowindow.close();
        });

        itemEl.onmouseover = function () {
          displayInfowindow(marker, place_name);
        };

        itemEl.onmouseout = function () {
          infowindow.close();
        };
      })(
        marker,
        places[i].place_name,
        places[i].address_name,
        places[i].place_url,
        places[i].x,
        places[i].y
      );
      // console.log(marker);
      fragment.appendChild(itemEl);
    }

    // 검색결과 항목들을 검색결과 목록 Element에 추가합니다
    listEl.appendChild(fragment);
    menuEl.scrollTop = 0;

    // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
    map.setBounds(bounds);
  }
  // 검색결과 항목을 Element로 반환하는 함수입니다
  function getListItem(index, places) {
    var el = document.createElement("li"),
      itemStr =
        '<span class="markerbg marker_' +
        (index + 1) +
        '"></span>' +
        '<div class="info">' +
        "   <h5 style='color:#FF6853; font-size:15px;'>" +
        places.place_name +
        "</h5>";

    if (places.road_address_name) {
      itemStr +=
        "    <span style='font-size:11px;'>" +
        places.road_address_name +
        "</span>" +
        '   <span class="jibun gray">' +
        places.address_name +
        "</span>";
    } else {
      itemStr +=
        "    <span style='font-size:11px;'>" + places.address_name + "</span>";
    }

    itemStr +=
      '<span class="tel">' +
      places.phone +
      "</span>" +
      `<a class="seeInfo "href=${places.place_url} target="_blank">상세정보 보기</a>&nbsp;&nbsp;` +
      `<button class="pickEatery" id=${places.id}>식당 선택<button/>` +
      "</div>";

    el.innerHTML = itemStr;
    el.className = "item";

    document.addEventListener("click", function (e) {
      if (e.target && e.target.id == places.id) {
        // console.log(places.id);
        setStore(places.place_name);
        setAddress(places.address_name);
        setPlace_url(places.place_url);
        setXy(`${places.x},${places.y}`);
        setOpen(false);
      }
    });

    return el;
  }

  // 마커를 생성하고 지도 위에 마커를 표시하는 함수입니다
  function addMarker(position, idx, title) {
    var imageSrc =
        "https://i.imgur.com/ahB7Wxt.png", // 마커 이미지 url, 스프라이트 이미지를 씁니다
          // "../../../static/images/kakao/marker/mark20.png", // 마커 이미지 url, 스프라이트 이미지를 씁니다
      imageSize = new kakao.maps.Size(36, 37), // 마커 이미지의 크기
      imgOptions = {
        spriteSize: new kakao.maps.Size(36, 691), // 스프라이트 이미지의 크기
        spriteOrigin: new kakao.maps.Point(0, idx * 46 + 10), // 스프라이트 이미지 중 사용할 영역의 좌상단 좌표
        offset: new kakao.maps.Point(13, 37), // 마커 좌표에 일치시킬 이미지 내에서의 좌표
      },
      markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imgOptions),
      marker = new kakao.maps.Marker({
        position: position, // 마커의 위치
        image: markerImage,
      });

    marker.setMap(map); // 지도 위에 마커를 표출합니다
    markers.push(marker); // 배열에 생성된 마커를 추가합니다

    return marker;
  }

  // 지도 위에 표시되고 있는 마커를 모두 제거합니다
  function removeMarker() {
    for (var i = 0; i < markers.length; i++) {
      markers[i].setMap(null);
    }
    markers = [];
  }

  // 검색결과 목록 하단에 페이지번호를 표시는 함수입니다
  function displayPagination(pagination) {
    var paginationEl = document.getElementById("pagination"),
      fragment = document.createDocumentFragment(),
      i;

    // 기존에 추가된 페이지번호를 삭제합니다
    while (paginationEl.hasChildNodes()) {
      paginationEl.removeChild(paginationEl.lastChild);
    }

    for (i = 1; i <= pagination.last; i++) {
      var el = document.createElement("a");
      el.href = "#";
      el.innerHTML = i;

      if (i === pagination.current) {
        el.className = "on";
      } else {
        el.onclick = (function (i) {
          return function () {
            pagination.gotoPage(i);
          };
        })(i);
      }

      fragment.appendChild(el);
    }
    paginationEl.appendChild(fragment);
  }

  // 검색결과 목록 또는 마커를 클릭했을 때   호출되는 함수입니다
  // 인포윈도우에 장소명을 표시합니다
  function displayInfowindow(marker, title) {
    var content = '<div style="padding:5px;z-index:1;">' + title + "</div>";

    infowindow.setContent(content);
    infowindow.open(map, marker);
  }

  // 검색결과 목록의 자식 Element를 제거하는 함수입니다
  function removeAllChildNods(el) {
    while (el.hasChildNodes()) {
      el.removeChild(el.lastChild);
    }
  }

  return (
    <div className="map_wrap">
      <div
        id="map"
        style={{
          width: "85vw",
          height: "90vh",
          position: "relative",
          overflow: "hidden",
          borderRadius: "15px",
        }}
      ></div>

      <div
        id="menu_wrap"
        className="bg_white"
        style={{ width: "290px", height: "240px", backgroundColor: "white" }}
      >
        <div className="option">
          <div style={{ marginTop: "0.5rem", marginBottom: "0.5rem" }}>
            {/* 키워드 :{" "} */}
            <Search
              type="text"
              id="keyword"
              size="27"
              placeholder="식당을 검색해주세요"
              onChange={(e) => {
                setKeyword(e.target.value);
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  searchPlaces();
                }
              }}
            />
            <button
              style={{
                borderColor: "black",
                backgroundColor: "white",
                height: "2.5rem",
                borderRadius: " 0 5px 5px 0",
                display: "inline",
                borderLeft: "0",
                marginLeft: "0",
                paddingRight: "0.5rem",
              }}
              onClick={searchPlaces}
            >
              검색하기
            </button>
          </div>
        </div>
        <hr style={{ border: "0.1px solid #E3E3E3" }} />
        <ListUl id="placesList">
          <p>
            아래와 같이 지역 또는 지점명과 함께 입력하시면 더욱 빠르고 정확한
            검색이 가능합니다.
          </p>
          <p>지역명 + 식당이름 </p>
          <p>예)합정 맥도날드,합정동 맥도날드</p>
          <p>식당이름 + 지점명</p>
          <p>예)맥도날드 합정점</p>
        </ListUl>
        <div id="pagination"></div>
      </div>
    </div>
  );
};

export default KakaoMap;

//지도 검색
const Search = styled.input`
  background-image: url(https://cdn1.iconfinder.com/data/icons/hawcons/32/698627-icon-111-search-256.png);
  background-position: 0 center;
  background-size: 25px 25px;
  background-repeat: no-repeat;
  box-sizing: border-box;
  display: inline;
  padding-left: 30px;
  border-color: black;
  border-radius: 5px 0 0 5px;
  height: 2.5rem;
  border-right: none;
`;

//지도 검색 화면
const ListUl = styled.ul`
  padding: 0.5rem;
  p:nth-child(1) {
    font-weight: bold;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
  p:nth-child(2) {
  }
  p:nth-child(3) {
    color: #ff6853;
    font-size: 10px;
    margin-bottom: 15px;
  }
  p:nth-child(4) {
  }
  p:nth-child(5) {
    color: #ff6853;
    font-size: 10px;
  }
`;
