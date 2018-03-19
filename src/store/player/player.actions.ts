import { Action } from 'redux';

export enum PLAYER {
  PLAY = 'PLAYER.PLAY'
}

export function playstop(): Action {
  return {
    type: PLAYER.PLAY
  };
}
