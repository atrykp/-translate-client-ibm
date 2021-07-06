import axios from "axios";
import {
  editUserRequest,
  editUserSuccess,
  editUserFail,
  removeUserRequest,
  removeUserSuccess,
  removeUserFail,
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
export const removeUserAction = (token) => async (dispatch) => {
  try {
    dispatch(removeUserRequest());
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    const { data } = await axios.delete(
      `https://translate-app-serv.herokuapp.com/api/users/user`,
      config
    );
    if (!data) {
      throw new Error("couldn't remove user, something went wrong");
    }
    dispatch(removeUserSuccess());
  } catch (error) {
    dispatch(removeUserFail(error.message));
  }
};
