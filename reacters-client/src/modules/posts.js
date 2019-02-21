import { handleActions } from 'redux-actions';
import createPromiseThunk from '../lib/createPromiseThunk';
import * as postsAPI from '../lib/api/posts';

const READ_POST = 'posts/READ_POST';
const READ_POST_PENDING = 'posts/READ_POST_PENDING';
const READ_POST_SUCCESS = 'posts/READ_POST_SUCCESS';
const LIST_POSTS = 'posts/LIST_POSTS';
const LIST_POSTS_SUCCESS = 'posts/LIST_POSTS_SUCCESS';
const REMOVE_POST = 'posts/REMOVE_POST';

export const readPost = createPromiseThunk(READ_POST, postsAPI.read);
export const listPosts = createPromiseThunk(LIST_POSTS, postsAPI.listPosts);
export const removePost = createPromiseThunk(REMOVE_POST, postsAPI.remove);

const initialState = {
  post: null,
  list: null
};

export default handleActions(
  {
    [READ_POST_PENDING]: state => ({ ...state, post: null }),
    [READ_POST_SUCCESS]: (state, { payload }) => ({
      ...state,
      post: payload.data
    }),
    [LIST_POSTS_SUCCESS]: (state, { payload }) => ({
      ...state,
      list: payload.data
    })
  },
  initialState
);
