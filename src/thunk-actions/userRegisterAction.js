import axios from "axios";
import {
  registerFail,
  registerRequest,
  registerSuccess,
} from "../actions/user-actions";

const userRegisterAction = (user) => async (dispatch) => {
  dispatch(registerRequest());
  const { name, email, password } = user;
  try {
    await axios.post("http://localhost:5000/api/users/register", {
      name,
      email,
      password,
    });

    dispatch(registerSuccess());
  } catch (error) {
    dispatch(registerFail(error));
  }
};

export default userRegisterAction;
