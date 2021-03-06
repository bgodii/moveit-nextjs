import { useState, useEffect } from "react";
import styles from "../styles/components/Countdown.module.css";
import { AiFillCheckCircle } from 'react-icons/ai';

let countDownTimeout: NodeJS.Timeout;

export function Countdown() {
  const [time, setTime] = useState(0.1 * 60);
  const [isActive, setActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, "0").split("");
  const [secondLeft, secondRight] = String(seconds).padStart(2, "0").split("");

  function startcountDown() {
    setActive(true);
  }

  function resetCountdown() {
    clearTimeout(countDownTimeout);
    setActive(false);
    setTime(0.1 * 60);
  }

  useEffect(() => {
    if (isActive && time > 0) {
      countDownTimeout = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    } else if (isActive && time === 0) {
      setHasFinished(true);
      setActive(false);
    }
  }, [isActive, time]);

  return (
    <div>
      <div className={styles.countdownContainer}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>

      {hasFinished ? (
        <button disabled className={styles.startCountdownButton}>
          Ciclo encerrado  <AiFillCheckCircle style={{color: '#4cd62b', marginLeft: '5px'}}/>
        </button>
      ) : (
        <>
          {isActive ? (
            <button
              onClick={resetCountdown}
              type="button"
              className={`${styles.startCountdownButton} ${styles.countdownButtonActive}`}
            >
              Abandonar Ciclo
            </button>
          ) : (
            <button
              onClick={startcountDown}
              type="button"
              className={styles.startCountdownButton}
            >
              Iniciar um Ciclo
            </button>
          )}
        </>
      )}
    </div>
  );
}
