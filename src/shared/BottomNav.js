import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "../style/BottomNav.css";
import styled from "styled-components";

const BottomNav = () => {
  const [activeNav, setActiveNav] = useState(1);
  console.log(activeNav);

  React.useEffect(() => {}, []);
  const numconfig = (num) => {
    setActiveNav(num);
  };

  let para = document.location.href.split("/")[3];
  console.log(para);
  return (
    <Nav className="wrapper">
      <Link to="/home" className="nav-link" onClick={() => numconfig(1)}>
        <div>
          <img
            src={
              para === "home"
                ? "image/bar/home_active.png"
                : "image/bar/home_inactive.png"
            }
            alt="home"
            style={{ width: "2rem" }}
          />
          {/* <div style={{}}>홈</div> */}
        </div>
      </Link>

      <Link to="/chat" className="nav-link" onClick={() => numconfig(2)}>
        <div>
          <img
            src={
              para === "chat"
                ? "image/bar/chat_active.png"
                : "image/bar/chat_inactive.png"
            }
            alt="chat"
            style={{ width: "2rem" }}
          />
        </div>
        {/* 채팅 */}
      </Link>

      <Link to="/regi" className="nav-link" onClick={() => numconfig(3)}>
        <div>
          <img
            src={
              para === "regi"
                ? "image/bar/write_active.png"
                : "image/bar/write_inactive.png"
            }
            alt="regi"
            style={{ width: "2rem" }}
          />
        </div>
        {/* 파티작성 */}
      </Link>

      <Link to="/profile" className="nav-link" onClick={() => numconfig(4)}>
        <div>
          <img
            src={
              para === "profile"
                ? "image/bar/my_active.png"
                : "image/bar/my_inactive.png"
            }
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
  height: 60px;
  background-color: #ffffff;
`;
