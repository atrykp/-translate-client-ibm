import { createStore } from "redux";
import rootReducer from "../reducers/rootReducer";
import { loadState, saveState } from "./localStorage";

const persistedState = loadState();

const store = createStore(rootReducer, persistedState);
store.subscribe(() => {
  saveState({
    listReducer: store.getState().listReducer,
  });
});

export default store;
