import React from "react";
import styled from "styled-components";
import imageCompression from "browser-image-compression";
import { useState } from "react";
import { useRef } from "react";
import Resizer from "react-image-file-resizer";
//컬러시스템
import { color } from "../../shared/ColorSystem";
//이미지
import DefaultImg from "../../static/images/profile/default.png";

//mui
import { Box, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

const EditProflie = (props) => {
  const {
    imageSrc,
    setImageSrc,
    imageUrl,
    setImageUrl,
    nickname,
    setNickname,
  } = props;

  //이미지 리사이징
  const resizeFile = (file) =>
    new Promise((resolve) => {
      Resizer.imageFileResizer(
        file,
        300,
        300,
        "JPEG",
        95,
        0,
        (uri) => {
          resolve(uri);
          // console.log(uri);
        },
        "file"
      );
    });

  // 선택한 파일 정보
  const fileInput = useRef();
  const selectFile = async () => {
    const reader = new FileReader();
    const file = fileInput.current.files[0];

    // 이미지 파일 리사이즈 이후 비동기적으로 처리
    // resizeFile 함수 실행후 반환 받은 파일 객체로 이후 과정 처리
    const img = await resizeFile(file);
    // console.log(file);
    // console.log(img);

    setImageUrl(img);
    reader.readAsDataURL(img);

    reader.onloadend = () => {
      setImageSrc(reader.result);
      // console.log(reader.result);
    };
  };

  const Input = styled("input")({
    display: "none",
  });

  return (
    <ProfileBox>
      <ImgBox src={imageSrc === null ? DefaultImg : imageSrc} />
      <NicknameBox>
        <NicknameText>닉네임</NicknameText>
        <NicknameInput
          onChange={(e) => {
            setNickname(e.target.value);
          }}
          defaultValue={nickname}
        />
      </NicknameBox>
      <Box
        sx={{
          background: "#ff6853",
          width: 25,
          height: 25,
          borderRadius: 25,
          position: "absolute",
          top: "2.4em",
          left: "2.5em",
        }}
      ></Box>
      <label htmlFor="icon-button-file">
        <Input
          accept="image/*"
          id="icon-button-file"
          type="file"
          ref={fileInput}
          onChange={() => {
            selectFile();
          }}
        />
        <IconButton
          aria-label="upload picture"
          component="span"
          sx={{
            position: "absolute",
            top: "1.5em",
            left: "1.59em",
            color: "white",
          }}
        >
          <EditIcon
            sx={{
              width: 15,
              height: 15,
            }}
          />
        </IconButton>
      </label>
    </ProfileBox>
  );
};

const ProfileBox = styled.div`
  display: flex;
  position: relative;
  margin-bottom: 2em;
`;

const NicknameBox = styled.div`
  width: 100%;
`;

const NicknameText = styled.p`
  font-size: 1em;
  padding-bottom: 0.2em;
`;

const NicknameInput = styled.input`
  width: 100%;
  height: 2.5em;
  border: 1px solid ${color.line};
  border-radius: 3px;
  padding-left: 0.5em;
  font-size: 1em;
`;

const ImgBox = styled.img`
  width: 4em;
  height: 4em;
  border-radius: 4em;
  margin-right: 0.8em;
`;

export default EditProflie;
