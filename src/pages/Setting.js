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
import { actionCreators as settingActions } from "../redux/modules/setting";
import { useDispatch } from "react-redux";
import { history } from "../redux/configStore";
import { useSelector } from "react-redux";

const Setting = () => {
  const dispatch = useDispatch();

  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [city, setCity] = useState("");
  const [region, setRegion] = useState("");
  const [food, setFood] = useState(null);
  const location = [city, region].join(" ");

  // const settingInfo = useSelector((state) => state.setting.setting);
  // console.log(settingInfo);
  console.log(gender);
  console.log(age);
  console.log(food);
  console.log(city);
  console.log(location);

  const saveSetting = () => {
    const Setting_info = {
      gender: gender,
      age: age,
      food: food,
      location: location,
    };

    console.log(Setting_info);

    dispatch(settingActions.saveInfo(Setting_info));
    history.push("/setting2");
  };

  return (
    <React.Fragment>
      <Header></Header>
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
        />
        {gender ? <SetAge age={age} setAge={setAge} /> : null}
        {age ? (
          <SetLocation
            city={city}
            setCity={setCity}
            region={region}
            setRegion={setRegion}
          />
        ) : null}
        {city && region ? <SetFood food={food} setFood={setFood} /> : null}
        {gender && age && city && region && food ? (
          <Button
            variant="contained"
            onClick={() => {
              saveSetting();
            }}
            sx={{
              position: "absolute",
              width: "92%",
              bottom: 50,
              left: "4%",
              right: "4%",
              height: "3em",
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
              bottom: 50,
              left: "4%",
              right: "4%",
              height: "3em",
            }}
          >
            다음
          </Button>
        )}
      </Box>
    </React.Fragment>
  );
};

export default Setting;
