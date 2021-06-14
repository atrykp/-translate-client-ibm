import {
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_RESET,
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
      return { ...state, loading: false, success: true };
    case USER_REGISTER_FAIL:
      return { ...state, error: action.payload, loading: false };
    case USER_REGISTER_RESET:
      return { ...state, ...initialState };
    default:
      return state;
  }
};
