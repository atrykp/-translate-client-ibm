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
    case UPDATE_WORD_COUNTER:
      return store.map((element) => {
        if (element.id !== action.payload.id) {
          return element;
        }
        element.counter += 1;
        return element;
      });

    default:
      return store;
  }
};

export default listReducer;
