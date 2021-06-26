export const ADD_FLASHCARD_REQUEST = "ADD_FLASHCARD_REQUEST";
export const ADD_FLASHCARD_SUCCESS = "ADD_FLASHCARD_SUCCESS";
export const ADD_FLASHCARD_FAIL = "ADD_FLASHCARD_FAIL";

export const addFlashcardRequest = () => ({
  type: ADD_FLASHCARD_REQUEST,
});
export const addFlashcardSuccess = () => ({
  type: ADD_FLASHCARD_SUCCESS,
});
export const addFlashcardFail = (error) => ({
  type: ADD_FLASHCARD_FAIL,
  payload: error,
});
