import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

const TimeComponent = ({ data }: any) => {
  const [arr, setArr] = React.useState<number[]>([]);
  // const [dummydata, setDummydata] = React.useState({});
  const arr1 = [0, 0, 0, 0, 0, 0, 0, 0];
  const handleShape = () => {
    for (let i = 0; i < data.length; i++) {
      let temp = data[i].split(":");
      let temp2 =
        Number(temp[0]) * 60 * 60 + Number(temp[1]) * 60 + Number(temp[2]);
      arr1[Math.floor(temp2 / (3 * 60 * 60))]++;
    }
    setArr(arr1);
    // console.log(arr1);
  };

  const [timeData, setTimeData] = React.useState({
    labels: [
      "00:00:00 - 03:00:00",
      "03:00:00 - 06:00:00",
      "06:00:00 - 09:00:00",
      "09:00:00 - 12:00:00",
      "12:00:00 - 15:00:00",
      "15:00:00 - 18:00:00",
      "18:00:00 - 21:00:00",
      "21:00:00 - 00:00:00",
    ],
    datasets: [
      {
        label: "Per Day Reservations",
        data: arr1,
      },
    ],
  });

  React.useEffect(() => {
    handleShape();
    setTimeData({
      labels: [
        "00:00 - 03:00",
        "03:00 - 06:00",
        "06:00 - 09:00",
        "09:00 - 12:00",
        "12:00 - 15:00",
        "15:00 - 18:00",
        "18:00 - 21:00",
        "21:00 - 00:00",
      ],
      datasets: [
        {
          label: "Per Day Reservations",
          data: arr1,
        },
      ],
    });
  }, [data]);
  //   [
  //     "06:12:53",
  //     "10:44:35",
  //     "11:53:50",
  //     "12:53:56",
  //     "12:54:26",
  //     "12:58:39",
  //     "13:08:00",
  //     "13:08:02",
  //     "13:08:56",
  //     "13:12:02",
  //     "15:57:34",
  //     "22:29:00",
  //     "22:29:31"
  // ]
  // console.log(data, "data in time component");
  return <div
  style = {{
    height: "40vh",
    width: "100%",
    marginTop: "1.5rem",
  }}
  >
      <Bar data={timeData} />
  </div>;
};

export default TimeComponent;
