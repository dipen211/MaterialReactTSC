import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import Create from './views/TableList/Employee/Create';
import Edit from './views/TableList/Employee/Edit';
import Login from './views/Login/Login';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
// core components
import Admin from './layouts/Admin';
import RTL from './layouts/RTL';

import 'assets/css/material-dashboard-react.css?v=1.6.0';

const hist = createBrowserHistory();

ReactDOM.render(
  // tslint:disable-next-line: jsx-wrap-multiline
  <Router history={hist}>
    <Switch>
      <Route path="/admin" component={Admin} />
      <Route path="/rtl" component={RTL} />
      <Route path={'/create'} exact component={Create} />
      <Route path={'/edit/:id'} exact component={Edit} />
      <Route path="/login" component={Login} />
      <Redirect from="/" to="/admin/dashboard" />
    </Switch>
  </Router>,
  document.getElementById('root')
);
