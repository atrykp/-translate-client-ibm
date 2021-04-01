import listReducer from "./listReducer";
import currentTranslationReducer from "./currentTranslationReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  listReducer,
  currentTranslationReducer,
});

export default rootReducer;
