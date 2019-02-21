import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import createPromiseThunk from '../lib/createPromiseThunk';
import * as authAPI from '../lib/api/auth';

const CHANGE_FIELD = 'auth/CHANGE_FIELD';
const INITIALIZE_FORM = 'auth/INITIALIZE_FORM';
const REGISTER = 'auth/REGISTER';
const REGISTER_SUCCESS = 'auth/REGISTER_SUCCESS';
const SET_ERROR = 'auth/SET_ERROR';
const LOGIN = 'auth/LOGIN';
const LOGIN_SUCCESS = 'auth/LOGIN_SUCCESS';

export const changeField = createAction(
  CHANGE_FIELD,
  ({ mode, key, value }) => ({ mode, key, value })
);
export const initializeForm = createAction(INITIALIZE_FORM, key => key);
export const register = createPromiseThunk(REGISTER, authAPI.register);
export const login = createPromiseThunk(LOGIN, authAPI.login);
export const setError = createAction(SET_ERROR, msg => msg);

const initialState = {
  register: {
    username: '',
    password: '',
    passwordConfirm: ''
  },
  login: {
    username: '',
    password: ''
  },
  error: null,
  authorization: null
};

const reducer = handleActions(
  {
    [CHANGE_FIELD]: (state, { payload }) => {
      const { mode, key, value } = payload;
      return produce(state, draft => {
        draft[mode][key] = value;
      });
    },
    [INITIALIZE_FORM]: (state, { payload }) => {
      return produce(state, draft => {
        draft[payload] = initialState[payload];
        draft.error = null;
      });
    },
    [SET_ERROR]: (state, { payload }) => ({
      ...state,
      error: payload
    }),
    [REGISTER_SUCCESS]: (state, { payload }) => ({
      ...state,
      authorization: payload.data
    }),
    [LOGIN_SUCCESS]: (state, { payload }) => ({
      ...state,
      authorization: payload.data
    })
  },
  initialState
);

export default reducer;
