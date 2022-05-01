import axios from "axios";

const RegiWriteSend = (state) => {
  axios
    .post("/url", {
      photos: state.photos,
      partyName: state.partyName,
      eateryName: state.eateryName,
      userNum: state.userNum,
      meetPlace: state.meetPlace,
      day: state.day,
      time: state.time,
      partyDesc: state.partyDesc,
    })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};

export default RegiWriteSend;