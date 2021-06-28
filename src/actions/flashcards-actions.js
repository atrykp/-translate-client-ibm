export const ADD_FLASHCARD_REQUEST = "ADD_FLASHCARD_REQUEST";
export const ADD_FLASHCARD_SUCCESS = "ADD_FLASHCARD_SUCCESS";
export const ADD_FLASHCARD_FAIL = "ADD_FLASHCARD_FAIL";
export const GET_FLASHCARDS_LIST_REQUEST = "GET_FLASHCARDS_LIST_REQUEST";
export const GET_FLASHCARDS_LIST_SUCCESS = "GET_FLASHCARDS_LIST_SUCCESS";
export const GET_FLASHCARDS_LIST_FAIL = "GET_FLASHCARDS_LIST_FAIL";
export const DELETE_CARD_REQUEST = "DELETE_CARD_REQUEST";
export const DELETE_CARD_SUCCESS = "DELETE_CARD_SUCCESS";
export const DELETE_CARD_FAIL = "DELETE_CARD_FAIL";
export const UPDATE_CARD_REQUEST = "UPDATE_CARD_REQUEST";
export const UPDATE_CARD_SUCCESS = "UPDATE_CARD_SUCCESS";
export const UPDATE_CARD_FAIL = "UPDATE_CARD_FAIL";

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
export const deleteCardRequest = () => ({
  type: DELETE_CARD_REQUEST,
});
export const deleteCardSuccess = () => ({
  type: DELETE_CARD_SUCCESS,
});
export const deleteCardFail = (error) => ({
  type: DELETE_CARD_FAIL,
  payload: error,
});
export const updateCardRequest = () => ({
  type: UPDATE_CARD_REQUEST,
});
export const updateCardSuccess = () => ({
  type: UPDATE_CARD_SUCCESS,
});
export const updateCardFail = (error) => ({
  type: UPDATE_CARD_FAIL,
  payload: error,
});
