import React from 'react'
import styles from '../Styles/Main.module.css'
import { handleData } from '../Assets/handleData'
import "react-datepicker";
import DatePicker from 'react-datepicker';

import { Bar } from 'react-chartjs-2';
import BarComponent from './BarComponent';
import { objType } from '../Assets/handleData';

// set data for the barchart --> 
// labels --> {labels for th x-axis}
// datasets --> {
  // label : {label for the dataset}
  // data : value for each bar

// }

const Main = () => {
  let obj = handleData();
  const [data_obj, setData_obj] = React.useState(obj);
  const [select, setSelect] = React.useState(false);
  const [date, setDate] = React.useState('');
  // console.log(data_obj);
  return (
    <div
    className = {styles.main_div}
    >
      <p>Enter the date for the graph</p>
      {/* <DatePicker 
        dateFormat={'dd/MM/yyyy'}
        value={''}
        onChange= {(date : Date) => console.log(date)}
      /> */}
      <input type="date" onChange={(e) => {setDate(e.target.value)
      console.log(e.target.value)
      setSelect(true);
      console.log(data_obj[`${e.target.value}`])
      }}/>
      {/* <div>{date.toUTCString().split('')}</div> */}
      <div>
        {select ? <BarComponent  dataForBar = {data_obj[`${date}`]} /> : <div></div>}

      </div>

    </div>
  )
}


export default Main