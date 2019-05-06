import React, { Component } from 'react';
import withAuth from './../components/withAuth';
import API from './../utils/API';
// import { Link } from 'react-router-dom';
// import Stats from "../components/Stats"
import "./style.css";
// import UpdateCalories from '../components/UpdateCalories';

const now = Date.now()


class Create extends Component {

  state = {
    username: "",
    email: "",
    name: "",
    inches: "",
    feet: "",
    age: "",
    weight: "",
  };

  componentDidMount() {

  }

  updateUser = () => {
    // console.log(this.props.user)
    API.createUser(this.props.user.id, this.state.name, this.state.feet, this.state.inches, this.state.age)
      .then(res => {
        console.log("saved!")
        this.setState({
          name: res.data.name,
          inches: res.data.inches,
          feet: res.data.feet,
          age: res.data.age,
        })
      })
      .then(res => {
        // once user is logged in
        // take them to their profile page
        this.props.history.replace(`/`);
      })
      .catch(console.log)
      this.addWeight()
  }


  addWeight = () => {
    API.createWeight(this.props.user.id, this.state.weight, now)
  }


  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value })
  }

  render() {
    return (
      <div className="container create">
      <h3 className="center">Thanks for joining...</h3>
        <h1>Create Your Profile</h1>
        <h3>Name: <input
          className="name profile"
          name="name"
          onChange={this.handleInputChange}
        ></input>
        </h3>

        <div>
          <p>Height: <input
            className="profile"
            name="feet"
            onChange={this.handleInputChange}
          ></input>
            ft.
            <input
              className="profile"
              name="inches"
              onChange={this.handleInputChange}
            ></input>
            in.</p>

          <p>Age: <input
            className="profile"
            name="age"
            onChange={this.handleInputChange}
          ></input>
            years old</p>

            <p>Initial Weight: <input
            className="profile"
            name="weight"
            onChange={this.handleInputChange}
          ></input>
            lbs</p>
        </div>

        <button
          className="saveButton"
          onClick={this.updateUser}
        >Save</button>        
      </div>
    )
  }
}

export default withAuth(Create);