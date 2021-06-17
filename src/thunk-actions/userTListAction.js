import axios from "axios";
import {
  getListFail,
  getListRequest,
  getListSuccess,
} from "../actions/tList-actions";

export const userTListAction = (token) => async (dispatch) => {
  dispatch(getListRequest());
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const list = await axios.get(
      "http://localhost:5000/translator/list",
      config
    );
    if (!list) {
      throw new Error("something went wrong");
    }
    dispatch(getListSuccess(list));
  } catch (error) {
    dispatch(getListFail(error.message));
  }
};
