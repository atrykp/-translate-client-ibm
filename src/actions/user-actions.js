export const USER_REGISTER_REQUEST = "USER_REGISTER_REQUEST";
export const USER_REGISTER_SUCCESS = "USER_REGISTER_SUCCESS";
export const USER_REGISTER_FAIL = "USER_REGISTER_FAIL";
export const USER_REGISTER_RESET = "USER_REGISTER_RESET";
export const USER_LOGIN_REQUEST = "USER_LOGIN_REQUEST";
export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";
export const USER_LOGIN_FAIL = "USER_LOGIN_FAIL";
export const USER_LOGIN_RESET = "USER_LOGIN_RESET";

export const registerRequest = () => ({
  type: USER_REGISTER_REQUEST,
});
export const registerSuccess = () => ({
  type: USER_REGISTER_SUCCESS,
});
export const registerFail = (error) => ({
  type: USER_REGISTER_FAIL,
  payload: error.message,
});
export const registerReset = () => ({
  type: USER_REGISTER_RESET,
});

export const loginRequest = () => ({
  type: USER_LOGIN_REQUEST,
});
export const loginSuccess = (user) => ({
  type: USER_LOGIN_SUCCESS,
  payload: user,
});
export const loginFail = (error) => ({
  type: USER_LOGIN_FAIL,
  payload: error.message,
});
export const loginReset = () => ({
  type: USER_LOGIN_RESET,
});
