import React from "react";
import Modal from "react-modal";
import styled from "styled-components";

function Popup(props) {
  const { title, event, close, confirm, back } = props;

  const confirmHandler = (e) => {
    e.stopPropagation();
    event();
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
          height: "10em",
          boxSizing: "border-box",
          border: "none",
          background: "white",
          borderRadius: "0.5em",
          outline: "none",
          padding: "1.5em 1em",
          zIndex: 30,
        },
      }}
    >
      <TitleBox>{title}</TitleBox>
      <ButtonArea>
        <Confirm onClick={BackHandler}>{back}</Confirm>
        <Back onClick={confirmHandler}>{confirm}</Back>
      </ButtonArea>
    </Modal>
  );
}

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
  border: 1px solid #e3e3e3;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1em;
`;
const Back = styled(Confirm)`
  cursor: pointer;
  background-color: #ff6358;
  color: white;
`;

const TitleBox = styled.p`
  width: fit-content;
  margin: 0 auto;
  font-size: 1em;
  padding-top: 0.7em;
  font-weight: 600;
`;

export default Popup;
