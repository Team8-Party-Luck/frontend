import React, { useEffect } from "react";

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import KakaoMap from "./KakaoMap";
import $ from "jquery";
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

export default function MapView({setStore, setAddress, setPlace_url, setXy}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // useEffect(() => {
  //   $(document).on("click", "#gather", function (e) {
  //     // handleClose()
  //     console.log(e);
  //     console.log($('.info').index());
  //   });
  // }, []);



  return (
    <div style={{ width: "80%" }}>
      <TextField
        // value={store || ''}
        id="eateryName"
        variant="standard"
        label="식당명"
        onClick={handleOpen}
        style={{ width: "100%" }}
        sx={{ mb: 1.5 }}
        InputProps={{
          readOnly: true,
        }}
      ></TextField>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <KakaoMap setStore={setStore} setAddress={setAddress} setPlace_url={setPlace_url}  setXy={setXy}/>
        </Box>
      </Modal>
    </div>
  );
}
