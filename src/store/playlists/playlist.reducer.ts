import { PlaylistState, defaultPlaylistState } from './playlist';
import { PLAYLIST, PlaylistAction } from './playlist.actions';

export function playlist(state: PlaylistState = defaultPlaylistState, action: PlaylistAction) {

  switch (action.type) {

    case PLAYLIST.PLAYLIST_FETCH_SUCCESS:
      return Object.assign({}, state, { playlists: action.payload });

    default:
      return state;
  }

}
