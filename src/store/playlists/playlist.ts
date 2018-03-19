export interface Track {
  id: number;
  band: string;
  title: string;
  picture: string;
  url: string;
}

export interface Playlist {
  id: number;
  title: string;
  tracks: Track[];
}

export interface PlaylistState {
  playlists: Playlist[];
}

export const defaultPlaylistState = {
  playlists: []
};
