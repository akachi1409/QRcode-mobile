import { all } from 'redux-saga/effects';
// import globalsSagas from './globals';
// import notificationsSagas from './notifications';
import userSagas from './user';

export default function* sagas() {
  yield all([
    // ...globalsSagas,
    // ...notificationsSagas,
    ...userSagas,
  ]);
}