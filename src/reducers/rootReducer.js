import listReducer from "./listReducer";
import currentTranslationReducer from "./currentTranslationReducer";
import flashCardsReducer from "./flashCardsReducer";
import modalsReducer from "./modalsReducer";
import { userRegisterReducer, userLoginReducer } from "./userReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  listReducer,
  currentTranslationReducer,
  flashCardsReducer,
  modalsReducer,
  userRegisterReducer,
  userLoginReducer,
});

export default rootReducer;
