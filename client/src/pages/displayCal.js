import React, { Component } from "react";
// import { Bar, Line, Pie } from "react-chartjs-2";
import { Line } from "react-chartjs-2";
import withAuth from './../components/withAuth';
// import API from "../utils/API";
import Food from "../pages/Food"
import Calories from "../components/Calories"

class displayCalories extends Component {

  state = {
    burned: "",
    consumed: "",

  }


  addBurned = () => {
    //pull from state.burned and add to graph/db
  }

  addConsumed = () => {
    //pull from state.consumed
  }

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
            <Calories />
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


