import axios from "axios";
import {
  registerFail,
  registerRequest,
  registerSuccess,
} from "../actions/user-actions";

const userRegisterAction = (user) => async (dispatch) => {
  console.log("jestem w dispatchu");

  dispatch(registerRequest());
  const { name, email, password } = user;
  try {
    const { data: responseData } = await axios.post(
      "http://localhost:5000/api/users/register",
      {
        name,
        email,
        password,
      }
    );
    console.log(responseData);

    dispatch(registerSuccess());
  } catch (error) {
    dispatch(registerFail(error));
  }
};

export default userRegisterAction;
