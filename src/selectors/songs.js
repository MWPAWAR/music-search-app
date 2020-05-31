import { createSelector } from 'reselect';

const getRawSongs = ({ songs = [] }) => songs;

/**
 * Returns a normalized list of songs.
 */
const getSongs = createSelector(
  getRawSongs,
  songs => songs
    .filter(song => song.kind === 'song')
    .map(song => ({
      previewUrl: song.previewUrl,
      title: song.trackName,
      trackId: song.trackId,
      imgUrl: song.artworkUrl100,
      releaseDate: song.releaseDate
    }))
);

export default getSongs;
