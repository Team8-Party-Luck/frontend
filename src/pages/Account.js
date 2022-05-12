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

const Account = () => {
  const [openLogout, setOpenLogout] = useState(false);
  const [openResign, setOpenResign] = useState(false);
  const [openConfirm, setOpenConfirm] = useState(false);

  const handleClickOpen = () => {
    setOpenLogout(true);
  };

  const handleClickOpenResign = () => {
    setOpenResign(true);
  };

  const handleClickOpenConfirm = () => {
    setOpenConfirm(true);
  };

  const handleClose = () => {
    setOpenLogout(false);
  };

  const handleCloseResign = () => {
    setOpenResign(false);
  };

  const handleCloseConfirm = () => {
    setOpenConfirm(false);
  };

  return (
    <Box>
      <Header />
      <List component="nav" aria-label="mailbox folders" sx={{}}>
        <ListItem
          button
          onClick={() => {
            handleClickOpen();
          }}
        >
          <ListItemText primary="로그아웃" />
        </ListItem>
        <Divider />
        <ListItem
          button
          onClick={() => {
            handleClickOpenResign();
          }}
        >
          <ListItemText primary="회원탈퇴" />
        </ListItem>
      </List>
      <BottomNav />
      <Dialog
        open={openLogout}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          로그아웃 하시겠습니까?
        </DialogTitle>
        <DialogActions style={{ margin: "0 auto" }}>
          <Button
            variant="contained"
            sx={{ background: "#FF6853", width: "100%" }}
            onClick={handleClose}
          >
            취소하기
          </Button>
          <Button
            variant="outlined"
            sx={{
              color: "#FF6853",
              border: "1px solid #FF6853",
              width: "100%",
            }}
            onClick={() => {
              handleClose();
              sessionStorage.removeItem("token");
              sessionStorage.removeItem("userid");
              history.push("/");
            }}
            autoFocus
          >
            로그아웃
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog
        open={openResign}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          정말 탈퇴하시겠습니까?
        </DialogTitle>
        <DialogActions style={{ margin: "0 auto" }}>
          <Button
            variant="contained"
            sx={{ background: "#FF6853", width: "100%" }}
            onClick={handleCloseResign}
          >
            취소하기
          </Button>
          <Button
            variant="outlined"
            sx={{
              color: "#FF6853",
              border: "1px solid #FF6853",
              width: "100%",
            }}
            onClick={() => {
              handleCloseResign();
              handleClickOpenConfirm();
            }}
            autoFocus
          >
            탈퇴하기
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog open={openConfirm} onClose={handleCloseConfirm}>
        <DialogTitle>' 탈퇴 ' 글자를 입력해주세요</DialogTitle>
        <DialogContent>
          <DialogContentText>
            탈퇴로 인해 서비스 이용에 제한이 <br /> 있을 수 있습니다
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            label="탈퇴"
            fullWidth
            variant="standard"
            onChange={() => {}}
          />
        </DialogContent>
        <DialogActions style={{ margin: "0 auto" }}>
          <Button
            variant="contained"
            sx={{ background: "#FF6853", width: "100%" }}
            onClick={handleCloseConfirm}
          >
            취소하기
          </Button>
          <Button
            variant="outlined"
            sx={{
              color: "#FF6853",
              border: "1px solid #FF6853",
              width: "100%",
            }}
            onClick={() => {
              handleCloseConfirm();
            }}
            autoFocus
          >
            탈퇴하기
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Account;
