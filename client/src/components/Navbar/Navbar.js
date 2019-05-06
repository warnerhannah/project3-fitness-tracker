import React, { Component } from "react";
import AuthService from '../AuthService';
import { Link } from "react-router-dom";
import shoe from './images/shoe.jpg'
import withAuth from '../../components/withAuth';
import API from "../../utils/API"

class Navbar extends Component {
    state = {
        username: "",
        messages: []
    }

    constructor() {
        super();
        this.Auth = new AuthService();
    }

    componentDidMount() {
        // API.getUser(this.props.user.id)
        //     .then(res => {
        //         this.setState({
        //             username: res.data.username,
        //         })
        //     })
        //     .then(res => {
        //         API.countUnreadMessages(this.state.username)
        //             .then(res => {
        //                 console.log("Here", res.data)
        //                 this.setState({
        //                     messages: res.data
        //                 })
        //             })
        //         })
    }

    showNavigation = () => {
        if (this.Auth.loggedIn()) {
            return (
                <div>
                    <ul className="navbar-nav">

                        <li className="nav-item">
                            <Link className="nav-link" to="/calendar">Calendar</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/calories">Calories</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/weight">Weight</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/resources">Resources</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/profile">Profile</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/messages">Messages ({this.state.messages.length})</Link>
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
            <nav className="navbar navbar-expand-lg navbar-dark">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        <img src={shoe} alt="shoeimage" />
                        Fitness Tracker</Link>
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