import React, { useState } from "react";
import Button from '@mui/material/Button';
import PopupDom from "./PopupDom";
import PopupPostCode from "./PopupPostCode";

const AddSearch = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPostCode = () => {
    setIsPopupOpen(true);
  };

  const closePostCode = () => {
    setIsPopupOpen(false);
  };
  return (
    <div>
      <Button variant="outlined" onClick={openPostCode} sx={{mb:1 }}>
        식당 이름(위치)
      </Button>

      <div id="popupDom">
        {isPopupOpen && (
          <PopupDom>
            <PopupPostCode onClose={closePostCode} />
          </PopupDom>
        )}
      </div>
    </div>
  );
};

export default AddSearch;
