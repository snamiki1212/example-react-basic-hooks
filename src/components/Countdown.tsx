import React, {FC} from 'react';

interface CountdownProps {
  left: number;
  resetLeft: any;
}

const CountdownComponent: FC<CountdownProps> = ({left, resetLeft}) => (
  <div>
    <p>number is {left}</p>
    <button onClick={resetLeft}>RESET</button>
  </div>
);

export default CountdownComponent;
