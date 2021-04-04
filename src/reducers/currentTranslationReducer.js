import { UPDATE_CURRENT_TRANSLATION } from "../actions/actions";

const currentTranslationReducer = (store = {}, action) => {
  if (action.type === UPDATE_CURRENT_TRANSLATION) {
    const { obj, id } = action.payload;
    return { ...obj, id };
  }
  return store;
};

export default currentTranslationReducer;
