import { createReducer } from 'reduxsauce'
import Types from '../constants/types'

export const INITIAL_STATE = { songs: [], error: false, loading: false };

export const fetch = (state = INITIAL_STATE, action) => {
  return  { ...state, songs: [], loading: true }
}

export const success = (state = INITIAL_STATE, action) => {
  return  { ...state, songs: action.payload, loading: false }
}

export const failure = (state = INITIAL_STATE, action) => {
  return { ...state, error: true, loading: false }
}

export const HANDLERS = {
  [Types.FETCH_SONGS]: fetch,
  [Types.FETCH_SONGS_SUCCESS]: success,
  [Types.FETCH_SONGS_FAILURE]: failure,
}

export default createReducer(INITIAL_STATE, HANDLERS)
