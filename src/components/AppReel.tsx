import * as React from 'react';

const logo = require('../cinema.svg');

interface Props {
  playing: boolean;
}

export class AppReel extends React.Component<Props>  {

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
