import React, { useState } from "react";
import styled from "styled-components";
import { muiStyled } from "@mui/material/styles";

import Box from "@mui/material/Box";

import ic_camera from "../../static/images/icon/ic_camera.png";
import radioButton from "../../static/images/icon/라디오버튼.png";
import radioButtonSelc from "../../static/images/icon/라디오버튼-1.png";
import deleteIcon from "../../static/images/icon/파티등록_이미지삭제버튼.png";

import Taste from "./Taste";
const Images = ({ image, setImage, defaultImage, setDefaultImage }) => {
  const [form, setForm] = useState("directly");
  const [showImages, setShowImages] = useState([]);

  // 이미지 상대경로 저장
  const handleAddImages = (event) => {
    if (defaultImage.length !== 0) {
      setDefaultImage([]);
    }
    const imageLists = event.target.files;
    let imageUrlLists = [...showImages];

    // console.log(imageLists);
    for (let i = 0; i < imageLists.length; i++) {
      const currentImageUrl = URL.createObjectURL(imageLists[i]);
      imageUrlLists.push(currentImageUrl);
    }

    if (imageUrlLists.length > 7) {
      imageUrlLists = imageUrlLists.slice(0, 7);
    }
    // if(defaultImage === !null){
    //   setDefaultImage(null);
    // }
    setImage(imageLists);

    // blob형식으로 보내기
    // setPhotos(imageUrlLists)
    setShowImages(imageUrlLists);
  };

  // X버튼 클릭 시 이미지 삭제
  const handleDeleteImage = (id) => {
    setShowImages(showImages.filter((_, index) => index !== id));
    setImage(showImages.filter((_, index) => index !== id));
  };

  return (
    <div
      className="addPicture"
      style={{ width: "100%", marginBottom: "1.5rem" }}
    >
      <div style={{ marginBottom: "1rem" }}>
        <span style={{ display: "flex", alignItems: "center" }}>
          {form === "basic" ? (
            <img
              alt="라디오버튼"
              src={radioButtonSelc}
              style={{ width: "1.2rem", height: "1.2rem" }}
              value="basic"
              onClick={() => {
                setForm("basic");
              }}
            />
          ) : (
            <img
              alt="라디오버튼"
              src={radioButton}
              style={{ width: "1.2rem", height: "1.2rem" }}
              value="basic"
              onClick={() => {
                setForm("basic");
              }}
            />
          )}
          <span style={{ marginLeft: "0.5rem", marginRight: "1rem" }}>
            기본 이미지
          </span>
          {/* </span> */}
          {/* <span style={{ display:'flex', alignItems:'center'}}> */}
          {form === "directly" ? (
            <img
              alt="라디오버튼"
              src={radioButtonSelc}
              style={{ width: "1.2rem", height: "1.2rem" }}
              value="directly"
              onClick={(e) => {
                setForm("directly");
              }}
            />
          ) : (
            <img
              alt="라디오버튼"
              src={radioButton}
              style={{ width: "1.2rem", height: "1.2rem" }}
              value="directly"
              onClick={(e) => {
                setForm("directly");
              }}
            />
          )}
          <span style={{ marginLeft: "0.5rem" }}>직접 업로드</span>
        </span>
      </div>

      {form === "basic" ? (
        <Taste
          image={image}
          setImage={setImage}
          defaultImage={defaultImage}
          setDefaultImage={setDefaultImage}
          setShowImages={setShowImages}
        />
      ) : (
        <React.Fragment>
          <div
            style={{
              width: "21rem",
            }}
          >
            <Box
              component="div"
              sx={{
                whiteSpace: "nowrap",
                overflowX: "auto", 
                display: "flex",
                alignItems: "center",
              }}
            >
              <CamerBox
                htmlFor="input-file"
                className="addButton"
                onChange={handleAddImages}
              >
                <input
                  type="file"
                  id="input-file"
                  accept="image/*,"
                  multiple
                  className="addButton"
                  style={{ display: "none" }}
                />
                <Box
                  component="div"
                  // sx={{ display: "inline-block" }}
                  style={{ border: "1px solid black", width:'4.5rem', height:'4.5rem', borderRadius:'0.7rem', paddingTop:'1rem' }}
                >
                  <img src={ic_camera} alt="camera_icon" />
                  <Box>{showImages.length}/7 </Box>
                </Box>
              </CamerBox>

              <Box component="div" sx={{ display: "inline-block" }}>
                {showImages.map((image, id) => (
                  <span className="imageContainer" key={id}>
                    <Img
                      style={{
                        marginRight: "0",
                        marginBottom: "0.5rem",
                        borderRadius: "0.7rem",
                        width: "4.5rem",
                        height: "4.5rem",
                      }}
                      src={image}
                      alt={`${image}-${id}`}
                    />
                    <span onClick={() => handleDeleteImage(id)}>
                      {" "}
                      <img
                        src={deleteIcon}
                        alt="deletePhoto"
                        style={{
                          width: "1.3rem",
                          height: "1.3rem",
                          marginBottom: "4rem",
                          marginLeft: "-1rem",
                        }}
                      />
                      {/* <deleteIcon sx={{ mb: 8, ml: -1.7, fontSize: "1.3rem" }} /> */}
                    </span>
                  </span>
                ))}
              </Box>
            </Box>
          </div>
        </React.Fragment>
      )}
    </div>
  );
};

export default Images;

const Img = styled.img`
  border: 1px solid gray;
  width: 4.5rem;
  height: 4.5rem;
  margin: 10px;
  border-radius: 5px;
`;

const CamerBox = styled.label`
  text-align: center;
  display: inline-block;
`;
