import * as React from 'react';

const logo = require('../cinema.svg');

interface Props {
  playing: boolean;
}

export function AppReel(props: Props) {

  const play = 'App-logo-started';
  const stop = 'App-logo-stopped';

  const { playing } = props;
  return (
    <img src={logo} className={playing ? play : stop} alt="logo" />
  );
}
