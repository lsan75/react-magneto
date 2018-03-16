import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AppRemote } from './AppRemote';

it('should render AppRemote', () => {
  const playit = jest.fn();
  const div = document.createElement('div');

  ReactDOM.render(
    <AppRemote playstop={playit} />, div
  );

  const elem = div.querySelector('a');
  expect(elem).toBeDefined();

});