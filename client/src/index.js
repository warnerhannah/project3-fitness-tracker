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
import Calendar from "./components/Calendar"
import Calories from "./components/Calories"
import Weight from "./components/Weight"
import Resources from "./pages/Resources"
import Message from "./pages/Message"

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
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/calendar" component={Calendar} />
            <Route exact path="/calories" component={Calories} />
            <Route exact path="/weight" component={Weight} />
            <Route exact path="/messages" component={Message} />

            <Route exact path="/resources" component={Resources} />
        </div>
    </Router>
    , document.getElementById('root')
);
registerServiceWorker();
