import * as React from 'react';
import { Component } from 'react';

const logo = require('../cinema.svg');

interface Props {
  playing: boolean;
}
interface State { remoteClass: string; }

export class AppReel extends Component<Props, State> {

  private play = 'App-logo-started';
  private stop = 'App-logo-stopped';

  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <img src={logo} className={this.props.playing ? this.play : this.stop} alt="logo" />
    );
  }
}
