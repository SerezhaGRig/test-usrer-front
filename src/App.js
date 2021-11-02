import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Registration from './components/Registration'
import Login from './components/Login'
import Home from './components/Home'

export default function App() {
    return (
        <Router>
            <div>
                <div className='container'>
                    <div className='row'>
                        <div className='col'>
                            <Link to="/">Home</Link>
                        </div >
                        <div className='col'>
                            <Link to="/registration">Registration</Link>
                        </div>
                        <div className='col'>
                            <Link to="/login">Login</Link>
                        </div>
                    </div>
                </div>

                <Switch>
                    <Route path="/registration">
                        <Registration />
                    </Route>
                    <Login path="/login">
                        <Login />
                    </Login>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}
