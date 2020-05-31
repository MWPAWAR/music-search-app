import { put, takeLatest } from 'redux-saga/effects';
import actionTypes from '../constants/types';
import search from '../apis/search';

function* fetchSongs(action) {
  const { query } = action;
  const json = yield search(query).then(response => response.data.results);
  yield put({ type: actionTypes.FETCH_SONGS_SUCCESS, payload: json });
}

export default function* fetchSongsActionWatcher() {
  yield takeLatest(actionTypes.FETCH_SONGS, fetchSongs)
}
