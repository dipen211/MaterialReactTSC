import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import Login from './views/Login/Login';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
// core components
import Admin from './layouts/Admin';
import RTL from './layouts/RTL';

import GuestRoute from './utils/GuestRoute';
//redux stuff
import { Provider } from 'react-redux';
import store from './redux/stores';
import { CheckAuthentication } from './utils/CheckAuthentication';

import 'assets/css/material-dashboard-react.css?v=1.6.0';

const hist = createBrowserHistory();

ReactDOM.render(
  <Provider store={store}>
    <Router history={hist}>
      <Switch>
        <Route path="/admin" component={Admin} />
        <Route path="/rtl" component={RTL} />
        <GuestRoute exact path='/login' component={Login} />
        <Redirect from="/" to="/admin/dashboard" />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);
