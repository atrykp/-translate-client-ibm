import axios from "axios";
import {
  addFlashcardFail,
  addFlashcardRequest,
  addFlashcardSuccess,
  deleteCardFail,
  deleteCardRequest,
  deleteCardSuccess,
  getCardsListFail,
  getCardsListRequest,
  getCardsListSuccess,
  updateCardFail,
  updateCardRequest,
  updateCardSuccess,
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
      "https://translate-app-serv.herokuapp.com/translator/cards",
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
      "https://translate-app-serv.herokuapp.com/translator/cards",
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

export const deleteCardAction = (token, id) => async (dispatch) => {
  try {
    dispatch(deleteCardRequest());
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    const { data } = await axios.delete(
      `https://translate-app-serv.herokuapp.com/translator/cards/${id}`,
      config
    );
    if (!data) {
      throw new Error("couldn't remove card");
    }

    dispatch(deleteCardSuccess());
    dispatch(getCardsListAction(token));
  } catch (error) {
    dispatch(deleteCardFail(error.message));
  }
};
export const updateCardAction =
  (token, id, updatedCard) => async (dispatch) => {
    try {
      dispatch(updateCardRequest());
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };

      const { data } = await axios.put(
        `https://translate-app-serv.herokuapp.com/translator/cards/${id}`,
        updatedCard,
        config
      );
      if (!data) {
        throw new Error("couldn't update card");
      }

      dispatch(updateCardSuccess());
      dispatch(getCardsListAction(token));
    } catch (error) {
      dispatch(updateCardFail(error.message));
    }
  };
