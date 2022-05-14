import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

const Taste = ({ image, setImage }) => {
  return (
    <Stack>
      <Stack direction="row" spacing={2} sx={{mb:2}}>
        {image === "한식" ? (
          <Stack spacing={2}>
            <img
              alt="한식"
              src="image/category/selected/korean.png"
              style={{ width: "4em", height: "4em" }}
              onClick={() => {
                setImage("한식");
              }}
            />
            <Box style={{ marginTop: 5, marginLeft: "1rem" }}>한식</Box>
          </Stack>
        ) : (
          <Stack spacing={2}>
            <img
              alt="한식"
              src="image/category/select/korean.png"
              style={{ width: "4.5em", height: "4em" }}
              onClick={() => {
                setImage("한식");
              }}
            />
            <Box style={{ marginTop: 5, marginLeft: "1.3rem" }}>한식</Box>
          </Stack>
        )}
        {image === "중식" ? (
          <Stack spacing={2}>
            <img
              alt="중식"
              src="image/category/selected/chinese.png"
              style={{ width: "4em", height: "4em" }}
              onClick={() => {
                setImage("중식");
              }}
            />
            <Box style={{ marginTop: 5, marginLeft: "1rem" }}>중식</Box>
          </Stack>
        ) : (
          <Stack spacing={2}>
            <img
              alt="중식"
              src="image/category/select/chinese.png"
              style={{ width: "4.5em", height: "4em" }}
              onClick={() => {
                setImage("중식");
              }}
            />
            <Box style={{ marginTop: 5, marginLeft: "1.3rem" }}>중식</Box>
          </Stack>
        )}
        {image === "일식" ? (
          <Stack spacing={2}>
            <img
              alt="일식"
              src="image/category/selected/japanese.png"
              style={{ width: "4em", height: "4em" }}
              onClick={() => {
                setImage("일식");
              }}
            />
            <Box style={{ marginTop: 5, marginLeft: "1rem" }}>일식</Box>
          </Stack>
        ) : (
          <Stack spacing={2}>
            <img
              alt="일식"
              src="image/category/select/japanese.png"
              style={{ width: "4.5em", height: "4em" }}
              onClick={() => {
                setImage("일식");
              }}
            />
            <Box style={{ marginTop: 5, marginLeft: "1.3rem" }}>일식</Box>
          </Stack>
        )}
        {image === "양식" ? (
          <Stack spacing={2}>
            <img
              alt="양식"
              src="image/category/selected/western.png"
              style={{ width: "4em", height: "4em" }}
              onClick={() => {
                setImage("양식");
              }}
            />
            <Box style={{ marginTop: 5, marginLeft: "1rem" }}>양식</Box>
          </Stack>
        ) : (
          <Stack spacing={2}>
            <img
              alt="양식"
              src="image/category/select/western.png"
              style={{ width: "4.5em", height: "4em" }}
              onClick={() => {
                setImage("양식");
              }}
            />
            <Box style={{ marginTop: 5, marginLeft: "1.3rem" }}>양식</Box>
          </Stack>
        )}
      </Stack>
      <Stack direction="row" spacing={2}>
        {image === "패스트푸드" ? (
          <Stack spacing={2}>
            <img
              alt="패스트푸드"
              src="image/category/selected/fastfood.png"
              style={{ width: "4em", height: "4em" }}
              onClick={() => {
                setImage("패스트푸드");
              }}
            />
            <Box style={{ marginTop: 5, marginLeft: "1rem" }}>패스트푸드</Box>
          </Stack>
        ) : (
          <Stack spacing={2}>
            <img
              alt="패스트푸드"
              src="image/category/select/fastfood.png"
              style={{ width: "4.5em", height: "4em" }}
              onClick={() => {
                setImage("패스트푸드");
              }}
            />
            <Box style={{ marginTop: 5, marginLeft: "1.3rem" }}>패스트푸드</Box>
          </Stack>
        )}
        {image === "샐러드" ? (
          <Stack spacing={2}>
            <img
              alt="샐러드"
              src="image/category/selected/salad.png"
              style={{ width: "4em", height: "4em" }}
              onClick={() => {
                setImage("샐러드");
              }}
            />
            <Box style={{ marginTop: 5, marginLeft: "1rem" }}>샐러드</Box>
          </Stack>
        ) : (
          <Stack spacing={2}>
            <img
              alt="샐러드"
              src="image/category/select/salad.png"
              style={{ width: "4.5em", height: "4em" }}
              onClick={() => {
                setImage("샐러드");
              }}
            />
            <Box style={{ marginTop: 5, marginLeft: "1.3rem" }}>샐러드</Box>
          </Stack>
        )}
        {image === "디저트" ? (
          <Stack spacing={2}>
            <img
              alt="디저트"
              src="image/category/selected/coffee.png"
              style={{ width: "4em", height: "4em" }}
              onClick={() => {
                setImage("디저트");
              }}
            />
            <Box style={{ marginTop: 5, marginLeft: "1rem" }}>디저트</Box>
          </Stack>
        ) : (
          <Stack spacing={2}>
            <img
              alt="디저트"
              src="image/category/select/coffee.png"
              style={{ width: "4.5em", height: "4em" }}
              onClick={() => {
                setImage("디저트");
              }}
            />
            <Box style={{ marginTop: 5, marginLeft: "1.3rem" }}>디저트</Box>
          </Stack>
        )}
        {image === "기타" ? (
          <Stack spacing={2}>
            <img
              alt="기타"
              src="image/category/selected/etc.png"
              style={{ width: "4em", height: "4em" }}
              onClick={() => {
                setImage("기타");
              }}
            />
            <Box style={{ marginTop: 5, marginLeft: "1rem" }}>기타</Box>
          </Stack>
        ) : (
          <Stack spacing={2}>
            <img
              alt="기타"
              src="image/category/select/etc.png"
              style={{ width: "4.5em", height: "4em" }}
              onClick={() => {
                setImage("기타");
              }}
            />
            <Box style={{ marginTop: 5, marginLeft: "1.3rem" }}>기타</Box>
          </Stack>
        )}
      </Stack>
    </Stack>
  );
};

export default Taste;
