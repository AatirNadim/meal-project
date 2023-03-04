import React from "react";
import { objType } from "../Assets/handleData";

import { Bar, getElementAtEvent } from "react-chartjs-2";
import { UserData } from "../Assets/data1";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

const BarComponent = ({ dataForBar }: objType) => {
  // console.log(Object.keys(dataForBar));
  // console.log(typeof Object.keys(dataForBar))
  // console.log(Object.values(dataForBar));
  // console.log(typeof Object.values(dataForBar))
  const arr1: string[][] = Object.values(dataForBar);
  // console.log(arr1);

  const [chartData, setchartData] = React.useState({
    labels: Object.keys(dataForBar),
    datasets: [
      {
        label: "Reservations",
        // data: UserData.map((item) => item.userGain),
        data: arr1.map((item) => item.length),
      },
    ],
  });
  React.useEffect(() => {
    setchartData({
      labels: Object.keys(dataForBar),
      datasets: [
        {
          label: "Reservations",
          // data: UserData.map((item) => item.userGain),
          data: arr1.map((item) => item.length),
        },
      ],
    });
  }, [dataForBar]);

  return (
    <div
    style = {{
      height: "40vh",
      width: "100%",
    }}
    
    >
      <span
        style={{
          fontSize: "1.5rem",
          fontWeight: "bold",
        }}
      >
        Display for the selected date
      </span>
      <Bar data={chartData} options={{
        

      }}
      />
      {/* <TempComponent chartData = {data} /> */}
    </div>
  );
};

export default BarComponent;
