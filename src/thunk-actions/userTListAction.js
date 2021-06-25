import axios from "axios";
import {
  getListFail,
  getListRequest,
  getListSuccess,
  saveWordFail,
  saveWordRequest,
  saveWordSuccess,
  updateWordCounterFail,
  updateWordCounterRequest,
  updateWordCounterSuccess,
  getWordByIdRequest,
  getWordByIdFail,
  getWordByIdSuccess,
  removeWordRequest,
  removeWordSuccess,
  removeWordFail,
  editWordRequest,
  editWordSuccess,
} from "../actions/tList-actions";

export const userTListAction = (token) => async (dispatch) => {
  try {
    dispatch(getListRequest());
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    const { data } = await axios.get(
      "http://localhost:5000/translator/list",
      config
    );

    if (!data) {
      throw new Error("something went wrong");
    }
    dispatch(getListSuccess(data.userList));
  } catch (error) {
    dispatch(getListFail(error.message));
  }
};
export const saveWordAction = (token, translationObj) => async (dispatch) => {
  try {
    dispatch(saveWordRequest());
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    const { data } = await axios.post(
      "http://localhost:5000/translator/list",
      translationObj,
      config
    );

    if (!data) {
      throw new Error("something went wrong");
    }
    dispatch(saveWordSuccess());
    dispatch(getWordByIdAction(token, data._id));
  } catch (error) {
    dispatch(saveWordFail(error.message));
  }
};
export const updateWordCouterAction = (token, id) => async (dispatch) => {
  try {
    dispatch(updateWordCounterRequest());
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    const { data } = await axios.patch(
      `http://localhost:5000/translator/list`,
      { id },
      config
    );

    if (!data) {
      throw new Error("something went wrong");
    }
    dispatch(updateWordCounterSuccess());
  } catch (error) {
    dispatch(updateWordCounterFail(error.message));
  }
};
export const getWordByIdAction = (token, id) => async (dispatch) => {
  try {
    dispatch(getWordByIdRequest());
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    const { data } = await axios.get(
      `http://localhost:5000/translator/list/${id}`,
      config
    );

    if (!data) {
      throw new Error("something went wrong");
    }
    dispatch(getWordByIdSuccess(data));
  } catch (error) {
    dispatch(getWordByIdFail(error.message));
  }
};
export const removeWordAction = (token, id) => async (dispatch) => {
  try {
    dispatch(removeWordRequest());
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    const { data } = await axios.delete(
      `http://localhost:5000/translator/list/${id}`,
      config
    );

    if (!data) {
      throw new Error("sorry can't remove");
    }
    dispatch(removeWordSuccess());
    dispatch(userTListAction(token));
  } catch (error) {
    dispatch(removeWordFail(error.message));
  }
};
export const editWordAction = (token, id, updatedObj) => async (dispatch) => {
  try {
    dispatch(editWordRequest());
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    const { data } = await axios.put(
      `http://localhost:5000/translator/list/${id}`,
      updatedObj,
      config
    );

    if (!data) {
      throw new Error("sorry can't edit");
    }
    dispatch(editWordSuccess());
    dispatch(userTListAction(token));
  } catch (error) {
    dispatch(removeWordFail(error.message));
  }
};
