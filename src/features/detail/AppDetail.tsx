import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { Store } from '../../store/root';
import { Playlist } from '../../store/playlists/playlist';
import { Link } from 'react-router-dom';

interface RouteProp {
  id: number;
}
interface Props extends RouteComponentProps<RouteProp> {
  playlists: Playlist[];
}
export class AppDetail extends React.Component<Props> {

  private noData = <div><Link to="/list">No Data - Back to list</Link></div>;

  constructor(props: Props) {
    super(props);
  }

  render() {
    const {id} = this.props.match.params;
    const playlist = this.props.playlists.filter(item => item.id === Number(id));
    if (!playlist.length) {
      return this.noData;
    }
    return (
      <div>{playlist[0].title}</div>
    );
  }

}

const mapStateToProps = (state: Store) => {
  return {
    playlists: state.playlist.playlists
  };
};

export default connect(
  mapStateToProps
)(AppDetail);