import React ,{ useState } from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import ImagePreview from "./ImagePreview";
import AddSearch from "./address/AddSearch";
import Images from "./Images";
const RegiWrite = () => {
  const [imgBase64, setImgBase64] = useState([]);
  const [imgFile, setImgFile] = useState(null);	
  return (
    <React.Fragment>
      {/* <ImagePreview /> */}
      <Images/>
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
        // style={{ minHeight: '10vh' }}
      >
        <TextField
          id="filled-basic"
          label="파티명"
          variant="outlined"
          style={{ width: "80%" }}
          sx={{ pb: 1 }}
        />
        <TextField
          id="filled-basic"
          label="음식점 이름"
          variant="outlined"
          style={{ width: "80%" }}
          sx={{ pb: 1 }}
        />

        <TextField
          id="filled-basic"
          label="인원수"
          variant="outlined"
          style={{ width: "80%" }}
          sx={{ pb: 1 }}
        />

        <TextField
          multiline
          id="filled-basic"
          label="파티 설명을 써주세요"
          rows={4}
          variant="outlined"
          style={{ width: "80%", height: "100" }}
          sx={{ pb: 1 }}
        />

        <TextField
          id="filled-basic"
          label="날짜"
          variant="outlined"
          style={{ width: "80%" }}
          sx={{ pb: 1 }}
        />

        <TextField
          id="filled-basic"
          label="시간"
          variant="outlined"
          style={{ width: "80%" }}
          sx={{ pb: 1 }}
        />

        <AddSearch />
        <TextField
          id="filled-basic"
          label="주소"
          variant="outlined"
          style={{ width: "80%" }}
        />
         <TextField
          id="filled-basic"
          label="상세주소"
          variant="outlined"
          style={{ width: "80%" }}
          sx={{ pb: 1 }}
        />
        
        <Button variant="outlined" style={{ height: "3rem", width: "7rem" }}>
          등록
        </Button>
      </Grid>
    </React.Fragment>
  );
};

export default RegiWrite;
