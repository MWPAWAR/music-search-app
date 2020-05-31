// import { FETCH_SONGS } from '../constants/types';

// const fetchSongsAction = query => ({
//   type: FETCH_SONGS,
//   payload: { query }
// });

// export default fetchSongsAction;

import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
  fetchSongs: ['query']
}, {})

export const AppDataTypes = Types
export default Creators
