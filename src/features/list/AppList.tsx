import * as React from 'react';
import './AppList.css';
import { AppReel } from '../../components/AppReel';
import { AppRemote } from '../../components/AppRemote';
import { connect } from 'react-redux';
import { Store } from '../../store/root';
import { playstop } from '../../store/player/player.actions';
import { Action, bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

interface Props {
  play: boolean;
  playit(): Action;
}

export class AppList extends React.Component<Props> {

  constructor(props: Props) {
    super(props);
  }

  render() {
    const { play, playit } = this.props;
    return (
      <div className="App">

        <header className="App-header">
          <AppReel playing={play} />
          <h1 className="App-title">MAGNETO</h1>
          <Link to="/">> Home</Link>
        </header>

        <AppRemote playstop={playit} />

      </div>
    );
  }

}

export default connect(
  (state: Store, ownProps) => {
    return {
      play: state.player.playing
    };
  },
  (dispatch) => {
    return {
      playit: bindActionCreators(playstop, dispatch)
    };
  }
)(AppList);
