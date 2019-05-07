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
    age: "",
    data: [],
    labels: [],
    calData: [],
    burnData: [],
    calLabels: []
  };

  componentDidMount() {
    API.getUser(this.props.user.id).then(res => {
      // console.log(res.data)
      this.setState({
        name: res.data.name,
        inches: res.data.inches,
        feet: res.data.feet,
        age: res.data.age
      });
    });
    this.loadWeight();
    this.loadCalories();
  }

  loadWeight = () => {
    API.getWeight(this.props.user.id).then(res => {
      const newWeight = res.data.weight.map(weight => weight.weight);
      const newLabels = res.data.weight.map(labels => labels.date);
      const recentWeight = newWeight[newWeight.length-1]
      console.log(res.data);
      console.log(newLabels);
      this.setState({
        data: newWeight,
        labels: newLabels,
        weight: recentWeight
      });
    });
  };

  loadCalories = () => {
    API.getCalories().then(res => {
      const newConsumed = res.data.map(consumed => consumed.consumed);
      const newBurned = res.data.map(burned => burned.burned);
      const newLabels = res.data.map(labels => labels.date);
      this.setState({
        calData: newConsumed,
        burnData: newBurned,
        calLabels: newLabels
      });
    });
  };

  render() {
    return (
      <div className="container">
        <div className="stats">
          <h3>My Stats</h3>
          <div className="flex">
            <p>Current Weight: {this.state.data[this.state.data.length-1]}lbs</p>
            <p>
              Height: {this.state.feet}ft. {this.state.inches}in.
            </p>
            <p>Current Age: {this.state.age} years</p>
          </div>
          <div className="flex">
            <div className="graph">
              <div className="graphTitle">
                <p id="weightProgress">Weight Progress</p>
                <a href="/weight">
                  <i className="fas fa-edit"/>
                </a>
              </div>
              <Weight data={this.state.data} labels={this.state.labels} />
            </div>
            <div className="graph">
              <div className="graphTitle">
                <p id="calConBunred" >Calories Consumed/Burned</p>
                <a href="/calories">
                  <i className="fas fa-edit" />
                </a>
              </div>
              <Calories
                data={this.state.calData}
                burned={this.state.burnData}
                labels={this.state.calLabels}
              />
            </div>
          </div>
        </div>

        <div className="calendar">
          <h3>My Workout Schedule</h3>
          <div className="calDiv">
            <Calendar />
          </div>
        </div>
        {/* </div> */}
      </div>
    );
  }
}

export default withAuth(Home);
