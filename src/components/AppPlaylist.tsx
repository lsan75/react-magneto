import * as React from 'react';
import { Playlist } from '../store/playlists/playlist';
import { Link } from 'react-router-dom';

interface Props {
  playlists: Playlist[];
}

export function AppPlaylist(props: Props) {

  const { playlists } = props;
  const playlist = playlists.map((item: Playlist) => {
    const link = `/detail/${item.id}`;
    return (
      <li key={item.id}>
        <Link to={link}>{item.title}</Link>
      </li>
    );
  });
  return (
    <ul>{playlist}</ul>
  );
}
