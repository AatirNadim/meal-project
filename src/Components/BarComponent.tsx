import React from "react";
import { objType } from "../Assets/handleData";

import { Bar } from "react-chartjs-2";

const BarComponent = ({ dataForBar }: objType) => {
  // console.log(dataForBar);
  // console.log(Object.keys(dataForBar));
  // console.log(typeof Object.keys(dataForBar))
  // console.log(Object.values(dataForBar));
  // console.log(typeof Object.values(dataForBar))
  const arr1: string[][] = Object.values(dataForBar);
  // console.log(arr1);

  const [data, setData] = React.useState<{
    labels: string[];
    datasets: {
      label: string;
      data: number[];
    }[];
  }>({
    labels: Object.keys(dataForBar),
    datasets: [
      {
        label: "Reservations",
        data: arr1.map((arr: string[]) => arr.length),
      },
    ],
  });
  console.log(data);
  return (
    <div>
      BarComponent
      {/* <Bar data={data} /> */}
    </div>
  );
};

export default BarComponent;
