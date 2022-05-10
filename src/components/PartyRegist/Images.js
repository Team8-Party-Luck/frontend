import React, { useState } from "react";
import styled from "styled-components";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import Box from "@mui/material/Box";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";

import Taste from "./Taste";
const Images = ({ image, setImage }) => {
  const [form, setForm] = useState("directly");
  const [showImages, setShowImages] = useState([]);

  // 이미지 상대경로 저장
  const handleAddImages = (event) => {
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

    setImage(imageLists);

    // blob형식으로 보내기
    // setPhotos(imageUrlLists)
    setShowImages(imageUrlLists);
  };

  // X버튼 클릭 시 이미지 삭제
  const handleDeleteImage = (id) => {
    setShowImages(showImages.filter((_, index) => index !== id));
  };

  return (
    <div className="addPicture">
      <FormControl sx={{ ml: "0.7rem" }}>
        <RadioGroup row defaultValue="직접 업로드">
          <FormControlLabel
            value="기본 이미지"
            control={<Radio />}
            label="기본 이미지"
            onClick={() => {
              setForm("basic");
            }}
          />
          <FormControlLabel
            value="직접 업로드"
            control={<Radio />}
            label="직접 업로드"
            onClick={() => {
              setForm("directly");
            }}
          />
        </RadioGroup>
      </FormControl>
      {form === "basic" ? (
        <Box sx={{ width: "21rem" }}>
          <Taste image={image} setImage={setImage} />
        </Box>
      ) : (
        <React.Fragment>
          <div
            style={{
              border: "1px solid black",
              borderRadius: "10px",
              margin: "0.5rem",
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
                  multiple
                  className="addButton"
                  name="안녕"
                  style={{ display: "none" }}
                />
                <Box component="div" sx={{ display: "inline-block" }}>
                  <AddPhotoAlternateIcon
                    sx={{ fontSize: "4rem", p: 2, m: 1 }}
                    style={{ border: "1px solid black", borderRadius: "4px" }}
                  />
                </Box>
              </label>

              <Box component="div" sx={{ display: "inline-block" }}>
                {showImages.map((image, id) => (
                  <span className="imageContainer" key={id}>
                    <Img
                      style={{ marginRight: "0", marginBottom:'0.5rem' }}
                      src={image}
                      alt={`${image}-${id}`}
                    />
                    <span onClick={() => handleDeleteImage(id)}>
                      {" "}
                      <DeleteIcon sx={{ mb: 7.5 }} />
                    </span>
                    {console.log(image)}
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

const AddPhoto = styled.span`
  border: 1px solid #dddddd;
  padding: 2rem;
  width: 5.5rem;
  margin: 0;
`;

export default Images;
