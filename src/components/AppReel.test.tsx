import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AppReel } from './AppReel';

it('should have a started classname', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <AppReel playing={true} />, div
  );

  const elem = div.querySelector('.App-logo-started');
  expect(elem).toBeDefined();
});

it('should have a stopped classname', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <AppReel playing={false} />, div
  );

  const elem = div.querySelector('.App-logo-stopped');
  expect(elem).toBeDefined();
});
