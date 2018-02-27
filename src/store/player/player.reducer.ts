import { Action } from 'redux';
import { PlayerState, defaultPlayerState } from './player';
import { PLAYER } from './player.actions';

export function player(state: PlayerState = defaultPlayerState, action: Action) {

  switch (action.type) {

    case PLAYER.PLAY:
      return Object.assign({}, state, { playing: !state.playing });

    default:
      return state;
  }

}
