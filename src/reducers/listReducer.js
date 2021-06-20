import {
  ADD_WORD,
  REMOVE_WORD,
  UPDATE_WORD_COUNTER,
  REMOVE_UNSAVED_TRANSLATION,
  EDIT_LIST_CONTENT,
} from "../actions/actions";

import {
  ADD_WORD_TO_LIST_FAIL,
  ADD_WORD_TO_LIST_REQUEST,
  ADD_WORD_TO_LIST_SUCCESS,
  GET_T_LIST_FAIL,
  GET_T_LIST_REQUEST,
  GET_T_LIST_SUCCESS,
  UPDATE_WORD_COUNTER_FAIL,
  UPDATE_WORD_COUNTER_REQUEST,
  UPDATE_WORD_COUNTER_SUCCESS,
} from "../actions/tList-actions";

const listReducer = (store = [], action) => {
  switch (action.type) {
    case ADD_WORD:
      return [...store, action.payload.obj];
    case REMOVE_WORD:
      return store.filter((element) => element.id !== action.payload.id);
    case REMOVE_UNSAVED_TRANSLATION:
      return store.filter((element) => element.counter > 0);
    case UPDATE_WORD_COUNTER:
      return store.map((element) => {
        if (element.id !== action.payload.id) {
          return element;
        }
        element.counter = action.payload.number;
        return element;
      });
    case EDIT_LIST_CONTENT:
      return store.map((element) => {
        if (element.id !== action.payload.id) {
          return element;
        }
        const obj = action.payload.obj;
        return { ...element, ...obj };
      });

    default:
      return store;
  }
};

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
export default listReducer;
