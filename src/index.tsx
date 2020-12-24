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
import App from './App';
const hist = createBrowserHistory();

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
