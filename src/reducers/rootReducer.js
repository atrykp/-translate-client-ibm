import listReducer from "./listReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  listReducer,
});

export default rootReducer;
