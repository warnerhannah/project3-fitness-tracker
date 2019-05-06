import React from "react";
import { Line } from "react-chartjs-2";



function Calories(props) {
  const data = {
    type: "line",
    Data: {
      CalConsumed: [],
      CalBurned: [],
      labels: props.labels,
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
          data: props.data
        },
        {
          label: "Calorie Lost",
          fill: true,
          // this changes line fill color
          backgroundColor: ["rgb(128,1,128,0.6)"],
          // this changes the color of the dots
          pointBackgroundColor: "rgb(75,192,192)",
          borderColor: "rgb(128,1,128)",
          pointHoverRadius: 5,
          pointHoverBorderColor: "black",
          // this displays the users weight on the graph
          data: props.burned
        }
      ]
    }
  };

  return (
    <div className="graphdata" style={{ position: "relative" }}>
      <Line
        data={data.Data}
        options={{
          responsive: true
        }}
      />
    </div>
  );
}

export default Calories;
