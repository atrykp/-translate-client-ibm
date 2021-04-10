import {
  ADD_FLASHCARD,
  REMOVE_FLASHCARD,
  UPDATE_FLASHCARD_CONTENT,
  UPDATE_FLASHCARD_STATUS,
} from "../actions/actions";

const flashCardsReducer = (store = [], action) => {
  switch (action.type) {
    case ADD_FLASHCARD:
      const { obj, id } = action.payload;
      return [...store, { ...obj, id }];
    case REMOVE_FLASHCARD:
      return store.filter((element) => element.id !== action.payload.id);
    case UPDATE_FLASHCARD_STATUS:
      return store.map((element) => {
        if (element.id !== action.payload.id) {
          return element;
        }
        element.iCan = !element.iCan;
        return element;
      });
    case UPDATE_FLASHCARD_CONTENT:
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
export default flashCardsReducer;
