export const ADD_WORD = "ADD_WORD";
export const REMOVE_WORD = "REMOVE_WORD";
export const EDIT_WORD = "EDIT_WORD";
export const UPDATE_WORD_COUNTER = "EDIT_WORD";
export const REMOVE_UNSAVED_TRANSLATION = "REMOVE_UNSAVED_TRANSLATION";

export const UPDATE_CURRENT_TRANSLATION = "UPDATE_CURRENT_TRANSLATION";
export const EDIT_LIST_CONTENT = "EDIT_LIST_CONTENT";

export const ADD_FLASHCARD = "ADD_FLASHCARD";
export const REMOVE_FLASHCARD = "REMOVE_FLASHCARD";
export const UPDATE_FLASHCARD_STATUS = "UPDATE_FLASHCARD_STATUS";
export const UPDATE_FLASHCARD_CONTENT = "UPDATE_FLASHCARD_CONTENT";
export const UPDATE_MODAL_STATUS = "UPDATE_MODAL_STATUS";

const makeId = () => {
  let ID = "";
  let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  for (var i = 0; i < 12; i++) {
    ID += characters.charAt(Math.floor(Math.random() * 36));
  }
  return ID;
};

export const addWord = (obj) => ({
  type: ADD_WORD,
  payload: {
    obj,
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

export const updateWordCounter = (id, number) => ({
  type: UPDATE_WORD_COUNTER,
  payload: {
    id,
    number,
  },
});

export const removeUnseved = () => ({
  type: REMOVE_UNSAVED_TRANSLATION,
});

export const updateCurrentTranslation = (obj) => ({
  type: UPDATE_CURRENT_TRANSLATION,
  payload: {
    obj,
  },
});
export const editListElementContent = (id, obj) => ({
  type: EDIT_LIST_CONTENT,
  payload: {
    id,
    obj,
  },
});
export const addFlashCard = (obj) => ({
  type: ADD_FLASHCARD,
  payload: {
    obj,
    id: makeId(),
  },
});

export const removeFlashCard = (id) => ({
  type: REMOVE_FLASHCARD,
  payload: {
    id,
  },
});

export const updateFlashCardStatus = (id) => ({
  type: UPDATE_FLASHCARD_STATUS,
  payload: {
    id,
  },
});

export const updateFlashCardContent = (id, obj) => ({
  type: UPDATE_FLASHCARD_CONTENT,
  payload: {
    id,
    obj,
  },
});

export const updateModalStatus = (id, obj) => ({
  type: UPDATE_MODAL_STATUS,
  payload: {
    id,
    obj,
  },
});
