import React, { Component } from "react";
import { Line } from "react-chartjs-2";
import Weight from "../components/Weight"


class displayWeight extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      newWeight: "",
      date:""
    };
  }

  addWeight = () => {
    // pull new weight from state.newWeight
    //add it to the graph
  }

  render() {
    return (
      <div className="container">
        <div className="messaging">
          <h3 className="none">Weight Tracking</h3>
          <div className="graphdata" style={{ position: "relative" }}>
            <Weight />
            />
          </div>
        </div>

        <div className="messaging">
          <h3>Add A Weight Data Point:</h3>
          <div>
            <div>
              <form className="flexIt">
                <p> Weight:
                <input
                    className="cal"
                    onChange={this.handleInputChange}
                    name="newWeight"
                  >
                  </input>
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
                  onClick={this.addWeight}
                >Add It</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default displayWeight;