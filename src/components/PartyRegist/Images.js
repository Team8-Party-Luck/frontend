import React, { useState } from "react";
import styled from "styled-components";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import Box from "@mui/material/Box";

const Images = ({photos, setPhotos}) => {
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

    setPhotos(imageLists)

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

        <div
          style={{
            border: "1px solid black",
            borderRadius: "10px",
            margin: "0.5rem",
            width: "23.4rem",
          }}
        >
          <Box
            component="div"
            sx={{ whiteSpace: "nowrap", overflowX: "auto",}}
          >
            <Box component="div" sx={{ display: "inline-block" }}>
              <AddPhotoAlternateIcon
                sx={{ fontSize: '4rem', m: 2 }}
                style={{ border: "1px solid black", borderRadius: "4px", }}
              />
            </Box>

            <Box component="div" sx={{ display: "inline-block", }}>
              {showImages.map((image, id) => (
                <span className="imageContainer" key={id}>
                  <Img src={image} alt={`${image}-${id}`} />
                  <span onClick={() => handleDeleteImage(id)}>x</span>
                </span>
              ))}
            </Box>
          </Box>
        </div>
      </label>
    </div>
  );
};

const Img = styled.img`
  border: 1px solid gray;
  width: 4em;
  height: 4rem;
  margin: 10px;
  border-radius:5px;
`;

const AddPhoto = styled.span`
  border: 1px solid #dddddd;
  padding: 2rem;
  width: 5.5rem;
  margin: 0;
`;

export default Images;
