import React from "react";
import styled from "styled-components";
import Modal from "react-modal";
import { color } from "../../shared/ColorSystem";
import DefaultImg from "../../static/images/profile/default.png";
import InstaIcon from "../../static/images/icon/인스타그램아이콘.png";
import BackIcon from "../../static/images/icon/파티등록_이미지삭제버튼.png";
import ReportIcon from "../../static/images/icon/신고.png";
import FoodList from "../Profile/FoodList";
import { actionCreators as chatActions } from "../../redux/modules/chat";
import { useDispatch } from "react-redux";
const UserCard = (props) => {
  const {
    close,
    nickname,
    image,
    sns,
    age,
    gender,
    location,
    intro,
    food,
    id,
    userId,
    setOpenReport,
  } = props;
  const dispatch = useDispatch();
  // console.log(props);

  return (
    <Modal
      isOpen={true}
      onRequestClose={close}
      shouldCloseOnOverlayClick={true}
      ariaHideApp={false}
      style={{
        overlay: {
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "rgba(0, 0, 0, 0.5)",
          zIndex: 10000,
        },
        content: {
          position: "absolute",
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          transform: "translate(-50%, -50%)",
          width: "20em",
          boxSizing: "border-box",
          border: "none",
          background: "white",
          borderRadius: "0.5em",
          outline: "none",
          padding: "1em 1em",
          zIndex: 30,
        },
      }}
    >
      <WrapBox>
        <FlexBox>
          <BackImg src={BackIcon} onClick={close} />
          {id === userId ? null : (
            <ReportImg
              src={ReportIcon}
              onClick={() => {
                close();
                setOpenReport(true);
              }}
            />
          )}
        </FlexBox>
        {image === null ? (
          <ProfileBox>
            <ProfileImg src={DefaultImg} />
          </ProfileBox>
        ) : (
          <ProfileBox>
            <ProfileImg src={image} />
          </ProfileBox>
        )}
        <NicknameText>{nickname}</NicknameText>
        <SnsBox
          onClick={() => {
            window.location.href = `https://www.instagram.com/${sns}`;
          }}
        >
          {sns === "" ? null : (
            <>
              <SnsImg src={InstaIcon} />
              <SnsText>{sns}</SnsText>
            </>
          )}
        </SnsBox>

        <DetailText>
          {gender} · {age} · {location}
        </DetailText>
        <IntroBox>{intro}</IntroBox>
        <FoodBox>
          <FoodList position={"center"} food={food} />
        </FoodBox>
        {userId === id ? null : (
          <MsgBtn
            onClick={() => {
              dispatch(chatActions.getRoomIdDB(id));
            }}
          >
            메시지 보내기
          </MsgBtn>
        )}
      </WrapBox>
    </Modal>
  );
};

const WrapBox = styled.div`
  width: 100%;
`;

const FlexBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const BackImg = styled.img`
  width: 2em;
  height: 2em;
  cursor: pointer;
`;

const ReportImg = styled.img`
  width: 2em;
  height: 2em;
  cursor: pointer;
`;

const ProfileBox = styled.div`
  width: fit-content;
  margin: 0 auto;
`;

const ProfileImg = styled.img`
  width: 5em;
  height: 5em;
  border-radius: 5em;
`;

const SnsBox = styled.div`
  display: flex;
  width: fit-content;
  align-items: center;
  margin: 0.3em auto;
  margin-bottom: 0.5em;
  cursor: pointer;
`;

const NicknameText = styled.p`
  text-align: center;
  font-weight: 700;
  font-size: 1.2em;
  margin-top: 0.5em;
`;

const DetailText = styled.p`
  font-size: 0.9em;
  color: ${color.sub1};
  text-align: center;
`;

const IntroBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.5em 0;
  border-bottom: 1px solid ${color.sub1};
`;

const SnsImg = styled.img`
  width: 1.1em;
  height: 1.1em;
`;

const SnsText = styled.p`
  font-size: 1em;
  color: ${color.sub1};
  margin-left: 0.2em;
`;

const FoodBox = styled.div`
  width: 100%;
  margin: 1.5em auto;
`;

const MsgBtn = styled.button`
  width: 100%;
  height: 3em;
  border: none;
  border-radius: 7px;
  background: ${color.primary};
  color: white;
  font-size: 0.9em;
`;

export default UserCard;
