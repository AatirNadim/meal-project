import React from "react";
import styles from "../Styles/Main.module.css";
import { shapedData } from "../Assets/handleData";
import "react-datepicker";
import DatePicker from "react-datepicker";

import { Bar } from "react-chartjs-2";
import BarComponent from "./BarComponent";
import { objType } from "../Assets/handleData";

// set data for the barchart -->
// labels --> {labels for th x-axis}
// datasets --> {
// label : {label for the dataset}
// data : value for each bar

// }

const Main = () => {
  const [data_obj, setData_obj] = React.useState(shapedData);
  const [select, setSelect] = React.useState(false);
  const [date, setDate] = React.useState("");
  const [selectedData, setSelectedData] = React.useState({});
  // console.log(data_obj);
  // React.useEffect(() => {
  //  console.log('i was changed')
  // }, [date])

  const handleDateChange = (e: any) => {
    // setDate(e.target.value);
    setSelectedData(data_obj[`${e.target.value}`]);
    // console.log(e.target.value);
    setSelect(true);
    // console.log(data_obj[`${e.target.value}`])
  };



  // console.log(selectedData,'selectedData');
  // React.useEffect(() => {
  // }, [selectedData]);

  return (
    <div className={styles.main_div}>
      <p>Enter the date for the graph</p>
      {/* <DatePicker 
        dateFormat={'dd/MM/yyyy'}
        value={''}
        onChange= {(date : Date) => console.log(date)}
      /> */}
      <input type="date" onChange={(e) => handleDateChange(e)} />
      {/* <div>{date.toUTCString().split('')}</div> */}
      <div>
        {/* {select ? {typeof data_obj[`${date}`] !== 'undefined' ? <BarComponent  dataForBar = {data_obj[`${date}`]} /> : } 
         : <div></div>} */}
        {selectedData ? <BarComponent dataForBar={selectedData} /> : <></>}
        {/* <div
              style={{
                display: select ? "block" : "none",
              }}
            >
              Invalid date selected
            </div>

            <div>Please select a valid date</div> */}
        {/* // <BarComponent  dataForBar = {data_obj[`${date}`]} /> : <div></div>} */}
      </div>
    </div>
  );
};

export default Main;
