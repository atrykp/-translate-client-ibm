import {
  ADD_WORD,
  REMOVE_WORD,
  EDIT_WORD,
  UPDATE_WORD_COUNTER,
} from "../actions/actions";

const listReducer = (store = [], action) => {
  switch (action.type) {
    case ADD_WORD:
      return [...store, action.payload.obj];

    default:
      return store;
  }
};

export default listReducer;
