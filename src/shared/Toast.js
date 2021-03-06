import React from "react";
import styled from "styled-components";

const Toast = ({ msg = "메세지 없음" }) => {
  return <MsgBox>{msg}</MsgBox>;
};

const MsgBox = styled.div`
  position: absolute;
  top: 85%;
  left: 50%;
  padding: 0.7em;
  min-width: 22em;
  transform: translate(-50%, -50%);
  z-index: 3;
  background: rgba(0, 0, 0, 0.7);
  color: #fff;
  border-radius: 4px;
  border: 1px solid #000;
  text-align: center;
  font-weight: bold;
`;

export default Toast;
