import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";

const Spinner = () => {
  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
  const [open, setOpen] = React.useState(true);

  return (
    // <Box sx={{ display: "flex", margin: "0 auto" }}>
    //   <CircularProgress />
    // </Box>
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        aria-describedby="alert-dialog-slide-description"
        style={{ background: "#FF6853" }}
      >
        <DialogTitle color="#FF6853">잇츨링에 오신 것을 환영해요🥰</DialogTitle>
      </Dialog>
    </div>
  );
};

export default Spinner;
