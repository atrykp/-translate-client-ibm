import {
  ADD_WORD,
  REMOVE_WORD,
  UPDATE_WORD_COUNTER,
  REMOVE_UNSAVED_TRANSLATION,
  EDIT_LIST_CONTENT,
} from "../actions/actions";

import {
  GET_T_LIST_FAIL,
  GET_T_LIST_REQUEST,
  GET_T_LIST_SUCCESS,
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
export default listReducer;
