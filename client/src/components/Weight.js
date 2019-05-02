import React, { Component } from "react";
import { Line } from "react-chartjs-2";
import API from "../utils/API";



class Weight extends Component {
  state = {

    weight: [],
    labels: []

  };

  componentDidMount() {
    API.getWeight().then(res => {
      const newWeight = res.data.map(weight => weight.weight);
      const newLabels = res.data.map(labels => labels.date);
      console.log(res.data);
      this.setState({

        Data: {
          Weight: [],
          labels: newLabels,
          datasets: [
            {

              label: "Weight",
              fill: true,
              // this changes line fill color
              backgroundColor: ["rgb(75,192,192)"],
              // this changes the color of the dots
              pointBackgroundColor: "rgb(75,192,192)",

              pointHoverRadius: 5,
              pointHoverBorderColor: "black",
              data: newWeight
            }
          ]
        }

      })
    });
  };
  
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      type: "line",
      Data: {
        Weight: [],
        labels: ["Week 1", "Week 2","Week 3", "Week 4"],
        datasets: [
          {

            label: "Month Weight Goal",
            fill: true,
            // this changes line fill color
            backgroundColor: ["rgb(75,192,192,0.4)"],
            // this changes the color of the dots
            pointBackgroundColor: "rgb(75,192,192)",

            pointHoverRadius: 5,
            pointHoverBorderColor: "black",
            data: []
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
    )
  }
}

export default Weight;
