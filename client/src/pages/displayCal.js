import React, { Component } from "react";
import withAuth from './../components/withAuth';
import API from "../utils/API";
import Food from "../pages/Food"
import Calories from "../components/Calories"
import Food from "./Food"

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
  componentDidMount(){
    this.loadCalories();
  }

  state = {
    burned: "",
    consumed: "",

  }

  loadCalories = () => {
    API.getCalories().then(res => {
      const newConsumed = res.data.map(consumed => consumed.consumed);
      const newBurned = res.data.map(burned => burned.burned);
      const newLabels = res.data.map(labels => labels.date);
      this.setState({
        calData: newConsumed,
        burnData: newBurned,
        calLabels: newLabels
      })
    })
      
 
  };

  handleFormSubmit = event => {
    event.preventDefault();
    API.createCalories(this.state.consumed, this.state.burned, this.state.date)
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
              <p className="read">Burned: {this.state.burned}</p>
              <p className="read">Consumed: {this.state.consumed}</p>
            </div>
          </div>
          <div className="messaging">
            <h3 className="none">Calories Consumed v. Calories Burned</h3>
            <Calories data={this.state.calData} burned={this.state.burnData} labels={this.state.calLabels} />
          </div>
          <div className="messaging">
            <form>
              <p> Consumed:
                <input
                  className="cal"
                  onChange={this.handleInputChange}
                  name="consumed"
                >
                </input>
                kCal
                </p>
              <p> Burned:
                <input
                  className="cal"
                  onChange={this.handleInputChange}
                  name="burned"
                >
                </input>
                kCal.
                </p>
              <p> Date Recorded:
                <input
                  className="cal"
                  onChange={this.handleInputChange}
                  name="date"
                >
                </input>
              </p>
              <button
                className="sendButton"
                onClick={this.handleFormSubmit}
              >Add It</button>
            </form>
            <Food />
          </div>

          <div className="messaging">
            <p>Know how many calories you've had?</p>
            <h3>Add More Calories:</h3>
            <div>
              <div>
                <form>
                  <p> New Calories Burned Data Point:
                <input
                      className="cal"
                      onChange={this.handleInputChange}
                      name="size"
                    >
                    </input>
                  </p>
                  <p> Date Recorded:
                <input
                      className="cal"
                      placeholder="MM/DD"
                      onChange={this.handleInputChange}
                      name="dateBurned"
                    >
                    </input>
                  </p>
                  <button
                    className="sendButton"
                    onClick={this.addBurned}
                  >Add It</button>
                </form>
              </div>
              <div>
                <form>
                  <p> New Calories Consumed Data Point:
                <input
                      className="cal"
                      onChange={this.handleInputChange}
                      name="size"
                    >
                    </input>
                  </p>
                  <p> Date Recorded:
                <input
                      className="cal"
                      placeholder="MM/DD"
                      onChange={this.handleInputChange}
                      name="dateConsumed"
                    >
                    </input>
                  </p>
                  <button
                    className="sendButton"
                    onClick={this.addConsumed}
                  >Add It</button>
                </form>
              </div>
            </div>
          </div>
          <Food />
        </div>
      </div>

    );
  }
}

export default withAuth(displayCalories);


