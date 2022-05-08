import { Box, Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";

const Header = (props) => {
  const [count, setCount] = React.useState(0);

  function add_count() {
    if (count === 5) {
      setCount(0);
    } else {
      setCount(count + 1);
    }
  }

  return (
    <Box sx={{ height: "6em", padding: 2 }}>
      <Container
        onClick={() => {
          add_count();
        }}
      >
        <Progress width={(count / 5) * 100 + "%"} />
      </Container>
      <Typography
        component="p"
        variant="p"
        sx={{
          marginTop: 2,
          color: "black",
        }}
      >
        이제 프로필 정보 입력 후
      </Typography>
      <Typography component="p" variant="p" sx={{ color: "black" }}>
        바로 잇츠링을 사용할 수 있습니다!🙌🏻
      </Typography>
    </Box>
  );
};

const Container = styled.div`
  margin: 0 auto;
  background-color: #eee;
  width: 100%;
  height: 0.7em;
  display: flex;
  align-items: center;
  border-radius: 20px;
`;
const Progress = styled.div`
  background-color: red;
  width: ${(props) => props.width};
  height: 100%;
  transition: width 1s;
  border-radius: 20px;
`;

//프로그레스 바에 원 달아서 프로그레스 바가 차오를 때 같이 차오름
// const Dot = styled.div`
//   width: 70px;
//   height: 70px;
//   box-sizing: border-box;
//   border: 10px solid blue;
//   border-radius: 35px;
//   background: yellow;
//   margin-left: -35px;
// `;

export default Header;
