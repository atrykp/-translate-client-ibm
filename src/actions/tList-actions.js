export const GET_T_LIST_REQUEST = "GET_T_LIST_REQUEST";
export const GET_T_LIST_SUCCESS = "GET_T_LIST_SUCCESS";
export const GET_T_LIST_FAIL = "GET_T_LIST_FAIL";
export const ADD_WORD_TO_LIST_REQUEST = "ADD_WORD_TO_LIST_REQUEST";
export const ADD_WORD_TO_LIST_SUCCESS = "ADD_WORD_TO_LIST_SUCCESS";
export const ADD_WORD_TO_LIST_FAIL = "ADD_WORD_TO_LIST_FAIL";

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
export const saveWordRequest = () => ({
  type: ADD_WORD_TO_LIST_REQUEST,
});
export const saveWordSuccess = () => ({
  type: ADD_WORD_TO_LIST_SUCCESS,
});
export const saveWordFail = (error) => ({
  type: ADD_WORD_TO_LIST_FAIL,
  payload: {
    error,
  },
});