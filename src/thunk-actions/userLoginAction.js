import axios from "axios";
import { getCardsListReset } from "../actions/flashcards-actions";
import { getListReset } from "../actions/tList-actions";
import {
  loginFail,
  loginRequest,
  userLogout,
  loginSuccess,
} from "../actions/user-actions";

const userLoginAction = (user) => async (dispatch) => {
  dispatch(userLogout());
  dispatch(loginRequest());
  try {
    const { data } = await axios.post(
      "https://translate-app-serv.herokuapp.com/api/users/login",
      user
    );
    if (data._id) {
      dispatch(loginSuccess(data));
    } else {
      throw new Error("Sorry invalid email or password");
    }
  } catch (error) {
    dispatch(loginFail(error));
  }
};

export default userLoginAction;

export const userLogoutAction = () => async (dispatch) => {
  localStorage.setItem("userInfo", {});
  dispatch(userLogout());
  dispatch(getListReset());
  dispatch(getCardsListReset());
};
