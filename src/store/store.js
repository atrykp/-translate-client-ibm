import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import rootReducer from "../reducers/rootReducer";
import { loadState, saveState } from "./localStorage";

const persistedState = loadState();

const middlewares = [thunk, logger];

const store = createStore(
  rootReducer,
  persistedState,
  applyMiddleware(...middlewares)
);
store.subscribe(() => {
  saveState({
    listReducer: store.getState().listReducer,
    flashCardsReducer: store.getState().flashCardsReducer,
  });
});

export default store;
