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
  const [sch_array, setSch_array] = React.useState<string[]>([]);
  // console.log(data_obj);
  // React.useEffect(() => {
  //  console.log('i was changed')
  // }, [date])

  const handleDateChange = (e: any) => {
    // setDate(e.target.value);
    setDate(e.target.value);
    // console.log(e.target.value);
    setSelect(true);
    console.log(data_obj[`${e.target.value}`]);
    if (typeof data_obj[`${e.target.value}`] !== "undefined") {
      setSch_array(Object.keys(data_obj[`${e.target.value}`]));
    }
  };

  // console.log(selectedData,'selectedData');
  // React.useEffect(() => {
  //   console.log("date has been changed");
  // }, [date]);

  return (
    <div className={styles.main_div}>
      <p>Enter the date for the graph</p>
      <input type="date" onChange={(e) => handleDateChange(e)} />

      {/* outer div */}
      <div
        style={{
          display: "flex",
        }}
      >
        {/* div for the bar chart */}
        <div
          style={{
            flex: 0.5,
          }}
        >
          {selectedData && typeof data_obj[`${date}`] !== "undefined" ? (
            <div
              style={{
                height: "70vh",
                width: "50vw",
              }}
            >
              <BarComponent dataForBar={data_obj[`${date}`]} />
            </div>
          ) : (
            <>
              <div
                style={{
                  display: select ? "block" : "none",
                }}
              >
                Invalid date selected
              </div>

              <div>Please select a valid date</div>
            </>
          )}
          {/* // <BarComponent  dataForBar = {data_obj[`${date}`]} /> : <div></div>} */}
        </div>
        {/* div for per date details */}
        <div
          style={{
            flex: 0.5,
          }}
        >
          {selectedData && typeof data_obj[`${date}`] !== "undefined" ? (
            <div>
              <p
                style={{
                  fontWeight: "bold",
                  marginBottom: "10px",
                }}
              >
                Please select the date for details regarding the scheduling time
              </p>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "space-around",
                  fontWeight: "bold",
                }}
              >
                {sch_array.map((sch_date) => (
                  <button
                  style = {{
                    height : '40px',
                    width : '80px',
                    border : 'none',
                    borderRadius : '5px',
                    
                  }}
                  
                  >{sch_date}</button>
                ))}
              </div>
            </div>
          ) : (
            <p></p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Main;
