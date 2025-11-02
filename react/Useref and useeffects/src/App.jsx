import React, { useState, useEffect, useRef } from "react";

function App() {

  const [input ,setInput] = useState("");
  const [isRunning , setRunning] = useState(false);
  const [time , setTime] = useState(0);

  const inputRef = useRef();
  const timeRef = useRef();

  useEffect(()=>{
  inputRef.current.focus();
  },[])


  useEffect(()=>{
    if(isRunning){
      timeRef.current = setInterval(()=>{
        setTime(e => e +1);
      },1000);
    }else{
      clearInterval(timeRef.current);

    }

    return () => clearInterval(timeRef.current);
  },[isRunning]);

  const handleChange = (e)=>{
  setInput(e.target.value);
  if(!isRunning) setRunning(true);
  }

    const reset = () => {
    setInput("");
    setTime(0);
    setRunning(false);
    inputRef.current.focus();
  };

  return <>
  <div style={{fontFamily:"sans-serif", fontWeight : '100px' , textAlign: "center" ,  marginTop :"100px"}}>
    <h1 >
    START TYPING HERE
  </h1>
   <input type="text"
    ref = {inputRef}
    value={input}
    onChange={handleChange}
    placeholder="Start Typing"
    style={{ padding: "8px", width: "250px"}}
   />


  <p>⏱ Time: {time} seconds</p>

      <button onClick={reset}>Reset</button>



  </div>

  

  </>
}

export default App;
