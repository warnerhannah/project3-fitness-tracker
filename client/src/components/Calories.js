import React, { Component } from "react";
// import { Bar, Line, Pie } from "react-chartjs-2";
import { Line } from "react-chartjs-2";
import withAuth from './../components/withAuth';
// import API from "../utils/API";
import Food from "../pages/Food"

class Calories extends Component {

  constructor(props) {
    super(props);
    this.state = {
      burned: "",
      consumed: "",


      Weight: [],
      Data: {

        labels: ["1", "2", "3", "4", "5"],
        datasets: [
          {
            label: "Calories Consumed",
            fill: true,
            // this changes line fill color
            backgroundColor: ["rgba(75,192,192,0.4)"],
            // this changes the color of the dots
            pointBackgroundColor: "rgb(75,192,192)",
            borderColor: "rgb(75,192,192)",
            pointHoverRadius: 5,
            pointHoverBorderColor: "black",
            data: [5, 19, 2, 7, 10],
          },
          {
            label: "Calorie Lost",
            // this changes line fill color
            backgroundColor: ["rgb(128,1,128,0.6)"],
            // this changes the color of the dots
            pointBackgroundColor: "rgb(75,192,192)",
            borderColor: "rgb(128,1,128)",
            pointHoverRadius: 5,
            pointHoverBorderColor: "black",
            // this displays the users weight on the graph
            data: [3, 23, 1, 10, 5]
          }
        ]
      }
    }
  }
  getChartData = canvas => {
    const data = this.state.data;
    if (data.datasets) {
      // data.datasets.foreach((set, i) => {
      //     set.backgroundColor = this.setGradienColor(canvas, colors[i]);
      //     set.borderColor = "white";
      // })
    }
    return data;
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
            <Line
              data={this.state.Data}
              options={{
                responsive: true
              }}
            />
          </div>

          <div className="messaging">
          <p>Know how many calories you've had?</p>
            <h3>Add More Calories:</h3>
            <div>
              <div>
                <form className="flexIt">
                  <p> New Calories Burned Data Point:
                <input
                      className="cal"
                      onChange={this.handleInputChange}
                      name="size"
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
                <form className="flexIt">
                  <p> New Calories Consumed Data Point:
                <input
                      className="cal"
                      onChange={this.handleInputChange}
                      name="size"
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

export default withAuth(Calories);


