import { ADD_FLASHCARD } from "../actions/actions";

const flashCardsReducer = (store = [], action) => {
  switch (action.type) {
    case ADD_FLASHCARD:
      const { obj, id } = action.payload;
      return [...store, { ...obj, id }];
    default:
      return store;
  }
};
export default flashCardsReducer;
