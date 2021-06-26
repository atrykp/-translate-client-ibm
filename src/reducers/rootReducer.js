import listReducer from "./listReducer";
import currentTranslationReducer from "./currentTranslationReducer";
import flashCardsReducer, {
  addFlashcardReducer,
  getCardsListReducer,
} from "./flashCardsReducer";
import modalsReducer from "./modalsReducer";
import { userRegisterReducer, userLoginReducer } from "./userReducer";
import {
  tListReducer,
  getWordByIdReducer,
  updateWordCounterReducer,
  editWordReducer,
  removeWordReducer,
} from "./listReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  listReducer,
  currentTranslationReducer,
  flashCardsReducer,
  modalsReducer,
  userRegisterReducer,
  userLoginReducer,
  tListReducer,
  getWordByIdReducer,
  updateWordCounterReducer,
  editWordReducer,
  removeWordReducer,
  addFlashcardReducer,
  getCardsListReducer,
});

export default rootReducer;
