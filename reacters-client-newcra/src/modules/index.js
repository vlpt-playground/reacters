import auth from './auth';
import user from './user';
import write from './write';
import posts from './posts';

import { combineReducers } from 'redux';

export default combineReducers({
  auth,
  user,
  write,
  posts
});
