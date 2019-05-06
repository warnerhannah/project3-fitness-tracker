import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import AuthService from './../components/AuthService';
import API from './../utils/API';

class Signup extends Component {
  constructor() {
    super();
    this.Auth = new AuthService();
  }

  componentWillMount() {
    if (this.Auth.loggedIn()) {
      this.props.history.replace('/');
    }
  }

  handleFormSubmit = event => {
    event.preventDefault();
    API.signUpUser(this.state.username, this.state.email, this.state.password)
      .then(res => {
        // once the user has signed up
        // send them to the login page
        // this.props.history.replace('/login');
        this.Auth.login(this.state.email, this.state.password)
        .then(res => {
          // once user is logged in
          // take them to their profile page
          this.props.history.replace(`/create`);
        })
        .catch(err => {
          alert(err.response.data.message)
        });
      })
      .catch(err => alert(err));
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div className="container signupPage">
        <h1 className="fitnessTracker">
        ≡Fitness Tracker≡
        </h1>
        <div className="flexIt signupPage">

          <div className="messaging">
            <h1 className="left">A fitness app that is as personalized as you are!</h1>
            <p>Track your progress with graphs.. </p>
            <ul>
              <li>Your Caloric Intake</li>
              <li>Your Calories Burned</li>
              <li>Your Weight</li>
            </ul>
            <p>Search foods to figure out how many calories they contain</p>
            <p>Plan your fitness schedule with an easy to read calendar</p>
          </div>

          <div className="signupL">
            <form onSubmit={this.handleFormSubmit}>
              <h1>Signup Now!</h1>
              <div className="form-group">
                <label htmlFor="username">Username:</label>
                <input className="form-control signup"
                  placeholder="username"
                  name="username"
                  type="text"
                  id="username"
                  onChange={this.handleChange} />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email address:</label>
                <input className="form-control signup"
                  placeholder="john@me.com"
                  name="email"
                  type="email"
                  id="email"
                  onChange={this.handleChange} />
              </div>
              <div className="form-group">
                <label htmlFor="pwd">Password:</label>
                <input className="form-control signup"
                  placeholder="password"
                  name="password"
                  type="password"
                  id="pwd"
                  onChange={this.handleChange} />
              </div>
              <button type="submit" className="btn btn-primary submit">Submit</button>

            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;