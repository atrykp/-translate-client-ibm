import axios from "axios";
import {
  getListFail,
  getListRequest,
  getListSuccess,
} from "../actions/tList-actions";

export const userTListAction = (token) => async (dispatch) => {
  try {
    dispatch(getListRequest());
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    const { data } = await axios.get(
      "http://localhost:5000/translator/list",
      config
    );

    if (!data) {
      throw new Error("something went wrong");
    }
    dispatch(getListSuccess(data.userList));
  } catch (error) {
    dispatch(getListFail(error.message));
  }
};
