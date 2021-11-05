import React, {useState,useEffect} from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Registration from './components/Registration'
import Login from './components/Login'
import Home from './components/Home'
import AddCar from './components/AddCar'
import Cars from './components/Cars'
import loginState from "./eventHundlers/app/loginState";
import logoutHandler from "./eventHundlers/app/logoutHandler";
import {useHistory, useRouteMatch} from "react-router";
import EditCar from './components/EditCar'

export default function App() {
    let history  = useHistory()
    let [datajs,setData]=useState({isLogged:false,data:"Loading"})

    useEffect(() => {
        loginState({data:datajs,setData})
    },[]);
    return (
        <Router>
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        {datajs.isLogged ?
                            <Link className="navbar-brand" href="/">Navbar</Link>:null
                        }
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"/>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                {datajs.isLogged ? <li className="nav-item mx-md-3">
                                    <Link className="nav-link" to="/">Home</Link>
                                </li>:null

                                }
                                {datajs.isLogged ? null:
                                    <li className="nav-item mx-md-3">
                                        <Link className="nav-link" to="/registration">Registration</Link>
                                    </li>
                                }
                                {datajs.isLogged ?null:
                                    <li className="nav-item mx-md-3">
                                    <Link className="nav-link" to="/login">Login</Link>
                                </li>
                                }
                                {datajs.isLogged ?
                                    <li className="nav-item mx-md-3">
                                        <Link className="nav-link" to="/add">Add Car</Link>
                                    </li>:null
                                }

                                {datajs.isLogged ?  <li className="nav-item mx-md-3">
                                    <Link className="nav-link" to="/cars">Cars List</Link>
                                </li>:null
                                }
                                {datajs.isLogged ? <li className="nav-item mx-md-3">
                                    <Link onClick={()=>{logoutHandler({data:datajs,setData})}}  className=" nav-link">Logout</Link>
                                </li>:null
                                }
                            </ul>
                        </div>
                    </div>
                </nav>

                <Switch>
                    <Route path="/registration">
                        <Registration args = {datajs}/>
                    </Route>
                    <Route path="/login">
                        <Login args = {datajs}/>
                    </Route>
                    <Route path="/add">
                        <AddCar args = {datajs}/>
                    </Route>
                    <Route path="/cars">
                        <Cars args = {datajs}/>
                    </Route>
                    <Route path="edit/:carId">
                        <EditCar args = {datajs}/>
                    </Route>
                    <Route path="/">
                        <Home args = {datajs}/>
                    </Route>
                    

                </Switch>
            </div>
        </Router>
    );
}
