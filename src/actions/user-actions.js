export const USER_REGISTER_REQUEST = "USER_REGISTER_REQUEST";
export const USER_REGISTER_SUCCESS = "USER_REGISTER_SUCCESS";
export const USER_REGISTER_FAIL = "USER_REGISTER_FAIL";

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
