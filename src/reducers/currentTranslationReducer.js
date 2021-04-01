import { UPDATE_CURRENT_TRANSLATION } from "../actions/actions";

const currentTranslationReducer = (store = {}, action) => {
  if (action.type === UPDATE_CURRENT_TRANSLATION) {
    return action.payload.obj;
  }
  return store;
};

export default currentTranslationReducer;
