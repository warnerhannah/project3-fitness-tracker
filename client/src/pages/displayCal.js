import React, { Component } from "react";
import withAuth from "./../components/withAuth";
import API from "../utils/API";
import Food from "../pages/Food"
import Calories from "../components/Calories"

class displayCalories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      consumed: 5,
      burned: 10,
      date: "",
      calData: [],
      burnData: [],
      calLabels: []
    };
  }
  componentDidMount() {
    this.loadCalories();
  }

  state = {
    burned: "",
    consumed: ""
  }

  loadCalories = () => {
    console.log(this.props.user.id);
    API.getCalories(this.props.user.id).then(res => {

      console.log(res.data);
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

  handleFormSubmit = event => {
    event.preventDefault();
    API.createCalories(this.props.user.id, this.state.consumed, this.state.burned, this.state.date)
      .then(response => this.loadCalories())
      .catch(err => {
        console.log(err);
      });
  };

  addConsumed = () => {
    //pull from state.consumed
  }
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div className="container">
        <div className="graphdata" style={{ position: "relative" }}>
          <div className="messaging">
            <h3 className="none">Today's Totals</h3>
            <div className="flex">
              <p className="read">Burned: {this.state.burnData[this.state.burnData.length-1]}</p>
              <p className="read">Consumed:{this.state.calData[this.state.calData.length-1]}</p>
            </div>
          </div>
          <div className="messaging">
            <h3 className="none">Calories Consumed v. Calories Burned</h3>
            <Calories
              data={this.state.calData}
              burned={this.state.burnData}
              labels={this.state.calLabels}
            />
          </div>
          <div className="messaging">
          <p>Track your daily calorie intake</p>
            <h3>Add More Calories:</h3>
            <form>
              <p>
                {" "}
                Consumed:
                <input
                  className="cal"
                  onChange={this.handleInputChange}
                  name="consumed"
                />
                kCal
                </p><hr/>
              <p> Burned:
                <input
                  className="cal"
                  onChange={this.handleInputChange}
                  name="burned"
                />
                kCal.
                </p><hr/>
              <p> Date Recorded:
                <input
                  className="cal"
                  onChange={this.handleInputChange}
                  name="date"
                  type="date"
                >
                </input>
              </p>
              <button  className=" btn btn-primary  sendButton " onClick={this.handleFormSubmit}>
                Add It
              </button>
            </form>
            
          </div>
          <Food />
        </div>
      </div>
    );
  }
}

export default withAuth(displayCalories);
