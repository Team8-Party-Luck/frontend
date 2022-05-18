import React from 'react';
import styled from "styled-components";
import { history } from "../redux/configStore";
import {useLocation} from 'react-router-dom'
import { useDispatch } from "react-redux";

import { actionCreators as crewActions } from "../redux/modules/crew";

const Modal = ({ state }) => {
  const location = useLocation();
  const dispatch = useDispatch();

  console.log(location.state)

  return (
    <>
      <ModalContainer>
        <ModalBackdrop>
          <ModalView
            onClick={(event) => {
              event.stopPropagation();
            }}
          >
            <div>
              <div style={{ margin:'0 1rem 2rem 1rem'}}>
                {location.state.title}
              </div>
              <CancelButton onClick={() => {
                if(location.state.action === "logout"){
                  history.push('/account')
                } else {
                  history.push(`/partyInfo/${location.state.partyId}`)
                }
               
              }} style={{ marginRight: "1rem" }}>
                {location.state.leftTitle}
              </CancelButton>
              <CancelButton
                onClick={() => {
                  if(location.state.action === 'cancel'){
                    dispatch(crewActions.sendCancelData(location.state.partyId));
                    history.replace(`/partyInfo/${location.state.partyId}`)
                  }else if (location.state.action === 'delete') {
                    dispatch(crewActions.deleteSend(location.state.partyId));
                    history.replace('/')
                  }else if (location.state.action === 'logout') {
                    sessionStorage.removeItem('userid');
                    sessionStorage.removeItem('token');
                    history.replace('/')
                  }


                }}
                style={{ backgroundColor: "#FF6853", color: "#FFFFFF" }}
                s
              >
                {location.state.rightTitle}
              </CancelButton>
            </div>
          </ModalView>
        </ModalBackdrop>
      </ModalContainer>
    </>
  );
};

export default Modal;

const ModalContainer = styled.div`
  display : flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  position: relative;
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
