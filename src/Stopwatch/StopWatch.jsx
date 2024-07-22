import React, { useState, useEffect, useRef, useContext } from "react";

function StopWatch() {
  const [isRunning, setIsRunning] = useState(false);
  const [elapseTime, setElapseTime] = useState(0);

  const IntervalIdRef = useRef(null);
  const startTimeRef = useRef(0);

  useEffect(() => {
    if(isRunning){
        IntervalIdRef.current = setInterval(()=>{
            setElapseTime(Date.now() - startTimeRef.current);
        },10)
    }

    return() => {
        clearInterval(IntervalIdRef.current);
    }
  }, [isRunning]);

  function start(){
    setIsRunning(true);
    startTimeRef.current = Date.now() - elapseTime;
}

function reset(){
    setIsRunning(false);
    setElapseTime(0);
}

function stop() {
    setIsRunning(false);
    

}

  function formatTime() {

    let hours = Math.floor(elapseTime / (1000 * 60 * 60));
    let minutes = Math.floor(elapseTime / (1000 * 60) % 60);
    let seconds = Math.floor(elapseTime / (1000) % 60);
    let milliseconds = Math.floor((elapseTime  % 1000)/10);

    hours = String(hours).padStart(2,"0");
    minutes = String(minutes).padStart(2,"0");
    seconds = String(seconds).padStart(2,"0");
    milliseconds = String(milliseconds).padStart(2,"0");

    return `${hours}:${minutes}:${seconds}:${milliseconds}`;
  }

  return (
    <>
      <div className="stopwatch">
        <h1>StopWatch</h1>
        <div className="display">{formatTime()}</div>
        <div className="controls">
            <button className="start-btn" onClick={start}>Start</button>
            <button className="reset-btn" onClick={reset}>Reset</button>
            <button className="stop-btn" onClick={stop}>Stop</button>
        </div>
      </div>
    </>
  );
}

export default StopWatch;
