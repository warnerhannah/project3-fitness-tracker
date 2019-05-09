import React, { Component } from "react";
import withAuth from "./../components/withAuth";
import API from "./../utils/API";
import "./style.css";
// import UpdateCalories from '../components/UpdateCalories';

class Profile extends Component {
  state = {
    username: "",
    email: "",
    name: "",
    inches: "",
    feet: "",
    age: ""
  };

  componentDidMount() {
    API.getUser(this.props.user.id).then(res => {
      this.setState({
        username: res.data.username,
        email: res.data.email,
        name: res.data.name,
        inches: res.data.inches,
        feet: res.data.feet,
        age: res.data.age
      });
    });
  }

  updateUser = () => {
    // console.log(this.props.user)
    console.log(this.state.name);
    API.updateUser(
      this.props.user.id,
      this.state.name,
      this.state.weight,
      this.state.feet,
      this.state.inches,
      this.state.age
    ).then(res => {
      console.log("saved!");
      this.setState({
        name: res.data.name,
        inches: res.data.inches,
        feet: res.data.feet,
        age: res.data.age
      });
    });
  };

  handleInputChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="containerProfile">
        <h1>Your Profile</h1>
        <h3>UserName: {this.state.username}</h3>
        <h3>Email: {this.state.email}</h3>

        <div className="profileEdit">
          <p>
            Name:{" "}
            <input
              className="name profile"
              value={this.state.name}
              name="name"
              onChange={this.handleInputChange}
            />
          </p>
          <p>
            Height:{" "}
            <input
              className="profile"
              name="feet"
              value={this.state.feet}
              onChange={this.handleInputChange}
            />
            ft.
            <input
              className="profile"
              name="inches"
              value={this.state.inches}
              onChange={this.handleInputChange}
            />
            in.
          </p>

          <p>
            Age:{" "}
            <input
              className="profile"
              name="age"
              value={this.state.age}
              onChange={this.handleInputChange}
            />
            years old
          </p>
          <button
            className="btn btn-primary  saveButton"
            onClick={this.updateUser}
          >
            Save
          </button>
        </div>

        {/* <Link to="/">Go home</Link> */}
      </div>
    );
  }
}

export default withAuth(Profile);
