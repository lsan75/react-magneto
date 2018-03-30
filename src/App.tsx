import * as React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/configureStore';

import AppHome from './features/home/AppHome';
import AppList from './features/list/AppList';
import AppDetail from './features/detail/AppDetail';

export default class App extends React.Component<{}> {

  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact={true} path="/home" component={AppHome} />
            <Route path="/list" component={AppList} />
            <Route path="/detail/:id" component={AppDetail} />
            <Redirect from="/" to="/home" />
          </Switch>
        </Router>
      </Provider>
    );
  }

}
