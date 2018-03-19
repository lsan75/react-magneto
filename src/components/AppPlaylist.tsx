import * as React from 'react';
import { Playlist } from '../store/playlists/playlist';

interface Props {
  playlists: Playlist[];
}

export class AppPlaylist extends React.Component<Props>  {

  constructor(props: Props) {
    super(props);
  }

  render() {
    const { playlists } = this.props;
    const playlist = playlists.map((item: Playlist) => (
      <li key={item.id}>
        {item.title}
      </li>
    ));
    return (
      <ul>{playlist}</ul>
    );
  }
}
