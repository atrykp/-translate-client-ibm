import listReducer from "./listReducer";
import currentTranslationReducer from "./currentTranslationReducer";
import flashCardsReducer from "./flashCardsReducer";
import modalsReducer from "./modalsReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  listReducer,
  currentTranslationReducer,
  flashCardsReducer,
  modalsReducer,
});

export default rootReducer;
