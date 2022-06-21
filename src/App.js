
import React, { useState } from "react";

const App = () =>{

let newTime = new Date().toLocaleTimeString();
const [cTime, setcTime]=useState(newTime);

const UpdateTime = () =>{
  newTime = new Date().toLocaleTimeString();
  setcTime(newTime);

};
setInterval(UpdateTime);
  

  return (
    <>
    <h1>{cTime}</h1>
    {/* <button onClick = { UpdateTime}>click me </button> */}
    </>
  );

  }

export default App;
