import React, { Component } from "react";
import AuthService from '../AuthService';
import { Link } from "react-router-dom";

class Navbar extends Component {
    constructor() {
        super();
        this.Auth = new AuthService();
    }

    showNavigation = () => {
        if (this.Auth.loggedIn()) {
            return (
                <div>
                    <link href="https://fonts.googleapis.com/css?family=Playfair+Display" rel="stylesheet"></link>
                    <ul id="navBarLinks" className="navbar-nav">
                        
                        <li className="nav-item">
                            <a className="nav-link" href="/calendar">Calendar</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/calories">Calories</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/weight">Weight</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/food">food</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/resources">Resources</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/profile">Profile</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/messages">Messages</a>
                        </li>
                        <li className="nav-item">
                            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
                            <a className="nav-link" href="/" onClick={() => this.Auth.logout()}>Logout</a>
                        </li>
                    </ul>


                </div>
            );
        } else {
            return (
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/signup">Signup</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/login">Login</Link>
                    </li>
                </ul>
            );
        }
    };

    render() {
        return (
            <nav className="navbar navbar-expand-lg">
                <div className="container">
               
                <a id="navbar-brand" href="/"> F I T N E S S  |  L I F E S T Y L E  </a>

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mr-auto">
                        
                        </ul>
                        {this.showNavigation()}
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar;