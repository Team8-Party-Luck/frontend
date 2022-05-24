import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
//리덕스
import { actionCreators as userActions } from "../redux/modules/user";
import { userApi } from "../shared/api";
//컴포넌트
import Header from "../shared/Header";
import EditProflie from "../components/Edit/EditProflie";
import EditDisabled from "../components/Edit/EditDisabled";
import SetLocation from "../components/Settings/SetLocation";
import SetFood from "../components/Settings/SetFood";
import EditDetail from "../components/Edit/EditDetail";
import Toast from "../shared/Toast";
//mui
import { createTheme, ThemeProvider } from "@mui/material/styles";
//유효성 체크
import { checkNickname, checkIntro } from "../shared/Validatiion";

const Edit = (props) => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    userApi.userInfo().then((res) => {
      // console.log(res.data);
      setImageUrl(null);
      setImageSrc(res.data.image);
      setNickname(res.data.nickname);
      setAge(res.data.age);
      setGender(res.data.gender);
      setFood(res.data.food);
      setCity(res.data.city);
      setRegion(res.data.region);
      setIntro(res.data.intro);
      setSns(res.data.sns);
    });
  }, []);

  // const user_info = useSelector((state) => state?.user?.user);
  // console.log(user_info);

  // 토스트 메세지목록
  const msgList = {
    nickname: "닉네임은 최소 2글자 최대 10글자입니다",
    intro: "자기소개는 최소 5글자 최대 30글자입니다",
    sns: "올바른 주소형식이 아닙니다",
  };

  //토스트 메시지
  const [ToastStatus, setToastStatus] = useState(false);
  const [ToastMsg, setToastMsg] = useState(""); // 토스트에 표시할 메세지

  const [count, setCount] = useState(0);
  const [imageUrl, setImageUrl] = useState(null);
  const [imageSrc, setImageSrc] = useState("");
  const [nickname, setNickname] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [food, setFood] = useState("");
  const [city, setCity] = useState("");
  const [region, setRegion] = useState("");
  const [intro, setIntro] = useState("");
  const [sns, setSns] = useState("");

  //토스트 핸들러
  //버튼을 1000ms 이내에 클릭할 때 문구만 실시간으로 바뀌도록 변경
  const handleToast = (type) => {
    if (!ToastStatus) {
      setToastStatus(true);
      setToastMsg(msgList[type]);
    }
  };

  React.useEffect(() => {
    if (ToastStatus) {
      setTimeout(() => {
        setToastStatus(false);
        setToastMsg("");
      }, 1000);
    }
  }, [ToastStatus]);

  // 미리보기
  const encodeFileToBase64 = (fileBlob) => {
    const reader = new FileReader();

    reader.readAsDataURL(fileBlob);

    console.log(reader);

    return new Promise((resolve) => {
      reader.onload = () => {
        setImageSrc(reader.result);
        resolve();
      };
    });
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: "#FF6853",
      },
    },
  });

  const updateProfile = () => {
    if (!checkNickname(nickname)) {
      handleToast("nickname");
      return;
    }
    if (!checkIntro(intro)) {
      handleToast("intro");
      return;
    }

    const Update_info = new FormData();
    if (imageUrl !== null) {
      Update_info.append("image", imageUrl);
    }
    Update_info.append("city", city);
    Update_info.append("region", region);
    Update_info.append("food", food);
    Update_info.append("nickname", nickname);
    Update_info.append("sns", sns);
    Update_info.append("intro", intro);

    dispatch(userActions.updateSettingsData(Update_info));
  };

  return (
    <React.Fragment>
      <Header name={"프로필 수정"} type={"완료"} event={updateProfile} />
      <Wrapbox>
        <EditProflie
          imageUrl={imageUrl}
          setImageUrl={setImageUrl}
          imageSrc={imageSrc}
          setImageSrc={setImageSrc}
          nickname={nickname}
          setNickname={setNickname}
          encodeFileToBase64={encodeFileToBase64}
        />
        <EditDisabled age={age} gender={gender} />
        <ThemeProvider theme={theme}>
          <SetLocation
            city={city}
            setCity={setCity}
            region={region}
            setRegion={setRegion}
            count={count}
            setCount={setCount}
            name={"동네"}
          />
        </ThemeProvider>
        <SetFood
          food={food}
          setFood={setFood}
          count={count}
          setCount={setCount}
          name={"선호하는 음식"}
        />
        <EditDetail
          sns={sns}
          setSns={setSns}
          intro={intro}
          setIntro={setIntro}
        />
      </Wrapbox>
      {ToastStatus && (
        <>
          <Toast msg={ToastMsg} />
        </>
      )}
    </React.Fragment>
  );
};

const Wrapbox = styled.div`
  padding: 1.25em;
  padding-top: 4.7em;
`;

export default Edit;
