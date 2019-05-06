import React, {FC} from 'react';

interface CountdownProps {
  left: number;
  reset: any;
}

const CountdownComponent: FC<CountdownProps> = ({left, reset}) => (
  <div>
    <p>number is {left}</p>
    <button onClick={reset}>RESET</button>
  </div>
);

export default CountdownComponent;
