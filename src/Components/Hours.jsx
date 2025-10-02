import { useContext } from "react";
import { Date_And_Time } from "../ClockLogics/All_In_One";

function Hours() {
  let { hour ,flag3 } = useContext(Date_And_Time);
  return (
    <>
      <div className="box box2">
        <div className={`time hours ${flag3 && "rotate"}`}>{hour}</div>
        <div className="cap cap2">Hour</div>
      </div>
    </>
  );
}
export default Hours;
