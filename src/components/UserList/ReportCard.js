import React, { useState } from "react";
import styled from "styled-components";
import Modal from "react-modal";
import { color } from "../../shared/ColorSystem";
import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../../redux/modules/user";
import Popup from "../../shared/Popup";
import RadioBtn from "../../static/images/icon/라디오버튼.png";
import RadioBtnAct from "../../static/images/icon/라디오버튼-1.png";

const ReportCard = (props) => {
  const { close, id, nickname, setOpenComplete } = props;

  const [report, setReport] = useState("");
  const [etc, setEtc] = useState("");
  const [openConfirm, setOpenConfirm] = useState(false);
  const options = [
    "약속을 지키지 않았어요",
    "비속어 / 부적절한 언어를 사용했어요",
    "비적절한 게시물 / 댓글을 작성했어요",
    "거짓 정보를 작성했어요",
    "기타",
  ];

  const dispatch = useDispatch();

  const sendReport = () => {
    const Report_info = { otherId: id, report: etc };
    dispatch(userActions.userReportDB(Report_info));
  };

  const BackHandler = (e) => {
    e.stopPropagation();
    close();
  };

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
          padding: "1em",
          zIndex: 30,
        },
      }}
    >
      <ReportText>신고하는 이유를 선택해주세요</ReportText>
      <RadioBox>
        {options.map((cur, idx) => (
          <RadioList
            onClick={() => {
              setReport(cur);
              setEtc(cur);
            }}
            key={idx}
          >
            {report === cur ? (
              <RadioImg src={RadioBtnAct} />
            ) : (
              <RadioImg src={RadioBtn} />
            )}
            <RadioText>{cur}</RadioText>
          </RadioList>
        ))}
        {report === "기타" ? (
          <EtcInput
            placeholder="신고 내용을 작성해주세요"
            onChange={(e) => {
              setEtc(e.target.value);
            }}
          />
        ) : null}
      </RadioBox>
      <ButtonArea>
        <Confirm onClick={BackHandler}>취소</Confirm>
        <Back
          onClick={() => {
            setOpenConfirm(true);
          }}
        >
          신고하기
        </Back>
      </ButtonArea>
      <React.Fragment>
        {openConfirm && (
          <Popup
            title={`${nickname}님을 신고하겠습니까?`}
            close={() => setOpenConfirm(false)}
            event={() => {
              sendReport();
              close();
              setOpenComplete(true);
            }}
            confirm={"신고하기"}
            back={"취소"}
          />
        )}
      </React.Fragment>
    </Modal>
  );
};

const ReportText = styled.p`
  font-size: 1.1em;
  text-align: center;
  font-weight: 600;
  padding-bottom: 1em;
  padding-top: 0.3em;
  border-bottom: 1px solid ${color.line};
`;

const RadioBox = styled.div`
  width: 100%;
`;

const RadioList = styled.div`
  width: 100%;
  align-items: center;
  display: flex;
  margin-top: 1em;
`;

const RadioImg = styled.img`
  width: 1.5em;
  height: 1.5em;
  margin-right: 0.5em;
`;

const RadioText = styled.p`
  font-size: 0.9em;
`;

const ButtonArea = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin-top: 2em;
`;

const Confirm = styled.div`
  cursor: pointer;
  width: 47%;
  height: 3em;
  background-color: white;
  border-radius: 0.5em;
  color: black;
  border: 1px solid ${color.line};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1em;
`;
const Back = styled(Confirm)`
  cursor: pointer;
  background-color: ${color.primary};
  color: white;
`;

const EtcInput = styled.textarea`
  width: 90%;
  height: 8em;
  background: ${color.line};
  border: 0.13em solid ${color.disabled};
  border-radius: 3px;
  padding: 0.5em;
  margin-left: 2em;
  font-size: 0.9em;
  word-spacing: 0.03em;
  word-wrap: break-word;
  word-break: break-word;
`;

export default ReportCard;
