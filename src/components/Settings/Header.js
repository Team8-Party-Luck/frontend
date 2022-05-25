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
        바로 잇츨링을 사용할 수 있습니다!🙌🏻
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

export default Header;
