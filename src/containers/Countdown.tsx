import React, {FC, useEffect, useState} from 'react';
import CountdownComponent from '../components/Countdown';
import CountdownStop from '../components/CountdownStop';

const useCountdown = (limit: number): [number, any] => {
  const [left, setLeft] = useState(limit);
  const [timerObj, setTimerObj]: any = useState('');

  const setCountdown = () =>
    setTimerObj(() =>
      setInterval(() => {
        setLeft(prev => prev - 1);
      }, 1000)
    );

  const afterTimeup = (left: any): any => {
    if (left <= 0) {
      alert('FINISHED');
      setLeft(prev => limit);
    }
  };

  const resetLeft = () => setLeft(limit);

  useEffect(() => {
    setCountdown();
  }, []);

  useEffect(() => {
    afterTimeup(left);
  }, [left]);

  const handleStop = () => clearInterval(timerObj);

  const restart = () => {
    clearInterval(timerObj);
    setCountdown();
  };

  return [left, [resetLeft, handleStop, restart]];
};

const CountdownContainer: FC = () => {
  const TIMER = 4;
  const [left, [resetLeft, handleStop, restart]] = useCountdown(TIMER);

  return (
    <>
      <CountdownComponent left={left} resetLeft={resetLeft} />
      <button onClick={restart}>START</button>
      <CountdownStop onClick={handleStop} />
    </>
  );
};

export default CountdownContainer;
