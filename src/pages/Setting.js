import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useState } from "react";
import SetGender from "../components/Settings/SetGender";
import SetAge from "../components/Settings/SetAge";
import SetLocation from "../components/Settings/SetLocation";
import SetFood from "../components/Settings/SetFood";
import Header from "../components/Settings/Header";
import { actionCreators as userActions } from "../redux/modules/user";
import { useDispatch } from "react-redux";
import { history } from "../redux/configStore";
import { useSelector } from "react-redux";
import styled from "styled-components";

const Setting = () => {
  const dispatch = useDispatch();

  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [city, setCity] = useState("");
  const [region, setRegion] = useState("");
  const [food, setFood] = useState([]);
  const [count, setCount] = useState(0);

  function add_count() {
    if (count === 5) {
      setCount(0);
    } else {
      setCount(count + 1);
    }
  }

  // const settingInfo = useSelector((state) => state.setting.setting);
  // console.log(settingInfo);
  // console.log(gender);
  // console.log(age);
  // console.log(food);
  // console.log(city);

  const saveSetting = () => {
    const Setting_info = {
      gender: gender,
      age: age,
      food: food,
      city: city,
      region: region,
    };

    console.log(Setting_info);

    dispatch(userActions.saveInfo(Setting_info));
    history.push("/setting2");
  };

  return (
    <React.Fragment>
      <Box sx={{ height: "6em", padding: 2 }}>
        <Contain>
          <Progress width={(count / 5) * 100 + "%"} />
        </Contain>
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
      <Box
        sx={{
          padding: 2,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <SetGender
          gender={gender}
          setGender={setGender}
          sx={{ position: "relative" }}
          count={count}
          setCount={setCount}
        />
        {gender ? (
          <SetAge age={age} setAge={setAge} count={count} setCount={setCount} />
        ) : null}
        {age ? (
          <>
            <Typography
              component="h4"
              variant="p"
              sx={{ marginTop: 6, marginBottom: 1.5 }}
            >
              지역을 선택해주세요!
            </Typography>
            <SetLocation
              city={city}
              setCity={setCity}
              region={region}
              setRegion={setRegion}
              count={count}
              setCount={setCount}
            />
          </>
        ) : null}
        {city && region ? (
          <SetFood
            food={food}
            setFood={setFood}
            count={count}
            setCount={setCount}
          />
        ) : null}
        {gender && age && city && region && food.length !== 0 ? (
          <Button
            variant="contained"
            onClick={() => {
              saveSetting();
            }}
            sx={{
              position: "absolute",
              width: "92%",
              bottom: 30,
              left: "4%",
              right: "4%",
              height: "4em",
              background: "#FF6853",
            }}
          >
            다음
          </Button>
        ) : (
          <Button
            variant="outlined"
            sx={{
              position: "absolute",
              width: "92%",
              bottom: 30,
              left: "4%",
              right: "4%",
              height: "4em",
              border: "1px solid #FF6853",
              color: "#FF6853",
            }}
          >
            다음
          </Button>
        )}
      </Box>
    </React.Fragment>
  );
};

const Contain = styled.div`
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

export default Setting;
