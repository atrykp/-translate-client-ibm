import axios from "axios";
import { getCardsListReset } from "../actions/flashcards-actions";
import { getListReset } from "../actions/tList-actions";
import {
  loginFail,
  loginRequest,
  userLogout,
  loginSuccess,
} from "../actions/user-actions";
import { getCardsListAction } from "./userFlashcardsAction";
import { userTListAction } from "./userTListAction";

const userLoginAction = (user) => async (dispatch) => {
  dispatch(loginRequest());
  try {
    const { data } = await axios.post(
      "https://translate-app-serv.herokuapp.com/api/users/login",
      user
    );
    if (data._id) {
      dispatch(loginSuccess(data));
      await dispatch(userTListAction(data.token));
      await dispatch(getCardsListAction(data.token));
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
