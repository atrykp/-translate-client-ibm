export const ADD_WORD = "ADD_WORD";
export const REMOVE_WORD = "REMOVE_WORD";
export const EDIT_WORD = "EDIT_WORD";
export const UPDATE_WORD_COUNTER = "EDIT_WORD";

export const addWord = (obj) => ({
  type: ADD_WORD,
  payload: {
    obj,
    id: 1,
  },
});

export const removeWord = (id) => ({
  type: REMOVE_WORD,
  payload: {
    id,
  },
});

export const editWord = (obj, id) => ({
  type: EDIT_WORD,
  payload: {
    obj,
    id,
  },
});

export const updateWordCounter = (id) => ({
  type: UPDATE_WORD_COUNTER,
  payload: {
    id,
  },
});
