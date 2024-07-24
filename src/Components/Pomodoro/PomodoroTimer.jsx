import React, { useState, useEffect } from 'react';
import styles from './PomodoroTimer.module.css'; // Correct import for CSS module

const PomodoroTimer = () => {
  const [timerValue, setTimerValue] = useState(1500);
  const [pomodoroType, setPomodoroType] = useState('POMODORO');
  const [intervalId, setIntervalId] = useState(null);

  const TIMER_TYPE_POMODORO = 'POMODORO';
  const TIMER_TYPE_SHORT_BREAK = 'SHORTBREAK';
  const shortBreakTimerInSeconds = 100;

  const audio = new Audio('alarm.mp3');
  const totalTime = pomodoroType === TIMER_TYPE_POMODORO ? 1500 : shortBreakTimerInSeconds;
  const multiplierFactor = 360 / totalTime;

  const formatNumberInStringMinute = (number) => {
    const minutes = Math.trunc(number / 60).toString().padStart(2, '0');
    const seconds = Math.trunc(number % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
  };

  const startTimer = () => {
    const id = setInterval(() => {
      setTimerValue((prev) => {
        if (prev <= 1) {
          clearInterval(id);
          audio.play();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    setIntervalId(id);
  };

  const stopTimer = () => {
    clearInterval(intervalId);
    setIntervalId(null);
  };

  const resetTimer = () => {
    clearInterval(intervalId);
    setTimerValue(pomodoroType === TIMER_TYPE_POMODORO ? 1500 : shortBreakTimerInSeconds);
    setIntervalId(null);
  };

  const handlePomodoroTypeChange = (type) => {
    setPomodoroType(type);
    resetTimer();
  };

  useEffect(() => {
    if (timerValue === 0) return; // Don't update if timer is zero
    const progress = (totalTime - timerValue) * multiplierFactor;
    document.querySelector(`.${styles.progressBar}`).style.background = `conic-gradient(var(--blue) ${progress}deg, var(--purple) ${progress}deg)`;
  }, [timerValue, pomodoroType]);

  useEffect(() => {
    return () => clearInterval(intervalId);
  }, [intervalId]);

  return (
    <div className={styles.pomodoroTimer}>
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <h1>Pomodoro Timer</h1>
            <div className={styles.cardHeaderButtons}>
              <button
                className={pomodoroType === TIMER_TYPE_POMODORO ? styles.active : ''}
                onClick={() => handlePomodoroTypeChange(TIMER_TYPE_POMODORO)}
              >
                Pomodoro
              </button>
              <button
                className={pomodoroType === TIMER_TYPE_SHORT_BREAK ? styles.active : ''}
                onClick={() => handlePomodoroTypeChange(TIMER_TYPE_SHORT_BREAK)}
              >
                Short Break
              </button>
            </div>
          </div>
          <div className={styles.cardBody}>
            <div className={styles.progressBar}>
              <div className={styles.progressBarInner}>
                <h2>{formatNumberInStringMinute(timerValue)}</h2>
              </div>
            </div>
          </div>
          <div className={styles.cardFooter}>
            <button className={`${styles.btnSuccess} ${styles.btn}`} onClick={startTimer}>
              Start
            </button>
            <button className={`${styles.btnDanger} ${styles.btn}`} onClick={stopTimer}>
              Stop
            </button>
            <button className={styles.btn} onClick={resetTimer}>Reset</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PomodoroTimer;
