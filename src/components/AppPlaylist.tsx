import * as React from 'react';
import { Playlist } from '../store/playlists/playlist';

interface Props {
  playlists: Playlist[];
}

export function AppPlaylist(props: Props) {

  const { playlists } = props;
  const playlist = playlists.map((item: Playlist) => (
    <li key={item.id}>
      {item.title}
    </li>
  ));
  return (
    <ul>{playlist}</ul>
  );
}
