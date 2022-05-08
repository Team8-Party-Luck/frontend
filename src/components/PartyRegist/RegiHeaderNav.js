import * as React from "react";
import { useHistory } from "react-router";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 320,
  bgcolor: "background.paper",
  borderRadius: "15px",
  boxShadow: 24,
  p: 4,
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
          <IconButton
            size="large"
            style={{
              color: "black",
            }}
            onClick={() => {
              handleOpen();
              // history.push("/home");
            }}
          >
            <ArrowBackRoundedIcon />
          </IconButton>
          <Box sx={{ flexGrow: 0.4 }} />
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { sm: "block" } }}
            style={{
              color: "black",
            }}
          >
            파티등록
          </Typography>
        </Toolbar>
      </AppBar>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} justifyContent="center" alignItems="center">
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            sx={{ mb: 5 }}
          >
            작성을 취소하시겠습니까?
          </Typography>
          <Button
            onClick={() => {
              handleClose();
            }}
            variant="outlined"
            sx={{ mr: 4, width: "7rem" }}
          >
            계속 작성
          </Button>
          <Button
            onClick={() => {
              history.push("/home");
            }}
            variant="outlined"
            sx={{ width: "7rem" }}
          >
            취소하기
          </Button>
        </Box>
      </Modal>
    </Box>
  );
};

export default RegiHeaderNav;
