import * as React from "react";
import { useHistory } from "react-router";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Modal from "@mui/material/Modal";
import styled from "styled-components";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 340,
  bgcolor: "#FFFFFF",
  borderRadius: "15px",
  boxShadow: 24,
  p: 3.5,
};

const RegiHeaderNav = () => {
  const history = useHistory();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{ bgcolor: "#ffffff", position: "relative" }}>
        <Toolbar>
          <img
            alt="back"
            src="image/bar/back.png"
            onClick={() => {
              handleOpen();
            }}
          />
          <Box sx={{ flexGrow: 1.1 }} />
          <div style={{ color: "#161616", fontSize: "20px" }}>파티등록</div>

          <Box sx={{ flexGrow: 1 }} />
          <span   onClick={() => {
            console.log('hi');
          }}style={{ color: "#FF6853", fontSize: "18px"}}>완료</span>
        </Toolbar>
       
      </AppBar>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style} justifyContent="center" alignItems="center">
          <div style={{ marginLeft: "3.5rem", marginBottom: "2rem" }}>
            작성을 취소하시겠습니까?
          </div>
          <CancelButton
            onClick={() => {
              handleClose();
            }}
            style={{ marginRight: "1rem" }}
          >
            취소
          </CancelButton>
          <CancelButton
            onClick={() => {
              history.push("/home");
            }}
            style={{ backgroundColor: "#FF6853", color: "#FFFFFF" }}
          >
            작성 취소
          </CancelButton>
        </Box>
      </Modal>
    </Box>
  );
};

export default RegiHeaderNav;

const CancelButton = styled.button`
  border: 1px solid #cccccc;
  border-radius: 8px;
  width: 130px;
  height: 48px;
`;
