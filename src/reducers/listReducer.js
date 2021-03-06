import {
  ADD_WORD_TO_LIST_FAIL,
  ADD_WORD_TO_LIST_REQUEST,
  ADD_WORD_TO_LIST_SUCCESS,
  GET_T_LIST_FAIL,
  GET_T_LIST_REQUEST,
  GET_T_LIST_SUCCESS,
  GET_WORD_BY_ID_FAIL,
  GET_WORD_BY_ID_REQUEST,
  GET_WORD_BY_ID_SUCCESS,
  GET_WORD_BY_ID_RESET,
  UPDATE_WORD_COUNTER_FAIL,
  UPDATE_WORD_COUNTER_REQUEST,
  UPDATE_WORD_COUNTER_SUCCESS,
  REMOVE_WORD_REQUEST,
  REMOVE_WORD_SUCCESS,
  REMOVE_WORD_FAIL,
  EDIT_WORD_REQUEST,
  EDIT_WORD_SUCCESS,
  EDIT_WORD_FAIL,
  GET_T_LIST_RESET,
} from "../actions/tList-actions";

const initialState = {
  loading: false,
  error: "",
  userTList: [],
};

export const tListReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_T_LIST_REQUEST:
      return { ...state, loading: true };
    case GET_T_LIST_SUCCESS:
      return { ...state, loading: false, userTList: [...action.payload.list] };
    case GET_T_LIST_FAIL:
      return { ...state, loading: false, error: action.payload.error };
    case GET_T_LIST_RESET:
      return { ...state, ...initialState };
    default:
      return state;
  }
};
const successInit = {
  loading: false,
  error: "",
  success: false,
};
export const addWordReducer = (state = successInit, action) => {
  switch (action.type) {
    case ADD_WORD_TO_LIST_REQUEST:
      return { ...state, loading: true };
    case ADD_WORD_TO_LIST_SUCCESS:
      return { ...state, loading: false, success: true };
    case ADD_WORD_TO_LIST_FAIL:
      return { ...state, loading: false, error: action.payload.error };
    default:
      return state;
  }
};
export const updateWordCounterReducer = (state = successInit, action) => {
  switch (action.type) {
    case UPDATE_WORD_COUNTER_REQUEST:
      return { ...state, loading: true };
    case UPDATE_WORD_COUNTER_SUCCESS:
      return { ...state, loading: false, success: true };
    case UPDATE_WORD_COUNTER_FAIL:
      return { ...state, loading: false, error: action.payload.error };
    default:
      return state;
  }
};

const getWordInital = {
  loading: false,
  sentence: {},
  error: null,
};
export const getWordByIdReducer = (state = getWordInital, action) => {
  switch (action.type) {
    case GET_WORD_BY_ID_REQUEST:
      return { ...state, loading: true };
    case GET_WORD_BY_ID_SUCCESS:
      return { ...state, loading: false, sentence: action.payload.sentence };
    case GET_WORD_BY_ID_FAIL:
      return { ...state, loading: false, error: action.payload.error };
    case GET_WORD_BY_ID_RESET:
      return { ...state, ...getWordInital };
    default:
      return state;
  }
};
export const removeWordReducer = (state = successInit, action) => {
  switch (action.type) {
    case REMOVE_WORD_REQUEST:
      return { ...state, loading: true };
    case REMOVE_WORD_SUCCESS:
      return { ...state, loading: false, success: true };
    case REMOVE_WORD_FAIL:
      return {
        ...state,
        loading: false,
        success: true,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export const editWordReducer = (state = successInit, action) => {
  switch (action.type) {
    case EDIT_WORD_REQUEST:
      return { ...state, loading: true };
    case EDIT_WORD_SUCCESS:
      return { ...state, loading: false, success: true };
    case EDIT_WORD_FAIL:
      return { ...state, loading: false, error: action.payload.error };
    default:
      return state;
  }
};
