import axios from "axios";
import {
  addFlashcardFail,
  addFlashcardRequest,
  addFlashcardSuccess,
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
    console.log(data);

    dispatch(addFlashcardSuccess());
  } catch (error) {
    dispatch(addFlashcardFail(error.message));
  }
};
