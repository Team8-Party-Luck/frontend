// import * as React from "react";
// import Box from "@mui/material/Box";
// import BottomNavigation from "@mui/material/BottomNavigation";
// import BottomNavigationAction from "@mui/material/BottomNavigationAction";
// import RestoreIcon from "@mui/icons-material/Restore";
// import FavoriteIcon from "@mui/icons-material/Favorite";
// import LocationOnIcon from "@mui/icons-material/LocationOn";
// import { history } from "../redux/configStore";
// import IconButton from '@mui/material/IconButton';
// import DeleteIcon from '@mui/icons-material/Delete';

// const BottomNav = () => {
//   const [value, setValue] = React.useState(0);

//   return (
//     <Box sx={{ width: 500 }}>
//       <BottomNavigation
//         sx={{ width: "100%", position: "fixed", display: "flex", bottom: 0 }}
//         showLabels
//         value={value}
//         onChange={(event, newValue) => {
//           setValue(newValue);
//           newValue === 'home' && history.push('/home')
//           newValue === 'chat' && history.push('/chat')
//           newValue === 'write' && history.push('/regi')
//           newValue === 'user' && history.push('/profile')
//         }}
//       >

//           {/* <BottomNavigationAction
//             value="home"
//             label="홈"
//             onClick={() => {
//               history.push("/home");
//             }}
//             icon={<RestoreIcon />}
//           /> */}

//         <BottomNavigationAction
//           // onChange={() => {
//           //   history.push("/chat");
//           // }}
//           value="chat"
//           label="채팅"
//           icon={<FavoriteIcon />}
//         />
//         <BottomNavigationAction
//           onChange={() => {
//             history.push("/regi");
//           }}
//           value="write"
//           label="파티작성"
//           icon={<LocationOnIcon />}
//         />
//         <BottomNavigationAction
//           onChange={() => {
//             history.push("/profile");
//           }}
//           value="user"
//           label="마이"
//           icon={<LocationOnIcon />}
//         />
//       </BottomNavigation>
//     </Box>
//   );
// };

// export default BottomNav;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../style/BottomNav.css";

const BottomNav = () => {
  const [activeNav, setActiveNav] = useState(1);
  console.log(activeNav);

  return (
    <nav className="wrapper">
      <Link to="/home" className="nav-link" onClick={(e) => 
      setActiveNav(1) 
      }>
        <div>
          <img
            src={activeNav === 1 ? 'image/bar/home_active.png' : 'image/bar/home_inactive.png'}
            alt="home"
            style={{width:'2rem'}}
          />
        </div>
    홈
      </Link>

      <Link to="/chat" className="nav-link" onClick={() => setActiveNav(2)}>
        <div>
          <img
          src={activeNav === 2 ? 'image/bar/chat_active.png' : 'image/bar/chat_inactive.png'}
            alt="chat"
            style={{width:'2rem'}}
          />
        </div>
        채팅
      </Link>

      <Link to="/regi" className="nav-link" onClick={() => setActiveNav(3)}>
        <div>
          <img
          src={activeNav === 3 ? 'image/bar/write_active.png' : 'image/bar/write_inactive.png'}
            alt="regi"
            style={{width:'2rem'}}
          />
        </div>
        파티작성
      </Link>

      <Link to="/profile" className="nav-link" onClick={() => setActiveNav(4)}>
        <div>
          <img
          src={activeNav === 4 ? 'image/bar/my_active.png' : 'image/bar/my_inactive.png'}
            alt="profile"
            style={{width:'2rem'}}
          />
        </div>
        메인
      </Link>
    </nav>
  );
};

export default BottomNav;
