import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import PopupDom from "./PopupDom";
import PopupPostCode from "./PopupPostCode";
import TextField from "@mui/material/TextField";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const AddSearch = ({ store, setStore ,address, setAddress}) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPostCode = () => {
    setIsPopupOpen(true);
  };

  const closePostCode = () => {
    setIsPopupOpen(false);
  };

  return (
    <div style={{ width: "80%" }}>
      <TextField
        value={store || ''}
        id="eateryName"
        variant="standard"
        label="식당 이름(위치)"
        onClick={openPostCode}
        style={{ width: "100%" }}
        sx={{ mb: 1.5 }}
        InputProps={{
          readOnly: true,
        }}
      ></TextField>

      <div id="popupDom">
        {isPopupOpen && (
          <PopupDom>
            <PopupPostCode
              store={store}
              setStore={setStore}
              address = {address}
              setAddress = {setAddress}
              onClose={closePostCode}
            />
          </PopupDom>
        )}
      </div>
    </div>
  );
};

export default AddSearch;
