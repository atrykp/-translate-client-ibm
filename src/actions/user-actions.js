export const USER_REGISTER_REQUEST = "USER_REGISTER_REQUEST";
export const USER_REGISTER_SUCCESS = "USER_REGISTER_SUCCESS";
export const USER_REGISTER_FAIL = "USER_REGISTER_FAIL";
export const USER_REGISTER_RESET = "USER_REGISTER_RESET";
export const USER_LOGIN_REQUEST = "USER_LOGIN_REQUEST";
export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";
export const USER_LOGIN_FAIL = "USER_LOGIN_FAIL";
export const USER_LOGOUT = "USER_LOGOUT";
export const EDIT_USER_REQUEST = "EDIT_USER_REQUEST";
export const EDIT_USER_SUCCESS = "EDIT_USER_SUCCESS";
export const EDIT_USER_FAIL = "EDIT_USER_FAIL";
export const REMOVE_USER_REQUEST = "REMOVE_USER_REQUEST";
export const REMOVE_USER_SUCCESS = "REMOVE_USER_SUCCESS";
export const REMOVE_USER_FAIL = "REMOVE_USER_FAIL";

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
export const userLogout = () => ({
  type: USER_LOGOUT,
});

export const editUserRequest = () => ({
  type: EDIT_USER_REQUEST,
});
export const editUserSuccess = () => ({
  type: EDIT_USER_SUCCESS,
});
export const editUserFail = (error) => ({
  type: EDIT_USER_FAIL,
  payload: error.message,
});
export const removeUserRequest = () => ({
  type: REMOVE_USER_REQUEST,
});
export const removeUserSuccess = () => ({
  type: REMOVE_USER_SUCCESS,
});
export const removeUserFail = (error) => ({
  type: REMOVE_USER_FAIL,
  payload: error.message,
});
