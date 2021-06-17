export const GET_T_LIST_REQUEST = "GET_T_LIST_REQUEST";
export const GET_T_LIST_SUCCESS = "GET_T_LIST_SUCCESS";
export const GET_T_LIST_FAIL = "GET_T_LIST_FAIL";

export const getListRequest = () => ({
  type: GET_T_LIST_REQUEST,
});
export const getListSuccess = (list) => ({
  type: GET_T_LIST_SUCCESS,
  payload: {
    list,
  },
});
export const getListFail = (error) => ({
  type: GET_T_LIST_FAIL,
  payload: {
    error,
  },
});
