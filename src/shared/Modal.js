import { useState } from "react";
import styled from "styled-components";
import { history } from "../redux/configStore";

const Modal = ({cancel,}) => {
  const [isOpen, setIsOpen] = useState(false); //isOpen 상태를 만들어준다.
  const openModalHandler = (event) => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <ModalContainer>
        <ModalBtn onClick={openModalHandler}>
          {isOpen ? "파티 신청" : "파티 신청"}
        </ModalBtn>
        {isOpen ? (
          <ModalBackdrop onClick={openModalHandler}>
            <ModalView
              onClick={(event) => {
                event.stopPropagation();
              }}
            >
              <div>
                <div style={{ marginLeft: "3.5rem", marginBottom: "2rem" }}>
                  작성을 취소하시겠습니까?
                </div>
                <CancelButton
                  onClick={() => {
                    // handleClose();
                  }}
                  style={{ marginRight: "1rem" }}
                >
                  취소
                </CancelButton>
                <CancelButton
                  onClick={() => {
                    history.push("/home");
                  }}
                  style={{ backgroundColor: "#FF6853", color: "#FFFFFF" }}s
                >
                  작성 취소
                </CancelButton>
              </div>
            </ModalView>
          </ModalBackdrop>
        ) : null}
      </ModalContainer>
    </>
  );
};

export default Modal;

const ModalContainer = styled.div`
  // display : flex;
  // justify-content: center;
  // align-items: center;
  // height: 100%;
  // position: relative;
`;

const ModalBtn = styled.button`
  background-color: #ff6853;
  text-decoration: none;
  border: none;
  font-size: 16px;
  color: white;
  border-radius: 8px;
  height: 51px;
  width: 163px;
  cursor: grab;
`;

const ModalBackdrop = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
`;

const ModalView = styled.div.attrs((props) => ({
  role: "dialog",
}))`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  width: 20rem;
  height: 10rem;
  border-radius: 0.5rem;
  position: relative;
`;

//취소버튼
const CancelButton = styled.button`
  border: 1px solid #cccccc;
  border-radius: 8px;
  width: 130px;
  height: 48px;
`;
