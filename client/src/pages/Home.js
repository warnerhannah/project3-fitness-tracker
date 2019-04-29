import React, { Component } from "react";
import API from "../utils/API";
import withAuth from "../components/withAuth";
import Calendar from "../components/Calendar";
import Calories from "../components/Calories";
import Weight from "../components/Weight";

class Home extends Component {
  state = {
    name: "",
    weight: "",
    inches: "",
    feet: "",
    age: ""
  };

<<<<<<< HEAD
    componentDidMount() {
        API.getUser(this.props.user.id).then(res => {
            // console.log(res.data)
            this.setState({
                name: res.data.name,
                weight: res.data.weight,
                inches: res.data.inches,
                feet: res.data.feet,
                age: res.data.age
            })
        });
    }

    render() {
        return (
            <div className="container">

                <div className="flex calContainer">
                    <div className="calendarClick">
                        <p>info when click on calendar</p>
                    </div>

                    <div className="calendar">
                    <h3>My Workout Schedule</h3>
                        <Calendar />
                    </div>
                </div>

                <div className="stats">
                    <h3>My Stats</h3>
                    <div className="flex">
                        <p>Current Weight: {this.state.weight} lbs</p>
                        <p>Current Height: {this.state.feet}ft. {this.state.inches}in.</p>
                        <p>Current Age: {this.state.age} years</p>
                    </div>
                    <div className="flex">
                        <div className="graph">
                            <a href="/weight">Edit</a>
                            <Weight />
                        </div>
                        <div className="graph">
                            <a href="/calories">Edit</a>
                            <Calories />
                        </div>
                    </div>
                </div>

=======
  componentWillMount() {
    API.getUser(this.props.user.id).then(res => {
      console.log(res.data);
      this.setState({
        name: res.data.name,
        weight: res.data.weight,
        inches: res.data.inches,
        feet: res.data.feet,
        age: res.data.age
      });
    });
  }

  render() {
    return (
      <div>
        <div className="flex">
          <div className="calendarClick">
            <p>info when click on calendar</p>
          </div>

          <div className="calendar">
            <p>calendar</p>
            <Calendar />
          </div>
        </div>
        <div className="stats">
          <h3>My Stats</h3>
          <div className="flex">
            <p>Current Weight: {this.state.weight} lbs</p>
            <p>
              Current Height: {this.state.feet}ft. {this.state.inches}in.
            </p>
            <p>Current Age: {this.state.age} years</p>
          </div>
          <div className="flex">
            <div className="graph">
              {this.state.weight ? (
                <Weight userWeight={this.state.weight} />
              ) : (
                ""
              )}
>>>>>>> b05ea32754e2b1f71ec9d4809281876a3e1032b8
            </div>
            <div className="graph">
              <Calories />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withAuth(Home);
