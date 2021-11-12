import { combineReducers } from 'redux';
// import globals from './globals';
// import notifications from './notifications';
import user from './user';

const applicationReducers = {
  // globals,
  // notifications,
  user,
};

export default function createReducer() {
  return combineReducers(applicationReducers);
}