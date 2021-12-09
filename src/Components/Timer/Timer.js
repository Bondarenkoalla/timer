import React, { useState  } from "react";
import "./Timer.css"

export default function Timer() {
  const [s, setS] = useState(0);
  const [m, setM] = useState(0);
  const [h, setH] = useState(0);
  const [status, setStatus] = useState(0);
  const [interv, setInterv] = useState(0);
  //0-not started
  //1-start
  //2-pause/reset
    
  
  const start = () => {
    setStatus(1);
    setInterv(
      setInterval(() => {
        if (m === 60) {
          setH((prevstate) =>  prevstate + 1);
          setM(0);
        }
        if (s === 60) {
          setM((prevstate) => prevstate + 1);
          setS(0);
        }
        setS((prevstate) => prevstate + 1);
      }, 1000)
    );
  };

  //for countdown
  //   const targetDate = useRef(Date.now());
  //   const pad = (value) => {
  //     return String(value).padStart(2, "0");
  //   };
  //   const getTimeComponents = (time) => {
  //     const hours = pad(
  //       Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  //     );
  //     const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  //     const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

  //     return { hours, mins, secs };
  //     };

  const stop = () => {
    setInterv(clearInterval(interv));
    setStatus(2);
  };

  const reset = () => {
    setInterv(clearInterval(interv));    
    setStatus(0);
    setS(0);
    setH(0);
    setM(0);
  };

  const resume = () => start();

  return (
    <div>
      <h2>Timer</h2>
          <span>{h < 10 ? "0" + h : h} : </span>
      <span>{m < 10 ? "0" + m : m} : </span>
      <span>{s < 10 ? "0" + s : s}</span>
<div className="ButtonContainer">
      {status === 0 && <button onClick={start}> Start</button>}
      {status === 1 && (
        <>
          <button onClick={stop} className="Button"> Stop</button>
          <button onClick={reset} className="Button"> Reset</button>
        </>
      )}
      {status === 2 && (
        <>
          <button onClick={resume} className="Button"> Resume</button>
          <button onClick={reset} className="Button"> Reset</button>
        </>
              )}
              </div>
    </div>
  );
}
