import { all } from 'redux-saga/effects';

import fetchSongsActionWatcher from './search';

export default function* rootSaga() {
  yield all([
    fetchSongsActionWatcher(),
  ]);
};
