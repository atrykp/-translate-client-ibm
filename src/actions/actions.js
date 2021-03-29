const ADD_WORD = "ADD_WORD";
const DELETE_WORD = "DELETE_WORD";
const EDIT_WORD = "EDIT_WORD";
const UPDATE_WORD_COUNTER = "EDIT_WORD";

export const addWord = (obj) => ({
  type: ADD_WORD,
  payload: {
    obj,
    id: 1,
  },
});

export const deleteWord = (id) => ({
  type: DELETE_WORD,
  payload: {
    id: 1,
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
