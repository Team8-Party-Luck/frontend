import * as React from "react";
import HomeLogo from "../../static/images/logo/로고(4배수).png";
import AlarmImg from "../../static/images/icon/ic_alarm.png";
import { useHistory } from "react-router";

import styled from "styled-components";
import Add from "../../shared/Add";

const HeaderNav = () => {
  const history = useHistory();

  return (
    // <Box sx={{ flexGrow: 1 }}>
    //   <AppBar sx={{ bgcolor: "white", position: "relative", height: "5em" }}>
    //     <Toolbar sx={{ marginTop: "0.8em" }}>
    //       <img src={HomeLogo} alt="홈로고" />
    //       <Box sx={{ flexGrow: 1 }} />

    //       <Box sx={{ display: { md: "flex" } }}>
    //         <IconButton
    //           size="large"
    //           aria-label="show 17 new notifications"
    //           sx={{ color: "black" }}
    //           onClick={() => {
    //             history.push("/alarm");
    //           }}
    //         >
    //           <img
    //             src={AlarmImg}
    //             alt="알람"
    //             style={{ width: 25, height: 25 }}
    //           />
    //         </IconButton>
    //       </Box>
    //     </Toolbar>
    //   </AppBar>
    // </Box>
    <WrapBox>
      <LogoBox>
        <img src={HomeLogo} style={{ width: "60%" }} alt="홈로고" />{" "}
      </LogoBox>
      <Add/>
      <img
        src={AlarmImg}
        style={{ width: "8%", cursor: "pointer" }}
        alt="알람로고"
        // onClick={() => {
        //   history.push("/alarm");
        // }}
      />
    </WrapBox>
  );
};

const WrapBox = styled.div`
  width: 100%;
  height: 5em;
  background: white;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1em;
  z-index: 100;
`;

const LogoBox = styled.div`
  width: 100%;
`;

export default HeaderNav;
