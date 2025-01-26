import React, { useState, useEffect } from "react";
import "./PomodoroTimer.css";

const PomodoroTimer = () => {
  const [minutes, setMinutes] = useState(25); // Initial minutes
  const [seconds, setSeconds] = useState(0); // Initial seconds
  const [isRunning, setIsRunning] = useState(false); // Timer state
  const [intervalId, setIntervalId] = useState(null); // Interval ID

  const bells = new Audio("./sounds/bell.wav"); // Notification sound

  // Function to start the timer
  const startTimer = () => {
    if (isRunning) {
      alert("Session has already started");
      return;
    }

    setIsRunning(true);
    let totalSeconds = minutes * 60 + seconds;

    const timer = setInterval(() => {
      totalSeconds--;

      const newMinutes = Math.floor(totalSeconds / 60);
      const newSeconds = totalSeconds % 60;

      setMinutes(newMinutes);
      setSeconds(newSeconds);

      if (totalSeconds <= 0) {
        clearInterval(timer);
        bells.play();
        setIsRunning(false);
      }
    }, 1000);

    setIntervalId(timer);
  };

  // Function to stop the timer
  const stopTimer = () => {
    clearInterval(intervalId);
    setIsRunning(false);
  };

  // Function to reset the timer
  const resetTimer = () => {
    clearInterval(intervalId);
    setMinutes(25);
    setSeconds(0);
    setIsRunning(false);
  };

  return (
    <div className="app-container">
      <h1>Pomodoro Timer</h1>
      <p className="app-message">Press start to begin</p>
      <div className="app-circle">
        <div className="app-counter-box">
          <p>
            <span className="minutes">
              {minutes.toString().padStart(2, "0")}
            </span>
            :
            <span className="seconds">
              {seconds.toString().padStart(2, "0")}
            </span>
          </p>
        </div>
        <button className="start-button" onClick={startTimer}>
          START
        </button>
        <button className="stop-button" onClick={stopTimer}>
          STOP
        </button>
        <button className="reset-button" onClick={resetTimer}>
          RESET
        </button>
      </div>
    </div>
  );
};

export default PomodoroTimer;
