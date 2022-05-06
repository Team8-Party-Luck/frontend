import React from "react";
import DaumPostcode from "react-daum-postcode";
import Button from "@mui/material/Button";

const PopupPostCode = (props , {store, setStore, address, setAddress}) => {
  // 우편번호 검색 후 주소 클릭 시 실행될 함수, data callback 용


  const handlePostCode = (data) => {
    let fullAddress = data.address;
    let extraAddress = "";

    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddress +=
          extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
    }
    console.log(props)
    props.setStore(data.buildingName);
    props.setAddress(data.address);
    console.log(data);
    console.log(fullAddress);
    console.log(data.zonecode);
    props.onClose();
  };


  const postCodeStyle = {
    // display: "block",
    // width:'12rem'
  };

  return (
    <div>
      <DaumPostcode style={postCodeStyle} onComplete={handlePostCode} />

      <Button
        variant="outlined"
        onClick={() => {
          props.onClose();
        }}
        className="postCode_btn"
      >
        닫기
      </Button>
    </div>
  );
};

export default PopupPostCode;
