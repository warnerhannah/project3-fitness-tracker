import React, { Component } from 'react';
import withAuth from './../components/withAuth';
import API from './../utils/API';
import { Link } from 'react-router-dom';
// import Stats from "../components/Stats"
import "./style.css";


class Profile extends Component {

  state = {
    username: "",
    email: "",
    name: "",
    weight: "",
    inches: "",
    feet: "",
    age: ""
  };

  componentDidMount() {
    API.getUser(this.props.user.id).then(res => {
      // console.log(res.data)
      this.setState({
        username: res.data.username,
        email: res.data.email,
        name: res.data.name,
        weight: res.data.weight,
        inches: res.data.inches,
        feet: res.data.feet,
        age: res.data.age
      })
    });
  }

  updateUser = () => {
    // console.log(this.props.user)
    console.log(this.state.name)
    API.updateUser(this.props.user.id, this.state.name, this.state.weight, this.state.feet, this.state.inches, this.state.age)
      .then(res => {
        console.log("saved!")
        this.setState({
          name: res.data.name,
          weight: res.data.weight,
          inches: res.data.inches,
          feet: res.data.feet,
          age: res.data.age
        })
      })
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value })
  }

  render() {
    return (
      <div className="container Profile">
        <h1>Your Profile</h1>
        <h3>Name: <input
          className="name profile"
          value={this.state.name}
          name="name"
          onChange={this.handleInputChange}
        ></input>
        </h3>
        <p>UserName: {this.state.username}</p>
        <p>Email: {this.state.email}</p>

        <div>
          <p>Weight: <input
            className="profile"
            name="weight"
            value={this.state.weight}
            onChange={this.handleInputChange}
          ></input>
            lbs.</p>

          <p>Height: <input
            className="profile"
            name="feet"
            value={this.state.feet}
            onChange={this.handleInputChange}
          ></input>
            ft.
            <input
              className="profile"
              name="inches"
              value={this.state.inches}
              onChange={this.handleInputChange}
            ></input>
            in.</p>

          <p>Age: <input
            className="profile"
            name="age"
            value={this.state.age}

            onChange={this.handleInputChange}
          ></input>
            years old</p>
        </div>

        <button
          onClick={this.updateUser}
        >Save</button>
        {/* <Link to="/">Go home</Link> */}
      </div>
    )
  }
}

export default withAuth(Profile);