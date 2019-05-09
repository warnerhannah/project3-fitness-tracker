import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import registerServiceWorker from './registerServiceWorker';
// import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import axios from "axios";

// Our Components
import Login from './pages/Login';
import Profile from './pages/Profile';
import Signup from './pages/Signup';
import Navbar from './components/Navbar';
// import Selectable from './components/selectable';
import displayCalendar from "./pages/displayCalendar"
import displayCal from "./pages/displayCal"
import displayWeight from "./pages/displayWeight"
import Resources from "./pages/Resources"
import Message from "./pages/Message"
import Food from "./pages/Food"
import Create from "./pages/Create"


// Here is if we have an id_token in localStorage
if (localStorage.getItem("id_token")) {
    // then we will attach it to the headers of each request from react application via axios
    axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('id_token')}`;
}

ReactDOM.render(
    <Router>
        <div>
            <Navbar />
            <Route exact path="/" component={App} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/create" component={Create} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/calendar" component={displayCalendar} />
            <Route exact path="/calories" component={displayCal} />
            <Route exact path="/weight" component={displayWeight} />
            <Route exact path="/messages" component={Message} />
            <Route exact path="/food" component={Food} />
            <Route exact path="/resources" component={Resources} />
            <div className="two-toned-footer-color">
            <p className="text-muted text-muted-footer text-center">
              &copy; Copyright 2019 Hannah, Manny, Ivan, and Michael 
            </p>
          </div>
        </div>
    </Router>
    , document.getElementById('root')
);
registerServiceWorker();
