import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";

const EmailAccess = (props) => {
  const dispatch = useDispatch();

  // const codeData = useSelector((state) => state.code.authCode);
  const codeData = 123456;

  const { open, setOpen, access, setAccess } = props;

  const handleClose = () => {
    setOpen(false);
  };

  const [accessCode, setAccessCode] = useState("");
  const [open2, setOpen2] = useState(false);

  const isCorrect = () => {
    if (accessCode == codeData) {
      setOpen2(true);
      // setOpen(false);
      setAccess(true);
    } else {
      setOpen2(false);
      setAccess(false);
      setOpen(false);
    }
  };

  return (
    <div>
      <Dialog open={open}>
        <DialogTitle>인증번호확인</DialogTitle>
        <DialogContent>
          <DialogContentText>
            메일로 발송된 인증번호를 입력해주세요
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Access Code"
            type="email"
            fullWidth
            variant="standard"
            onChange={(e) => {
              setAccessCode(e.target.value);
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              isCorrect();
              handleClose();
            }}
          >
            인증
          </Button>
          <Button onClick={handleClose}>취소</Button>
        </DialogActions>
      </Dialog>
      {open2 === true ? (
        <Dialog open={open2}>
          <DialogTitle>인증이 완료되었습니다!</DialogTitle>
          <DialogActions>
            <Button
              onClick={() => {
                setOpen2(false);
              }}
            >
              확인
            </Button>
          </DialogActions>
        </Dialog>
      ) : (
        <></>
      )}
    </div>
  );
};

export default EmailAccess;
