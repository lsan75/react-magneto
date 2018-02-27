import { combineReducers } from 'redux';
import { player } from './player/player.reducer';

export const rootReducer = combineReducers({
  player
});
