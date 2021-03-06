import React, { useState } from "react";
import Header from "../shared/Header";
import BottomNav from "../shared/BottomNav";

import { history } from "../redux/configStore";
import styled from "styled-components";
import goArrow from "../static/images/icon/arw_gray.png";
import Popup from "../shared/Popup";
import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";

const Account = () => {
  const dispatch = useDispatch();

  const [openLogout, setOpenLogout] = useState(false);
  const [openSecession, setOpenSecession] = useState(false);
  const [openConfirmSecession, setOpenConfirmSecession] = useState(false);

  const [state, setState] = useState("");

  const Logout = () => {
    sessionStorage.clear();
    history.push("/");
  };

  const Secession = () => {
    if (state === "탈퇴") {
      dispatch(userActions.userSecessionDB());
    }
  };

  return (
    <React.Fragment>
      <Header name={"계정"} />
      <WrapBox>
        <ListBox onClick={() => setOpenLogout(true)}>
          <div>로그아웃</div>
          <img src={goArrow} style={{ width: 9, height: 15 }} />
        </ListBox>
        <React.Fragment>
          {openLogout && (
            <Popup
              title={"로그아웃 하시겠습니까?"}
              close={() => setOpenLogout(false)}
              event={() => {
                Logout();
              }}
              confirm={"로그아웃"}
              back={"뒤로가기"}
            />
          )}
        </React.Fragment>
        <ListBox
          onClick={() => {
            setOpenSecession(true);
          }}
        >
          <div>탈퇴하기</div>
          <img src={goArrow} style={{ width: 9, height: 15 }} />
        </ListBox>
        <React.Fragment>
          {openSecession && (
            <Popup
              title={"정말 탈퇴하시겠습니까?"}
              close={() => setOpenSecession(false)}
              event={() => {
                setOpenSecession(false);
                setOpenConfirmSecession(true);
              }}
              confirm={"회원탈퇴"}
              back={"뒤로가기"}
            />
          )}
        </React.Fragment>
        <React.Fragment>
          {openConfirmSecession && (
            <Popup
              type="회원탈퇴"
              title={"'탈퇴' 글자를 정확히 입력해주세요"}
              close={() => setOpenConfirmSecession(false)}
              event={() => {
                Secession();
              }}
              confirm={"회원탈퇴"}
              back={"뒤로가기"}
              state={state}
              setState={setState}
            />
          )}
        </React.Fragment>
      </WrapBox>
    </React.Fragment>
  );
};

const WrapBox = styled.div`
  width: 100%;
  padding: 1.2em;
  padding-top: 4em;
`;

const ListBox = styled.div`
  width: 100%;
  height: 3em;
  display: flex;
  justify-content: space-between;
  padding: 1em 0;
  cursor: pointer;
`;

export default Account;
