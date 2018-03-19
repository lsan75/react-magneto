import { PlayerState, defaultPlayerState } from './player/player';
import { PlaylistState, defaultPlaylistState } from './playlists/playlist';

export interface Store {
  player: PlayerState;
  playlist: PlaylistState;
}

export const defaulStore: Store = {
  player: defaultPlayerState,
  playlist: defaultPlaylistState
};
