import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
var timer = 0;
function App() {

  const [start, setStart]= useState(false);
  const [stop, setStop]= useState(false);
  const [sec, setSec]= useState(0);
  const [timerString,setTimerString]=useState('')

  useEffect(()=>{
    console.log('running useEffect')
    const date = new Date(0)
    date.setSeconds(sec)
    setTimerString(date.toISOString().slice(11,19))
  })

  useEffect(()=>{
    // let timer= null
    console.log("state values", start, stop)
    if(start&!stop){
      timer= setInterval(()=>{
        setSec(sec=>sec+1)},1000)

      }
      else if(stop){
        clearInterval(timer)
      }
      // return ()=>(
      //   clearInterval(timer)
      // )
    },[start,stop])


    const handleStart=()=>
    {
      console.log("handle start running")
      setStop(false)
      setStart(true)
    }

  const handleStop=()=>{
    console.log("handle stop running")
    setStart(false)
    setStop(true)
  }
    
  const handleReset=()=>{
    console.log("handle reset running")
    setSec(0);
    setStart(false);
    setStop(false);

  }


  return (
    <div className="App">
      <h1>Stopwatch</h1>
      <p>{sec}</p>
      <p>{timerString}</p>
      <div className="button">
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
      <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}

export default App;
