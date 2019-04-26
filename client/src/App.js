import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AuthService from './components/AuthService';
import withAuth from './components/withAuth';
import Home from "./pages/Home"
// import Calendar from "./components/Calendar"
// import Calories from "./components/Calories"
// import Weight from "./components/Weight"
// import Resources from "./pages/Resources"
import Weightloss from './components/Weightloss';
import Calories from './components/Calories';

const Auth = new AuthService();


class App extends Component {

  handleLogout = () => {
    Auth.logout();
    this.props.history.replace('/signup');
  };

  goToEditProfile = () => {
    this.props.history.replace('/profile');
  };

  render() {
    // console.log(process.env.REACT_APP_SECRET_CODE);
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome {this.props.user.email}</h2>
          {/* <p className="App-intro">
              <button type="button" className="btn btn-primary" onClick={this.goToEditProfile}>Go to Profile</button>
              <button type="button" className="btn btn-danger" onClick={this.handleLogout}>Logout</button>
            </p> */}
        </div>
        <Home />

      </div>
    );
  }
}

export default withAuth(App);
