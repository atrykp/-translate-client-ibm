import axios from "axios";
import {
  editUserRequest,
  editUserSuccess,
  editUserFail,
} from "../actions/user-actions";

export const updateUserAction = (token, userInfo) => async (dispatch) => {
  try {
    dispatch(editUserRequest());
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    const { data } = await axios.put(
      `https://translate-app-serv.herokuapp.com/api/users/user`,
      userInfo,
      config
    );
    if (!data) {
      throw new Error("couldn't update user info");
    }
    dispatch(editUserSuccess());
  } catch (error) {
    dispatch(editUserFail(error.message));
  }
};
