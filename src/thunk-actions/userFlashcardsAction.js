import axios from "axios";
import {
  addFlashcardFail,
  addFlashcardRequest,
  addFlashcardSuccess,
  getCardsListFail,
  getCardsListRequest,
  getCardsListSuccess,
} from "../actions/flashcards-actions";

export const addFlashCardAction = (token, flashcardObj) => async (dispatch) => {
  try {
    dispatch(addFlashcardRequest());
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    const { data } = await axios.post(
      "http://localhost:5000/translator/cards",
      flashcardObj,
      config
    );
    if (!data) {
      throw new Error("couldn't add new flashcard");
    }

    dispatch(addFlashcardSuccess());
  } catch (error) {
    dispatch(addFlashcardFail(error.message));
  }
};
export const getCardsListAction = (token) => async (dispatch) => {
  try {
    dispatch(getCardsListRequest());
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    const { data } = await axios.get(
      "http://localhost:5000/translator/cards",
      config
    );
    if (!data) {
      throw new Error("couldn't add new flashcard");
    }
    dispatch(getCardsListSuccess(data));
  } catch (error) {
    dispatch(getCardsListFail(error.message));
  }
};
