import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Login from './views/Login/Login';
import GuestRoute from './utils/GuestRoute';
import Admin from './layouts/Admin';
import RTL from './layouts/RTL';
import { createBrowserHistory } from 'history';
//redux stuff
import { Provider } from 'react-redux';
import store from './redux/stores';
import { CheckAuthentication } from './utils/CheckAuthentication';
const hist = createBrowserHistory();
const App: React.FC = () => {
    useEffect(() => {
        CheckAuthentication();
    }, []);
    return (
        <>
            <Provider store={store}>
                <Router>
                    <Switch>
                        <Route path="/admin" component={Admin} />
                        <Route path="/rtl" component={RTL} />
                        <GuestRoute exact path='/login' component={Login} />
                        <Redirect from="/" to="/admin/dashboard" />
                    </Switch>
                </Router>
            </Provider>
        </>
    )
}
export default App;