import { createAction, handleActions } from 'redux-actions';
import * as authAPI from '../lib/api/auth';
import createPromiseThunk from '../lib/createPromiseThunk';

const CHECK = 'user/CHECK';
const CHECK_SUCCESS = 'user/CHECK_SUCCESS';
const CHECK_ERROR = 'user/CHECK_ERROR';
const TEMP_SET_USER = 'user/TEMP_SET_USER';

export const check = createPromiseThunk(CHECK, authAPI.check);
export const tempSetUser = createAction(TEMP_SET_USER, user => user);

const initialState = {
  user: null
};

export default handleActions(
  {
    [CHECK_SUCCESS]: (state, { payload }) => ({
      ...state,
      user: payload.data
    }),
    [CHECK_ERROR]: state => ({
      ...state,
      user: null
    }),
    [TEMP_SET_USER]: (state, { payload }) => ({
      ...state,
      user: payload
    })
  },
  initialState
);
