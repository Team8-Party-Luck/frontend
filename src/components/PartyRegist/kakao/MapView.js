import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from "@mui/material/TextField";
import KakaoMap from './KakaoMap';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 2,
  height:'40rem'
};

export default function MapView() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div style={{ width: "80%" }}>
      <TextField
        // value={store || ''}
        id="eateryName"
        variant="standard"
        label="식당명"
        onClick={handleOpen}
        style={{ width: "100%" }}
        sx={{ mb: 1.5 }}
        InputProps={{
          readOnly: true,
        }}
      ></TextField>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <KakaoMap/>
        </Box>
      </Modal>
    </div>
  );
}