//초기 유저 정보 세팅 페이지
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import styled from "styled-components";

//컬러시스템
import { color } from "../shared/ColorSystem";

//리덕스
import { actionCreators as userActions } from "../redux/modules/user";
import { userApi } from "../shared/api";
import { history } from "../redux/configStore";

//컴포넌트
import SetGender from "../components/Settings/SetGender";
import SetAge from "../components/Settings/SetAge";
import SetLocation from "../components/Settings/SetLocation";
import SetFood from "../components/Settings/SetFood";

//모달
import Popup from "../shared/Popup";

//토스트 팝업
import Toast from "../shared/Toast";

//mui
import { createTheme, ThemeProvider } from "@mui/material/styles";

//유효성 체크
import { checkNickname, checkIntro } from "../shared/Validatiion";

const Setting = () => {
  const dispatch = useDispatch();

  // 토스트 메세지목록
  const msgList = {
    nickname: "닉네임은 최소 2글자 최대 10글자입니다",
    intro: "자기소개는 최소 5글자 최대 100글자입니다",
    sns: "올바른 주소형식이 아닙니다",
  };

  //선택 요소 전환
  const [page, setPage] = useState(false);

  //홈으로 돌아가는 모달
  const [goHome, setGoHome] = useState(false);

  //세팅 항목들
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [city, setCity] = useState("");
  const [region, setRegion] = useState("");
  const [food, setFood] = useState([]);
  const [count, setCount] = useState(0);
  const [values, setValues] = useState({
    nickname: "",
    sns: "",
    intro: "",
  });

  //토스트 메시지
  const [ToastStatus, setToastStatus] = useState(false);
  const [ToastMsg, setToastMsg] = useState(""); // 토스트에 표시할 메세지

  //토스트 핸들러
  //버튼을 1000ms 이내에 클릭할 때 문구만 실시간으로 바뀌도록 변경
  const handleToast = (type) => {
    if (!ToastStatus) {
      setToastStatus(true);
      setToastMsg(msgList[type]);
    }
  };

  //이미 초기 프로필 정보를 입력한 유저라면 홈으로 돌아가게 만드는 함수
  // 안드로이드의 물리백 버튼, 정보 입력후 메인화면에서 뒤로 돌아가기는 것을 방지
  useEffect(() => {
    userApi
      .userCheck()
      .then((res) => {
        if (res.data.ok === true) {
          setGoHome(true);
        }
      })
      .catch((err) => {
        // console.log(err.res);
      });
  }, []);

  //연속적으로 토스트 팝업을 뜨는 것을 방지하기 위한 설정
  useEffect(() => {
    if (ToastStatus) {
      setTimeout(() => {
        setToastStatus(false);
        setToastMsg("");
      }, 1000);
    }
  }, [ToastStatus]);

  //value 설정
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  // 세팅정보 서버로 전송하는 함수
  const sendSettings = () => {
    //유효성 체크
    if (!checkNickname(values.nickname)) {
      handleToast("nickname");
      return;
    }
    if (!checkIntro(values.intro)) {
      handleToast("intro");
      return;
    }

    //유저가 저장한 정보
    const Settings_info = {
      gender: gender,
      age: age,
      city: city,
      region: region,
      food: food,
      nickname: values.nickname,
      sns: values.sns,
      intro: values.intro,
    };
    // console.log(Settings_info);

    dispatch(userActions.sendSettingsData(Settings_info));
  };

  //색상 입히기
  const theme = createTheme({
    palette: {
      primary: {
        main: "#FF6853",
      },
    },
  });

  return (
    <React.Fragment>
      <HeaderBox>
        <Contain>
          {gender &&
          age &&
          city &&
          region &&
          food.length !== 0 &&
          values.nickname &&
          values.intro ? (
            <Progress width={(5 / 5) * 100 + "%"} BgColor={color.primary} />
          ) : (
            <Progress width={(count / 5) * 100 + "%"} BgColor={color.primary} />
          )}
          {/* <Progress width={(count / 5) * 100 + "%"} /> */}
        </Contain>
        <HeaderText>
          이제 프로필 정보 입력 후 <br /> 바로 잇츨링을 사용할 수 있습니다!🙌🏻
        </HeaderText>
      </HeaderBox>
      {page === false ? (
        <BodyBox>
          <InnerText>성별을 선택해주세요</InnerText>
          <SetGender
            gender={gender}
            setGender={setGender}
            count={count}
            setCount={setCount}
          />
          {gender ? (
            <>
              <InnerText>연령대를 선택해주세요</InnerText>
              <SetAge
                age={age}
                setAge={setAge}
                count={count}
                setCount={setCount}
              />
            </>
          ) : null}
          {age ? (
            <>
              <ThemeProvider theme={theme}>
                <InnerText>지역을 선택해주세요</InnerText>
                <SetLocation
                  city={city}
                  setCity={setCity}
                  region={region}
                  setRegion={setRegion}
                  count={count}
                  setCount={setCount}
                />
              </ThemeProvider>
            </>
          ) : null}
          {city && region ? (
            <>
              <SetFood
                food={food}
                setFood={setFood}
                count={count}
                setCount={setCount}
                name={"선호하는 음식을 모두 선택해주세요"}
              />
            </>
          ) : null}
          {gender && age && city && region && food.length !== 0 ? (
            <ActiveNextBtn
              onClick={() => {
                setPage(true);
              }}
            >
              다음
            </ActiveNextBtn>
          ) : (
            <NextBtn>다음</NextBtn>
          )}
        </BodyBox>
      ) : (
        <BodyBox>
          <InnerText>닉네임</InnerText>
          <ValuesInput
            placeholder="닉네임을 입력해주세요(최소 2글자 ~ 최대 10글자)"
            onChange={handleChange("nickname")}
          />
          <InnerText>인스타그램 아이디(선택)</InnerText>
          <ValuesInput
            placeholder="인스타그램 아이디를 입력해주세요!"
            onChange={handleChange("sns")}
          />
          <InnerText>자기소개</InnerText>
          <IntroInput
            placeholder="여러분을 소개할 수 있는 소개글을 작성해주세요!   (최소 5글자 ~ 최대 100글자)"
            onChange={handleChange("intro")}
          />
          {values.nickname && values.intro ? (
            <ActiveNextBtn
              onClick={() => {
                sendSettings();
              }}
            >
              완성 후 시작
            </ActiveNextBtn>
          ) : (
            <NextBtn>완성 후 시작</NextBtn>
          )}
        </BodyBox>
      )}
      {/* 토스트팝업 */}
      {ToastStatus && <Toast msg={ToastMsg} />}
      {/* 홈으로 돌아가는 모달 */}
      {goHome && (
        <Popup
          title={"이미 프로필 정보를 입력하셨습니다!"}
          type="세팅완료"
          close={() => history.push("/home")}
        />
      )}
    </React.Fragment>
  );
};

