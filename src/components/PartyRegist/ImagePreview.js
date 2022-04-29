import React, { useState } from "react";

const ImagePreview = () => {
  const [myImage, setMyImage] = useState([]);

  const addImage = (e) => {
    const nowSelectImageList = e.target.files;
    const nowImagegetUrlList = [...myImage];
    for(let i=0; i<nowSelectImageList.length; i += 1){
const nowImageUrl = URL.createObjectURL(nowSelectImageList[i]);
nowImagegetUrlList.push(nowImageUrl)
    }
    setMyImage(nowImagegetUrlList);
  };

  // const removeSelectedImage = () => {
  //   setShowImages();
  // };

  return (
    <React.Fragment>
      <div style={styles.container}>
        <input type="file"
        accept="image/*"  
        multiple="multiple" 
        id="input-file"
        // style={{display:'none'}}
        onChange={ImagePreview} />

        {/* {showImages && (
          <div style={styles.preview}>
            <img
              src={URL.createObjectURL(...showImages)}
              style={styles.image}
              alt="Thumb"
            />
            <button onClick={removeSelectedImage} style={styles.delete}>
              이미지 삭제
            </button>
          </div>
        )} */}
      </div>
    </React.Fragment>
  );
};

export default ImagePreview;

// Just some styles
const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 50,
  },
  preview: {
    marginTop: 50,
    display: "flex",
    flexDirection: "column",
  },
  image: { maxWidth: "100%", maxHeight: 150 },
  delete: {
    cursor: "pointer",
    padding: 1,
    background: "red",
    color: "white",
    border: "none",
  },
};
