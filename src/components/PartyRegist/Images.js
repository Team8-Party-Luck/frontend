import React, { useState } from "react";
import styled from "styled-components";

import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import Box from "@mui/material/Box";
import ClearIcon from "@mui/icons-material/Clear";

import Taste from "./Taste";
const Images = ({ image, setImage, defaultImage, setDefaultImage }) => {
  const [form, setForm] = useState("directly");
  const [showImages, setShowImages] = useState([]);

  const handleRadio = (e) => {
    setForm(e.target.value);
  };

  // 이미지 상대경로 저장
  const handleAddImages = (event) => {
    if (defaultImage.length !== 0) {
      setDefaultImage([]);
    }
    const imageLists = event.target.files;
    let imageUrlLists = [...showImages];

    console.log(imageLists);
    for (let i = 0; i < imageLists.length; i++) {
      const currentImageUrl = URL.createObjectURL(imageLists[i]);
      imageUrlLists.push(currentImageUrl);
    }

    if (imageUrlLists.length > 10) {
      imageUrlLists = imageUrlLists.slice(0, 10);
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
    <div className="addPicture" style={{ marginBottom: "1.5rem" }}>
      <label>
        <ImageRadio
          type="radio"
          value="basic"
          checked={form === "basic"}
          onChange={handleRadio}
        />
        기본 이미지
      </label>
      <label>
        <ImageRadio
          type="radio"
          value="directly"
          checked={form === "directly"}
          onChange={handleRadio}
        />
        직접 업로드
      </label>

      {form === "basic" ? (
        <Box sx={{ width: "21em" }}>
          <Taste
            image={image}
            setImage={setImage}
            defaultImage={defaultImage}
            setDefaultImage={setDefaultImage}
            setShowImages={setShowImages}
          />
        </Box>
      ) : (
        <React.Fragment>
          <Box style={{ marginLeft: "2rem" }}>{showImages.length}/10 </Box>
          <div
            style={{
              // border: "1px solid black",
              // borderRadius: "10px",
              // margin: "0.5rem",
              width: "21rem",
            }}
          >
            <Box
              component="div"
              sx={{ whiteSpace: "nowrap", overflowX: "auto" }}
            >
              <label
                htmlFor="input-file"
                className="addButton"
                onChange={handleAddImages}
              >
                <input
                  type="file"
                  id="input-file"
                  accept="image/*"
                  multiple
                  className="addButton"
                  style={{ display: "none" }}
                />
                <Box component="div" sx={{ display: "inline-block" }}>
                  <AddPhotoAlternateIcon
                    sx={{ fontSize: "4.5rem", p: 2.5, m: 1 }}
                    style={{ border: "1px solid black", borderRadius: "9px" }}
                  />
                </Box>
              </label>

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
                      <ClearIcon sx={{ mb: 8, ml: -1.7, fontSize: "1.3rem" }} />
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

const Img = styled.img`
  border: 1px solid gray;
  width: 4em;
  height: 4rem;
  margin: 10px;
  border-radius: 5px;
`;

const ImageRadio = styled.input`
  height: 16px;
  width: 16px;
  vertical-align: middle;
  margin: 15px 5px 15px 10px;
  accent-color: #f7543e;
`;

export default Images;
