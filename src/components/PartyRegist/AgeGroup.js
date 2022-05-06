import React, { useState, useRef } from 'react';
import CheckIcon from "@mui/icons-material/Check";
import ToggleButton from "@mui/material/ToggleButton";

export default function AgeGroup() {
  const nameInput = useRef();
  function checkOnlyOne(element) {

  
    const checkboxes 
        = document.getElementsByName("animal");
    
    checkboxes.forEach((cb) => {
      cb.checked = false;
    })
    
    element.checked = true;
  }

  return (
    <React.Fragment>
      <input
        type="checkbox"
        name="animal"
        value="dog"
        ref={nameInput}
        onclick="checkOnlyOne(this)"
      />{" "}
      개
      <br />
      <input
        type="checkbox"
        name="animal"
        value="cat"
        onclick="checkOnlyOne(this)"
      />{" "}
      고양이
      <br />
      <input
        type="checkbox"
        name="animal"
        value="rabbit"
        onclick="checkOnlyOne(this)"
      />{" "}
      토끼
    </React.Fragment>
  );
}
