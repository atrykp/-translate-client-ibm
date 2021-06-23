import { UPDATE_CURRENT_TRANSLATION } from "../actions/actions";

const currentTranslationReducer = (store = {}, action) => {
  if (action.type === UPDATE_CURRENT_TRANSLATION) {
    const { obj } = action.payload;
    return { ...obj };
  }
  return store;
};

export default currentTranslationReducer;
