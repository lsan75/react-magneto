import * as React from 'react';
import { Link } from 'react-router-dom';

export default class AppHome extends React.Component<{}> {
  render () {
    return (
      <section>
        <Link to="/list">Go to List</Link>
      </section>
    );
  }
}