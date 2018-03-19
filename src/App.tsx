import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/configureStore';

import AppHome from './features/home/AppHome';
import AppList from './features/list/AppList';

export default class App extends React.Component<{}> {

  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Route exact={true} path="/" component={AppHome} />
            <Route path="/list" component={AppList} />
          </div>
        </Router>
      </Provider>
    );
  }

}
