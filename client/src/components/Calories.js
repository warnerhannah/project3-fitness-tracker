import React, { Component } from "react";
import { Bar, Line, Pie } from "react-chartjs-2";
import API from "../utils/API";

class Calories extends Component {

    constructor(props) {
        super(props);
        this.state = {
    
            Data: {
                Weight: [],
                labels: ["1", "2", "3", "4", "5"],
                datasets: [
                  {
                    label: "Calories Consumed",
                    // this changes line fill color
                    backgroundColor: ["rgb(75,192,192)"],
                    // this changes the color of the dots
                    pointBackgroundColor: "rgb(75,192,192)",
                    pointHoverRadius:5,
                    pointHoverBorderColor: "black",
                    data: [5,19,2,7,10],
                  },
                  {
                    label: "Calorie Lost",
                    // this changes line fill color
                    backgroundColor: "purple",
                    // this changes the color of the dots
                    pointBackgroundColor: "rgb(75,192,192)",
                    pointHoverRadius:5,
                    pointHoverBorderColor: "black",
                    data: [10,1,17,6,6],
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
      <div style={{ position: "relative", width: 600, height: 550 }}>
        <Line
          data={this.state.Data}
          options={{
            responsive: true
          }}
        />
      </div>
    );
  }
}

export default Calories;


  