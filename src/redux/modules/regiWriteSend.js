import axios from "axios";
const token = sessionStorage.getItem("token");

const RegiWriteSend = (RegiInfo) => {
  axios
    .post("http://3.38.180.96/api/party", RegiInfo, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type":
          "multipart/form-data; boundary=----WebKitFormBoundaryfApYSlK1ODwmeKW3",
      },
    })
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
};

export default RegiWriteSend;
