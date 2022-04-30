import axios from "axios";

const RegiWriteSend = (state) => {
  axios
    .post("/url", {
      partyName: state.partyName,
      eateryName: state.eateryName,
      userNum: state.userNum,
      partyDesc: state.partyDesc,
      day: state.day,
      time: state.time,
      addr: state.addr,
      detailAddr: state.detailAddr,
    })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};

export default RegiWriteSend;