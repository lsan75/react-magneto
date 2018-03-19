import * as React from 'react';
import './AppList.css';
import { AppReel } from '../../components/AppReel';
import { AppRemote } from '../../components/AppRemote';
import { AppPlaylist } from '../../components/AppPlaylist';
import { connect } from 'react-redux';
import { Store } from '../../store/root';
import { playstop } from '../../store/player/player.actions';
import { Action } from 'redux';
import { Link } from 'react-router-dom';

import { getPlaylists, PlaylistAction } from '../../store/playlists/playlist.actions';
import { Playlist } from '../../store/playlists/playlist';

interface Props {
  play: boolean;
  playlists: Playlist[];
  playit(): Action;
  getPlaylists(): PlaylistAction;
}

export class AppList extends React.Component<Props> {

  constructor(props: Props) {
    super(props);
  }

  componentDidMount() {
    this.props.getPlaylists();
  }

  render() {
    const { play, playlists, playit } = this.props;
    return (
      <div className="App">

        <header className="App-header">
          <AppReel playing={play} />
          <h1 className="App-title">MAGNETO</h1>
          <Link to="/">> Home</Link>
        </header>

        <AppRemote playstop={playit} />

        <AppPlaylist playlists={playlists} />
      </div>

    );
  }
}

export default connect(
  (state: Store) => {
    return {
      play: state.player.playing,
      playlists: state.playlist.playlists
    };
  },
  (dispatch) => {
    return {
      playit: () => dispatch(playstop()),
      getPlaylists: () => dispatch(getPlaylists())
    };
  }
)(AppList);
