import { createAction, handleAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";

const GET_PARTYDETAIL = "GET_PARTYDETAIL";

const getPartyDetail = createAction(GET_PARTYDETAIL, (info) => ({ info }));

const initialState = {};

const token = sessionStorage.getItem("token");

const getDetailInfo = (partyId) => {
  return function (dispatch, getState, { history }) {
    // console.log(partyId);
    axios
      .get(`http://3.38.180.96/api/party/details/${partyId}`, )
      .then((res) => {
        dispatch(getPartyDetail(res.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export default handleActions(
  {
    [GET_PARTYDETAIL]: (state, action) =>
      produce(state, (draft) => {
        draft.info = action.payload.info;
      }),
  },
  initialState
);

const actionCreators = {
  getDetailInfo,
  getPartyDetail,
};

export { actionCreators };