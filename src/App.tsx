import * as React from 'react';
import './App.css';
import { AppReel } from './components/AppReel';
import { AppRemote } from './components/AppRemote';

interface Props {}
interface State { playing: boolean; }
class App extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = { playing: false };
  }

  render() {
    return (
      <div className="App">

        <header className="App-header">
          <AppReel playing={this.state.playing} />
          <h1 className="App-title">MAGNETO</h1>
        </header>

        <AppRemote playstop={this.playstop} />

      </div>
    );
  }

  private playstop = () => {
    this.setState({ playing: !this.state.playing });
  }
}

export default App;
