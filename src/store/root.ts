import { PlayerState, defaultPlayerState } from './player/player';

export interface Store {
  player: PlayerState;
}

export const defaulStore: Store = {
  player: defaultPlayerState
};
