import { Box } from "@mui/material";
import React, { useState } from "react";
import Header from "../shared/Header";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import BottomNav from "../shared/BottomNav";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Button, TextField } from "@mui/material";
import { history } from "../redux/configStore";
import styled from "styled-components";
import goArrow from "../static/images/icon/arw_gray.png";
import Popup from "../shared/Popup";

const Account = () => {
  const [isOpenPopup, setIsOpenPopup] = useState(false);

  const Logout = () => {
    sessionStorage.clear();
    history.push("/");
  };

  return (
    <React.Fragment>
      <Header name={"계정"} />
      <WrapBox>
        <ListBox onClick={() => setIsOpenPopup(true)}>
          <div>로그아웃</div>
          <img src={goArrow} style={{ width: 9, height: 15 }} />
        </ListBox>
        <ListBox onClick={() => {}}>
          <div>탈퇴하기</div>
          <img src={goArrow} style={{ width: 9, height: 15 }} />
        </ListBox>
        <React.Fragment>
          {isOpenPopup && (
            <Popup
              title={"로그아웃 하시겠습니까?"}
              close={() => setIsOpenPopup(false)}
              event={() => {
                Logout();
              }}
              confirm={"로그아웃"}
              back={"뒤로가기"}
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
`;

export default Account;
