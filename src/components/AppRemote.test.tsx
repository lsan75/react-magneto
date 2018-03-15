import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AppRemote } from './AppRemote';

it('should render AppRemote', () => {
  const playstop = jest.fn();
  const div = document.createElement('div');

  ReactDOM.render(
    <AppRemote playstop={playstop} />, div
  );

  const elem = div.querySelector('a');
  expect(elem).toBeDefined();

});