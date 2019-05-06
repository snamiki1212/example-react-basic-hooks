import React, {FC, useEffect, useState} from 'react';
import CountdownComponent from '../components/Countdown';
import Button from '@material-ui/core/Button';

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

  const reset = () => {
    if (window.confirm('RESET TIMER?')) {
      setLeft(limit);
    }
  };

  const stop = () => {
    setActive(false);
    clearInterval(timerObj);
  };

  const start = () => {
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

  return [[left, active], [reset, stop, start]];
};

const CountdownContainer: FC = () => {
  const TIMER = 4;
  const [[left, active], [reset, stop, start]] = useCountdown(TIMER);

  return (
    <>
      <CountdownComponent left={left} />
      <Button onClick={start} disabled={active} color="primary">
        START
      </Button>
      <Button onClick={stop} disabled={!active} color="primary">
        STOP
      </Button>
      <Button onClick={reset} color="secondary">
        RESET
      </Button>
    </>
  );
};

export default CountdownContainer;
