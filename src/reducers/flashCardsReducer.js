import {
  ADD_FLASHCARD_FAIL,
  ADD_FLASHCARD_REQUEST,
  ADD_FLASHCARD_SUCCESS,
  DELETE_CARD_FAIL,
  DELETE_CARD_REQUEST,
  DELETE_CARD_SUCCESS,
  GET_FLASHCARDS_LIST_FAIL,
  GET_FLASHCARDS_LIST_REQUEST,
  GET_FLASHCARDS_LIST_SUCCESS,
  UPDATE_CARD_FAIL,
  UPDATE_CARD_REQUEST,
  UPDATE_CARD_SUCCESS,
} from "../actions/flashcards-actions";

const initState = {
  loading: false,
  success: false,
  error: null,
};

export const addFlashcardReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_FLASHCARD_REQUEST:
      return { ...state, loading: true };
    case ADD_FLASHCARD_SUCCESS:
      return { ...state, loading: false, success: true };
    case ADD_FLASHCARD_FAIL:
      return { loading: false, success: false, error: action.payload };
    default:
      return state;
  }
};

const listInit = {
  loading: false,
  list: [],
  error: null,
};
export const getCardsListReducer = (state = listInit, action) => {
  switch (action.type) {
    case GET_FLASHCARDS_LIST_REQUEST:
      return { ...state, loading: true };
    case GET_FLASHCARDS_LIST_SUCCESS:
      return { ...state, loading: false, list: action.payload };
    case GET_FLASHCARDS_LIST_FAIL:
      return { loading: false, list: [], error: action.payload };
    default:
      return state;
  }
};

export const deleteCardReducer = (state = initState, action) => {
  switch (action.type) {
    case DELETE_CARD_REQUEST:
      return { ...state, loading: true };
    case DELETE_CARD_SUCCESS:
      return { ...state, loading: false, success: true };
    case DELETE_CARD_FAIL:
      return { loading: false, success: false, error: action.payload };
    default:
      return state;
  }
};
export const updateCardReducer = (state = initState, action) => {
  switch (action.type) {
    case UPDATE_CARD_REQUEST:
      return { ...state, loading: true };
    case UPDATE_CARD_SUCCESS:
      return { ...state, loading: false, success: true };
    case UPDATE_CARD_FAIL:
      return { loading: false, success: false, error: action.payload };
    default:
      return state;
  }
};
