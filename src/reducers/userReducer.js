import {
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_RESET,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGIN_RESET,
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

const loginInitialState = {
  loading: false,
  user: {},
  error: null,
};

export const userLoginReducer = (state = loginInitialState, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { ...state, loading: true };
    case USER_LOGIN_SUCCESS:
      return { ...state, loading: false, user: action.payload };
    case USER_LOGIN_FAIL:
      return { ...state, error: action.payload, loading: false };
    case USER_LOGIN_RESET:
      return { ...state, ...loginInitialState };
    default:
      return state;
  }
};
