import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "../style/BottomNav.css";
import styled from "styled-components";

import home_active from "../static/images/icon/home_active.png";
import home_inactive from "../static/images/icon/home_inactive.png";
import chat_active from "../static/images/icon/chat_active.png";
import chat_inactive from "../static/images/icon/chat_inactive.png";
import write_active from "../static/images/icon/write_active.png";
import write_inactive from "../static/images/icon/write_inactive.png";
import my_active from "../static/images/icon/my_active.png";
import my_inactive from "../static/images/icon/my_inactive.png";

const BottomNav = () => {
  const [activeNav, setActiveNav] = useState(1);

  React.useEffect(() => {}, []);
  const numconfig = (num) => {
    setActiveNav(num);
  };

  let para = document.location.href.split("/")[3];
  return (
    <Nav className="wrapper">
      <Link to="/home" className="nav-link" onClick={() => numconfig(1)}>
        <div>
          <img
            src={para === "home" ? home_active : home_inactive}
            alt="home"
            style={{ width: "2rem" }}
          />
          {/* 홈 */}
        </div>
      </Link>

      <Link to="/chat" className="nav-link" onClick={() => numconfig(2)}>
        <div>
          <img
            src={para === "chat" ? chat_active : chat_inactive}
            alt="chat"
            style={{ width: "2rem" }}
          />
        </div>
        {/* 채팅 */}
      </Link>

      <Link to="/regi" className="nav-link" onClick={() => numconfig(3)}>
        <div>
          <img
            src={para === "regi" ? write_active : write_inactive}
            alt="regi"
            style={{ width: "2rem" }}
          />
        </div>
        {/* 파티작성 */}
      </Link>
      <Link to="/profile" className="nav-link" onClick={() => numconfig(4)}>
        <div>
          <img
            src={para === "profile" ? my_active : my_inactive}
            alt="profile"
            style={{ width: "2rem" }}
          />
        </div>
        {/* 메인 */}
      </Link>
    </Nav>
  );
};

export default BottomNav;

const Nav = styled.nav`
  position: fixed;
  display: flex;
  bottom: 0;
  left: 0;
  right: 0;
  height: 55px;
  background-color: #ffffff;
`;
