export const ADD_FLASHCARD_REQUEST = "ADD_FLASHCARD_REQUEST";
export const ADD_FLASHCARD_SUCCESS = "ADD_FLASHCARD_SUCCESS";
export const ADD_FLASHCARD_FAIL = "ADD_FLASHCARD_FAIL";
export const GET_FLASHCARDS_LIST_REQUEST = "GET_FLASHCARDS_LIST_REQUEST";
export const GET_FLASHCARDS_LIST_SUCCESS = "GET_FLASHCARDS_LIST_SUCCESS";
export const GET_FLASHCARDS_LIST_FAIL = "GET_FLASHCARDS_LIST_FAIL";

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
export const getCardsListRequest = () => ({
  type: GET_FLASHCARDS_LIST_REQUEST,
});
export const getCardsListSuccess = (list) => ({
  type: GET_FLASHCARDS_LIST_SUCCESS,
  payload: list,
});
export const getCardsListFail = (error) => ({
  type: GET_FLASHCARDS_LIST_FAIL,
  payload: error,
});
