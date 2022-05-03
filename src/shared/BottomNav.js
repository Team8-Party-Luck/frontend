import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";

import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import CreateRoundedIcon from "@mui/icons-material/CreateRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import ChatBubbleRoundedIcon from "@mui/icons-material/ChatBubbleRounded";
import { history } from "../redux/configStore";

const BottomNav = () => {
  const [value, setValue] = React.useState("recents");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <BottomNavigation
        sx={{ width: "100%", position: "fixed", display: "flex", bottom: 0 }}
        value={value}
        onChange={handleChange}
      >
        <BottomNavigationAction
          value="home"
          icon={<HomeRoundedIcon />}
          onClick={() => {
            history.push("/home");
          }}
        />
        {/* 검색기능 - 후에 추가 예정 */}
        <BottomNavigationAction
          value="chat"
          icon={<ChatBubbleRoundedIcon />}
          onClick={() => {
            history.push("/chat");
          }}
        />
        <BottomNavigationAction
          value="write"
          icon={<CreateRoundedIcon />}
          onClick={() => {
            history.push("/regi");
          }}
        />
        <BottomNavigationAction
          value="user"
          icon={<PersonRoundedIcon />}
          onClick={() => {
            history.push("/profile");
          }}
        />
      </BottomNavigation>
    </div>
  );
};

export default BottomNav;
