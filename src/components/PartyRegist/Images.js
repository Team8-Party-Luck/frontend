import React, { useState } from "react";
import styled from "styled-components";
import Input from "@mui/material/Input";
import Button from '@mui/material/Button';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';

const Images = () => {
  const [showImages, setShowImages] = useState([]);

  // 이미지 상대경로 저장
  const handleAddImages = (event) => {
    const imageLists = event.target.files;
    let imageUrlLists = [...showImages];

    for (let i = 0; i < imageLists.length; i++) {
      const currentImageUrl = URL.createObjectURL(imageLists[i]);
      imageUrlLists.push(currentImageUrl);
    }

    if (imageUrlLists.length > 10) {
      imageUrlLists = imageUrlLists.slice(0, 10);
    }

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
        {/* <Plus fill="#646F7C" /> */}
        <AddPhoto><AddPhotoAlternateIcon/></AddPhoto>
        {showImages.map((image, id) => (
        <div className="imageContainer" key={id}>
          <Img src={image} alt={`${image}-${id}`} />
          <div onClick={() => handleDeleteImage(id)} />
        </div>
      ))}
      </label>

      
    </div>
  );
};

const Img = styled.img`
border:1px solid gray;
  width: 4em;
  height: 4rem;
  margin: 10px;
  border-radius:5px;
`;

const AddPhoto = styled.div`
 border:1px solid #dddddd;
 padding:2rem;
`

export default Images;
