// import * as React from "react";
// import BottomNavigation from "@mui/material/BottomNavigation";
// import BottomNavigationAction from "@mui/material/BottomNavigationAction";

// import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
// import CreateRoundedIcon from "@mui/icons-material/CreateRounded";
// import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
// import ChatBubbleRoundedIcon from "@mui/icons-material/ChatBubbleRounded";
// import { history } from "../redux/configStore";

// const BottomNav = () => {
//   const [value, setValue] = React.useState("recents");

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   return (
//     <div>
//       <BottomNavigation
//         sx={{ width: "100%", position: "fixed", display: "flex", bottom: 0 }}
//         value={value}
//         onChange={handleChange}
//       >
//         <BottomNavigationAction
//           value="home"
//           icon={<HomeRoundedIcon />}
//           onClick={() => {
//             history.push("/home");
//           }}
//         />
//         {/* 검색기능 - 후에 추가 예정 */}
//         <BottomNavigationAction
//           value="chat"
//           icon={<ChatBubbleRoundedIcon />}
//           onClick={() => {
//             history.push("/chat");
//           }}
//         />
//         <BottomNavigationAction
//           value="write"
//           icon={<CreateRoundedIcon />}
//           onClick={() => {
//             history.push("/regi");
//           }}
//         />
//         <BottomNavigationAction
//           value="user"
//           icon={<PersonRoundedIcon />}
//           onClick={() => {
//             history.push("/profile");
//           }}
//         />
//       </BottomNavigation>
//     </div>
//   );
// };

// export default BottomNav;

import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const BottomNav = () => {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ width: 500 }}>
      <BottomNavigation
       sx={{ width: "100%", position: "fixed", display: "flex", bottom: 0 }}
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="홈" icon={<RestoreIcon />} />
        <BottomNavigationAction label="채팅" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="파티작성" icon={<LocationOnIcon />} />
        <BottomNavigationAction label="마이" icon={<LocationOnIcon />} />
      </BottomNavigation>
    </Box>
  );
}

export default BottomNav;