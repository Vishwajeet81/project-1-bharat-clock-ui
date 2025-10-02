import { useContext } from "react";
import { Date_And_Time } from "../ClockLogics/All_In_One";

function Minutes() {
  let { minute , flag2 } = useContext(Date_And_Time);
  return (
    <>
     <div className="box box3">
        <div className={`time minutes ${flag2 && "rotate"} `}>{minute}</div>
        <div className="cap cap3">Minutes</div>
      </div>
    </>
  );
}
export default Minutes;
