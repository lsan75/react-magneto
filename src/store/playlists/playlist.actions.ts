import { Action, Dispatch } from 'redux';
import axios, { AxiosResponse } from 'axios';
import { Playlist } from './playlist';

axios.defaults.baseURL = 'http://localhost:3000';

export enum PLAYLIST {
  PLAYLIST_FETCH_SUCCESS = 'PLAYLIST_FETCH_SUCCESS'
}

export interface PlaylistAction extends Action {
  payload: Playlist[];
}

export function getPlaylists() {
  return (dispatch: Dispatch<PlaylistAction>): void => {
    axios.get('/playlists').then((value: AxiosResponse<Playlist[]>) => {
      dispatch(loadPlaylists(value.data));
    }).catch(reason => {
      window.console.log(reason);
    });
  };
}

export function loadPlaylists(playlists: Playlist[]): PlaylistAction {
  return {
    type: PLAYLIST.PLAYLIST_FETCH_SUCCESS,
    payload: playlists
  };
}