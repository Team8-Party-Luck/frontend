import React from "react";

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import KakaoMap from "./KakaoMap";

//이모티콘
import ic_location from "../../../static/images/icon/arw_s@2x.png";
const style = {
  position: "fixed",
  top: "18%",
  left: "50%",
  transform: "translate(-50%, -50%)",
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
    <div style={{ width: "100%" }}>
      <TextField
        value={store || ""}
        id="eateryName"
        variant="standard"
        placeholder="식당명"
        onClick={handleOpen}
        style={{ width: "100%" }}
        sx={{ mb: 3 }}
        InputProps={{
          readOnly: true,
          endAdornment: <img src={ic_location} alt="locationIcon" />,
        }}
      ></TextField>
      <Modal
        open={open}
        onClose={handleClose}
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