const Contain = styled.div`
  margin: 0.5em auto;
  background-color: ${color.pale};
  width: 100%;
  height: 0.7em;
  display: flex;
  align-items: center;
  border-radius: 20px;
`;
const Progress = styled.div`
  background: ${(props) => props.BgColor};
  // background: red;
  width: ${(props) => props.width};
  height: 100%;
  transition: width 1s;
  border-radius: 20px;
`;

const HeaderBox = styled.div`
  width: 100%;
  padding: 1em;
  margin-bottom: 1em;
`;

const HeaderText = styled.p`
  margin-top: 1em;
  font-size: 1.1em;
`;

const BodyBox = styled.div`
  padding: 0 1em;
  display: flex;
  flex-direction: column;
  padding-bottom: 7em;
`;

const InnerText = styled.p`
  font-size: 1em;
`;

const NextBtn = styled.button`
  position: absolute;
  left: 4%;
  right: 4%;
  bottom: 2em;
  width: 92%;
  height: 3em;
  background: ${color.subPrimary};
  border: none;
  color: white;
  border-radius: 0.5em;
  font-size: 1em;
  z-index: 100;
`;

const ActiveNextBtn = styled(NextBtn)`
  background: ${color.primary};
  cursor: pointer;
`;

const ValuesInput = styled.input`
  width: 100%;
  height: 3em;
  border: 0.13em solid ${color.disabled};
  border-radius: 3px;
  padding-left: 0.5em;
  font-size: 1em;
  margin-top: 0.5em;
  margin-bottom: 2em;
`;

const IntroInput = styled.textarea`
  width: 100%;
  height: 15em;
  border: 0.13em solid ${color.disabled};
  border-radius: 3px;
  padding-left: 0.5em;
  padding-top: 0.8em;
  font-size: 1em;
  margin-top: 0.5em;
  word-spacing: 0.03em;
  word-wrap: break-word;
  word-break: break-word;
`;

export default Setting;
