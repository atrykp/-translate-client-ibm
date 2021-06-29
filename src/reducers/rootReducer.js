import flashCardsReducer, {
  addFlashcardReducer,
  getCardsListReducer,
  deleteCardReducer,
  updateCardReducer,
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
  deleteCardReducer,
  updateCardReducer,
});

export default rootReducer;
