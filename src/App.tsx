import React, { useContext } from 'react';
import { observer } from "mobx-react"
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Login from './views/Login/Login';
import GuestRoute from './utils/GuestRoute';
import { createBrowserHistory } from 'history';
import Admin from './layouts/Admin';
//redux stuff
import { LoginStoreContext } from "./Stores/loginStore";
import Dashboard from './views/Dashboard/Dashboard';
const hist = createBrowserHistory();
const App = observer(() => {
    const loginStore = useContext(LoginStoreContext);
    return (
        <>
            <Router>
                <Switch>
                    {/* <Route path="/admin" component={Admin} />
                    <GuestRoute exact path='/login' component={Login} />
                    <Redirect from="/" to="/admin/dashboard" /> */}
                    {loginStore.login ?
                        <>
                            {console.log(loginStore.login)}
                            <Route path="/admin" component={Admin} />
                            <Redirect from="/" to="/admin/dashboard" />
                        </>
                        : <GuestRoute exact path='/login' component={Login} />
                    }
                </Switch>
            </Router>
        </>
    )
})
export default App;