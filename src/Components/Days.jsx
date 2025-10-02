import { useContext } from "react";
import { Date_And_Time } from "../ClockLogics/All_In_One";

function Days(){
    let {day , flag4} =useContext(Date_And_Time) ;
    return <>
    <div className="box box1">
        <div className={`time days ${flag4 && "rotate"}`}>{day}</div>
        <div className="cap cap1">Day</div>
      </div>
    </>
}

export default Days;