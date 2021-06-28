import axios from "axios";
import {
  loginFail,
  loginRequest,
  loginReset,
  loginSuccess,
} from "../actions/user-actions";

const userLoginAction = (user) => async (dispatch) => {
  dispatch(loginReset());
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
