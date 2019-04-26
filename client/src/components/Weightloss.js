import React, { Component } from "react";
import { Bar, Line, Pie } from "react-chartjs-2";

class Weightloss extends Component {
  constructor(props) {
    super(props);
    this.state = {

      Data: {
        Weight: [],
        labels: ["1", "2", "3", "4", "5"],
        datasets: [
          {
            label: "Month Weight Goal",
            // this changes line fill color
            backgroundColor: ["rgb(75,192,192)"],
            // this changes the color of the dots
            pointBackgroundColor: "rgb(75,192,192)",
            pointHoverRadius:5,
            pointHoverBorderColor: "black",
            data: [5,19,2,7],
          }
        ]
      }
      //  Data: {
      //   Weight: [],
      //   labels: ["1", "2", "3", "4", "5"],
      //   datasets: [
      //     {
      //       label: "Calories Consumed",
      //       // this changes line fill color
      //       backgroundColor: ["rgb(75,192,192)"],
      //       // this changes the color of the dots
      //       pointBackgroundColor: "rgb(75,192,192)",
      //       pointHoverRadius:5,
      //       pointHoverBorderColor: "black",
      //       data: [5,19,2,7,10],
      //     },
      //     {
      //       label: "Calorie Lost",
      //       // this changes line fill color
      //       backgroundColor: "purple",
      //       // this changes the color of the dots
      //       pointBackgroundColor: "rgb(75,192,192)",
      //       pointHoverRadius:5,
      //       pointHoverBorderColor: "black",
      //       data: [10,1,17,6,6],
      //     }
      //   ]
      // }


      
    };
  }
  // setGradientColor = (canvas, color) => {
  // const ctx = canvas.getContext('2d');
  // const gradient = ctx.createLinearGradient(0,0,600,550);
  // gradient.addColorStop(0, color);
  // gradient.addColorStop(0,95, "rgba(133,122,144,0.5");
  // return gradient;
  // }
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

export default Weightloss;
