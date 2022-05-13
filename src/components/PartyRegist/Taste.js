import React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { createTheme } from "@mui/material/styles";
import { purple } from "@mui/material/colors";
import Stack from "@mui/material/Stack";

const Taste = ({ image, setImage }) => {
  return (
    <Stack>
      <Stack direction="row" spacing={2}>
        {image === "한식" ? (
          <Stack spacing={2}>
            <Button
              variant="contained"
              sx={{
                width: "4rem",
                height: "4rem",
                borderRadius: "50%",
                marginRight: "0.5em",
                background: "#FF6853",
              }}
              onClick={() => {
                setImage("한식");
              }}
            ></Button>
            <Box style={{ marginTop: 5, marginLeft: "1rem" }}>한식</Box>
          </Stack>
        ) : (
          <Stack spacing={2}>
            <Button
              variant="outlined"
              sx={{
                width: "4rem",
                height: "4rem",
                borderRadius: "50%",
                marginRight: "0.5em",
                border: "1px solid #FF6853",
                color: "#FF6853",
              }}
              onClick={() => {
                setImage("한식");
              }}
            ></Button>
            <Box style={{ marginTop: 5, marginLeft: "1rem" }}>한식</Box>
          </Stack>
        )}
        {image === "중식" ? (
          <Stack spacing={2}>
            <Button
              variant="contained"
              sx={{
                width: "4rem",
                height: "4rem",
                borderRadius: "50%",
                marginRight: "0.5em",
                background: "#FF6853",
              }}
              onClick={() => {
                setImage("중식");
              }}
            ></Button>
            <Box style={{ marginTop: 5, marginLeft: "1rem" }}>중식</Box>
          </Stack>
        ) : (
          <Stack spacing={2}>
            <Button
              variant="outlined"
              sx={{
                width: "4rem",
                height: "4rem",
                borderRadius: "50%",
                marginRight: "0.5em",
                border: "1px solid #FF6853",
                color: "#FF6853",
              }}
              onClick={() => {
                setImage("중식");
              }}
            ></Button>
            <Box style={{ marginTop: 5, marginLeft: "1rem" }}>중식</Box>
          </Stack>
        )}
        {image === "일식" ? (
          <Stack spacing={2}>
            <Button
              variant="contained"
              sx={{
                width: "4rem",
                height: "4rem",
                borderRadius: "50%",
                marginRight: "0.5em",
                background: "#FF6853",
              }}
              onClick={() => {
                setImage("일식");
              }}
            ></Button>
            <Box style={{ marginTop: 5, marginLeft: "1rem" }}>일식</Box>
          </Stack>
        ) : (
          <Stack spacing={2}>
            <Button
              variant="outlined"
              sx={{
                width: "4rem",
                height: "4rem",
                borderRadius: "50%",
                marginRight: "0.5em",
                border: "1px solid #FF6853",
                color: "#FF6853",
              }}
              onClick={() => {
                setImage("일식");
              }}
            ></Button>
            <Box style={{ marginTop: 5, marginLeft: "1rem" }}>일식</Box>
          </Stack>
        )}
        {image === "양식" ? (
          <Stack spacing={2}>
            <Button
              variant="contained"
              sx={{
                width: "4rem",
                height: "4rem",
                borderRadius: "50%",
                marginRight: "0.5em",
                background: "#FF6853",
              }}
              onClick={() => {
                setImage("양식");
              }}
            ></Button>
            <Box style={{ marginTop: 5, marginLeft: "0.5rem" }}>양식</Box>
          </Stack>
        ) : (
          <Stack spacing={2}>
            <Button
              variant="outlined"
              sx={{
                width: "4rem",
                height: "4rem",
                borderRadius: "50%",
                marginRight: "0.5em",
                border: "1px solid #FF6853",
                color: "#FF6853",
              }}
              onClick={() => {
                setImage("양식");
              }}
            ></Button>
            <Box style={{ marginTop: 5, marginLeft: "0.5rem" }}>양식</Box>
          </Stack>
        )}
      </Stack>
      <Stack direction="row" spacing={2}>
        {image === "패스트푸드" ? (
          <Stack spacing={2}>
            <Button
              variant="contained"
              sx={{
                width: "4rem",
                height: "4rem",
                borderRadius: "50%",
                marginRight: "0.5em",
                background: "#FF6853",
              }}
              onClick={() => {
                setImage("패스트푸드");
              }}
            ></Button>
            <Box style={{ marginTop: 5, marginLeft: "1rem" }}>패스트푸드</Box>
          </Stack>
        ) : (
          <Stack spacing={2}>
            <Button
              variant="outlined"
              sx={{
                width: "4rem",
                height: "4rem",
                borderRadius: "50%",
                marginRight: "0.5em",
                border: "1px solid #FF6853",
                color: "#FF6853",
              }}
              onClick={() => {
                setImage("패스트푸드");
              }}
            ></Button>
            <Box style={{ marginTop: 5, marginLeft: "1rem" }}>패스트푸드</Box>
          </Stack>
        )}
         {image === "샐러드" ? (
          <Stack spacing={2}>
            <Button
              variant="contained"
              sx={{
                width: "4rem",
                height: "4rem",
                borderRadius: "50%",
                marginRight: "0.5em",
                background: "#FF6853",
              }}
              onClick={() => {
                setImage("샐러드");
              }}
            ></Button>
            <Box style={{ marginTop: 5, marginLeft: "1rem" }}>샐러드</Box>
          </Stack>
        ) : (
          <Stack spacing={2}>
            <Button
              variant="outlined"
              sx={{
                width: "4rem",
                height: "4rem",
                borderRadius: "50%",
                marginRight: "0.5em",
                border: "1px solid #FF6853",
                color: "#FF6853",
              }}
              onClick={() => {
                setImage("샐러드");
              }}
            ></Button>
            <Box style={{ marginTop: 5, marginLeft: "1rem" }}>샐러드</Box>
          </Stack>
        )}
        {image === "디저트" ? (
          <Stack spacing={2}>
            <Button
              variant="contained"
              sx={{
                width: "4rem",
                height: "4rem",
                borderRadius: "50%",
                marginRight: "0.5em",
                background: "#FF6853",
              }}
              onClick={() => {
                setImage("디저트");
              }}
            ></Button>
            <Box style={{ marginTop: 5, marginLeft: "1rem" }}>디저트</Box>
          </Stack>
        ) : (
          <Stack spacing={2}>
            <Button
              variant="outlined"
              sx={{
                width: "4rem",
                height: "4rem",
                borderRadius: "50%",
                marginRight: "0.5em",
                border: "1px solid #FF6853",
                color: "#FF6853",
              }}
              onClick={() => {
                setImage("디저트");
              }}
            ></Button>
            <Box style={{ marginTop: 5, marginLeft: "1rem" }}>디저트</Box>
          </Stack>
        )}
         {image === "기타" ? (
          <Stack spacing={2}>
            <Button
              variant="contained"
              sx={{
                width: "4rem",
                height: "4rem",
                borderRadius: "50%",
                marginRight: "0.5em",
                background: "#FF6853",
              }}
              onClick={() => {
                setImage("기타");
              }}
            ></Button>
            <Box style={{ marginTop: 5, marginLeft: "1rem" }}>기타</Box>
          </Stack>
        ) : (
          <Stack spacing={2}>
            <Button
              variant="outlined"
              sx={{
                width: "4rem",
                height: "4rem",
                borderRadius: "50%",
                marginRight: "0.5em",
                border: "1px solid #FF6853",
                color: "#FF6853",
              }}
              onClick={() => {
                setImage("기타");
              }}
            ></Button>
            <Box style={{ marginTop: 5, marginLeft: "1rem" }}>기타</Box>
          </Stack>
        )}
      </Stack>
    </Stack>
  );
};

export default Taste;
