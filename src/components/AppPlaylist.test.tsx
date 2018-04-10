import * as React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import { AppPlaylist } from './AppPlaylist';
import { Playlist } from '../store/playlists/playlist';

describe('Playlist', () => {
  it('should render correctly', () => {

    const playlists: Playlist[] = [{
      id: 1,
      title: 'pan',
      tracks: []
    }];

    const output = shallow(
      <AppPlaylist playlists={playlists} />
    );

    expect(shallowToJson(output)).toMatchSnapshot();
  });
});
