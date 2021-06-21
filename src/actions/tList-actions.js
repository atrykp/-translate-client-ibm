export const GET_T_LIST_REQUEST = "GET_T_LIST_REQUEST";
export const GET_T_LIST_SUCCESS = "GET_T_LIST_SUCCESS";
export const GET_T_LIST_FAIL = "GET_T_LIST_FAIL";
export const ADD_WORD_TO_LIST_REQUEST = "ADD_WORD_TO_LIST_REQUEST";
export const ADD_WORD_TO_LIST_SUCCESS = "ADD_WORD_TO_LIST_SUCCESS";
export const ADD_WORD_TO_LIST_FAIL = "ADD_WORD_TO_LIST_FAIL";
export const UPDATE_WORD_COUNTER_REQUEST = "UPDATE_WORD_COUNTER_REQUEST";
export const UPDATE_WORD_COUNTER_SUCCESS = " UPDATE_WORD_COUNTER_SUCCESS";
export const UPDATE_WORD_COUNTER_FAIL = "UPDATE_WORD_COUNTER_FAIL";
export const GET_WORD_BY_ID_REQUEST = "GET_WORD_BY_ID_REQUEST";
export const GET_WORD_BY_ID_SUCCESS = " GET_WORD_BY_ID_SUCCESS";
export const GET_WORD_BY_ID_FAIL = "GET_WORD_BY_ID_FAIL";

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
export const updateWordCounterRequest = () => ({
  type: UPDATE_WORD_COUNTER_REQUEST,
});
export const updateWordCounterSuccess = () => ({
  type: UPDATE_WORD_COUNTER_SUCCESS,
});
export const updateWordCounterFail = (error) => ({
  type: UPDATE_WORD_COUNTER_FAIL,
  payload: {
    error,
  },
});
export const getWordByIdRequest = () => ({
  type: GET_WORD_BY_ID_REQUEST,
});
export const getWordByIdSuccess = (sentence) => ({
  type: GET_WORD_BY_ID_SUCCESS,
  payload: {
    sentence,
  },
});
export const getWordByIdFail = (error) => ({
  type: GET_WORD_BY_ID_FAIL,
  payload: {
    error,
  },
});
