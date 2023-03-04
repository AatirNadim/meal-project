import React, { useEffect } from "react";
import { objType } from "../Assets/handleData";
import TimeComponent from "./TimeComponent";
type type1 = {
  data_obj: objType;
  date: string;
  perDate: string;
};
const InterimComponent = ({ data_obj, date, perDate }: type1) => {
  const [currentDate, setCurrentDate] = React.useState("");
  console.log("in the interim component");
  useEffect(() => {
    setCurrentDate(perDate);
    if (perDate.length > 0) {
      console.log(data_obj[`${date}`][`${perDate}`]);
    }
  }, [perDate]);
  return (
    <div>
      {currentDate.length > 0 ? <TimeComponent data={perDate} /> : <div></div>}
    </div>
  );
};

export default InterimComponent;
