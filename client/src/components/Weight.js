import React, { Component } from "react";
import { Line } from "react-chartjs-2";


class Weight extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      type: "line",
      Data: {
        Weight: [],
        labels: ["1", "2", "3", "4"],
        datasets: [
          {
           
            label: "Month Weight Goal",
            fill: true,
            // this changes line fill color
            backgroundColor: ["rgb(75,192,192)"],
            // this changes the color of the dots
            pointBackgroundColor: "rgb(75,192,192)",
            
            pointHoverRadius:5,
            pointHoverBorderColor: "black",
            data: [props.userWeight, 170]
          }
        ]
      }
    };
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
  };
  render() {
    return (
      <div className="graphdata" style={{ position: "relative" }}>
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

export default Weight;
