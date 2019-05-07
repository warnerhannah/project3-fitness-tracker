import React, { Component } from 'react';
import './App.css';
import AuthService from './components/AuthService';
import withAuth from './components/withAuth';
import Home from "./pages/Home"
import API from "./utils/API"
// import Message from "./pages/Message"
// import Calendar from "./components/Calendar"
// import Calories from "./components/Calories"
// import Weight from "./components/Weight"
// import Resources from "./pages/Resources"
// import Weight from './components/Weight';
// import Calories from './components/Calories';

const Auth = new AuthService();


class App extends Component {
  state = {
    name: ""
  }

  componentDidMount() {
    API.getUser(this.props.user.id).then(res => {
      // console.log(res.data)
      this.setState({
        name: res.data.name,
      })
    });
  }

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
     
        <Home />
        <footer>
        <p>Created by: Hannah, Manny, Ivan, and Michael</p>
        <p>May 2019</p>
      </footer>
      </div>
    );
  }
}

export default withAuth(App);
