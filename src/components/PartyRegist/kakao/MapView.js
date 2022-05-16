import React, { useEffect } from "react";

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import KakaoMap from "./KakaoMap";
import { history } from "../../../redux/configStore";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 2,
  height: "40rem",
};

export default function MapView({
  store,
  setStore,
  setAddress,
  setPlace_url,
  setXy,
}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div style={{ width: "85%" }}>
      <TextField
        value={store || ""}
        id="eateryName"
        variant="standard"
        placeholder='식당명' 
        onClick={handleOpen}
        style={{ width: "100%" }}
        sx={{ mb: 3 }}
        InputProps={{
          readOnly: true,
          endAdornment: <img src="image/profile/arw_gray.png" />
        }}
      ></TextField>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <KakaoMap
            setStore={setStore}
            setAddress={setAddress}
            setPlace_url={setPlace_url}
            setXy={setXy}
            setOpen={setOpen}
          />
        </Box>
      </Modal>
    </div>
  );
}
