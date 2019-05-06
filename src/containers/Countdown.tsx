import React, {FC, useEffect, useState} from 'react';
import CountdownComponent from '../components/Countdown';

const useCountdown = (limit: number): [number, any] => {
  const [left, setLeft] = useState(limit);

  const setCountdown = () =>
    setInterval(() => {
      setLeft(prev => prev - 1);
    }, 1000);

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

  return [left, resetLeft];
};

const CountdownContainer: FC = () => {
  const TIMER = 4;
  const [left, resetLeft] = useCountdown(TIMER);
  return <CountdownComponent left={left} resetLeft={resetLeft} />;
};

export default CountdownContainer;
