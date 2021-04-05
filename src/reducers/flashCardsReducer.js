import { ADD_FLASHCARD, REMOVE_FLASHCARD } from "../actions/actions";

const flashCardsReducer = (store = [], action) => {
  switch (action.type) {
    case ADD_FLASHCARD:
      const { obj, id } = action.payload;
      return [...store, { ...obj, id }];
    case REMOVE_FLASHCARD:
      return store.filter((element) => element.id !== action.payload.id);
    default:
      return store;
  }
};
export default flashCardsReducer;
