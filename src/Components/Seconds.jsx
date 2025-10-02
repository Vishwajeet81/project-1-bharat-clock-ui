import { useContext } from "react";
import { Date_And_Time } from "../ClockLogics/All_In_One";

function Seconds(){
    let {second,flag1}=useContext(Date_And_Time)
    return <>
    <div className="box box4">
        <div className={`time seconds ${flag1 && "rotate"}`}>{second}</div>
        <div className="cap cap4">Second</div>
      </div>
    </>
}
export default Seconds;