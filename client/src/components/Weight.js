import React from "react";
import { Line } from "react-chartjs-2";

function Weight(props) {
  const data = {
    type: "line",
    Data: {
      Weight: [],
      labels: props.labels,
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
          data: props.data
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

export default Weight;
