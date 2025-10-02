import { createContext, useEffect, useState ,useRef } from "react";


export const Date_And_Time = createContext();

function All_In_One({ children }) {
    let [dateAndTime,setDateAndTime]=useState(new Date())
    let [currentFlagSeconds,setFlagSeconds]=useState(true)
    let [currentFlagMinutes,setFlagMinutes]=useState(true)
    let [currentFlagHours,setFlagHours]=useState(true)
    let [currentFlagDays,setFlagDay]=useState(true)
    useEffect(()=>{
        let id = setInterval(()=>{
            let dateObj=new Date()
            setDateAndTime(dateObj)
            if(dateObj.getSeconds()===0){
                setFlagMinutes((currentFlagMinutes)=>!currentFlagMinutes)
            }
            if(dateObj.getMinutes()===0 && dateObj.getSeconds()==0){
                setFlagHours((currentFlagHours)=>!currentFlagHours)
            }
            if(dateObj.getHours()===0 && dateObj.getMinutes()===0 &&dateObj.getSeconds()==0 ){
                setFlagDay((currentFlagDays)=>!currentFlagDays)
            }
            setFlagSeconds((currentFlagSeconds)=>!currentFlagSeconds)
        
        },1000)

        return ()=>{
            clearInterval(id)
        }
    },[dateAndTime])



  return (
    <>
    

      <Date_And_Time.Provider
        value={{
          day: dateAndTime.(getDay()+1).toString().padStart(2,0),
          hour: dateAndTime.getHours().toString().padStart(2,0),
          minute:dateAndTime.getMinutes().toString().padStart(2,0),
          second: dateAndTime.getSeconds().toString().padStart(2,0),
          flag1:currentFlagSeconds,
          flag2:currentFlagMinutes,
          flag3:currentFlagHours,
          flag4:currentFlagDays
        }}
      >
        {children}
      </Date_And_Time.Provider>
    </>
  );
}

export default All_In_One;
