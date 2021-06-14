import {
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
} from "../actions/user-actions";

const initialState = {
  loading: false,
  success: false,
  error: null,
};

export const userRegisterReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return { ...state, loading: true };
    case USER_REGISTER_SUCCESS:
      return { ...state, loading: false };
    case USER_REGISTER_FAIL:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
