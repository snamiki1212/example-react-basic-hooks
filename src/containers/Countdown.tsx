import React, {FC, useEffect, useState} from 'react';
import CountdownComponent from '../components/Countdown';
import CountdownStop from '../components/CountdownStop';

const useCountdown = (limit: number): any => {
  const [left, setLeft]: [number, any] = useState(limit);
  let [timerObj, setTimerObj]: any = useState('');
  const [active, setActive]: [boolean, any] = useState(false);

  const setCountdown = () => {
    if (!active) {
      setTimerObj(
        setInterval(() => {
          setLeft((prev: number) => prev - 1);
        }, 1000)
      );
    }
  };

  const afterTimeup = (left: any): any => {
    if (left <= 0) {
      alert('FINISHED');
      setLeft(() => limit);
    }
  };

  const resetLeft = () => setLeft(limit);

  const handleStop = () => {
    setActive(false);
    clearInterval(timerObj);
  };

  const restart = () => {
    if (!active) {
      clearInterval(timerObj);
      setCountdown();
      setActive(true);
    }
  };

  useEffect(() => {
    setCountdown();
    setActive(true);
  }, []);

  useEffect(() => {
    afterTimeup(left);
  }, [left]);

  return [[left, active], [resetLeft, handleStop, restart]];
};

const CountdownContainer: FC = () => {
  const TIMER = 4;
  const [[left, active], [resetLeft, handleStop, restart]] = useCountdown(
    TIMER
  );

  return (
    <>
      <CountdownComponent left={left} resetLeft={resetLeft} />
      <button onClick={restart}>START</button>
      <CountdownStop onClick={handleStop} />
    </>
  );
};

export default CountdownContainer;
