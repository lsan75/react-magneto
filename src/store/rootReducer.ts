import { combineReducers } from 'redux';
import { player } from './player/player.reducer';
import { playlist } from './playlists/playlist.reducer';

export const rootReducer = combineReducers({
  player,
  playlist
});
