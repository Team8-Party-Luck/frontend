import axios from "axios";

const newPartyGet = () => {
  axios
    .post("https://4e82a758-8b0a-4272-b592-53d51494ed74.mock.pstmn.io//home/parties/latest")
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};

export default newPartyGet;