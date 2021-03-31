import {
  ADD_WORD,
  REMOVE_WORD,
  EDIT_WORD,
  UPDATE_WORD_COUNTER,
  REMOVE_UNSAVED_TRANSLATION,
} from "../actions/actions";

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

    default:
      return store;
  }
};

export default listReducer;
