import listReducer from "./listReducer";
import currentTranslationReducer from "./currentTranslationReducer";
import flashCardsReducer from "./flashCardsReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  listReducer,
  currentTranslationReducer,
  flashCardsReducer,
});

export default rootReducer;
