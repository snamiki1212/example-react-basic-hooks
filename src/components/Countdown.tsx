import React, {FC} from 'react';

interface CountdownProps {
  left: number;
}

const CountdownComponent: FC<CountdownProps> = ({left}) => (
  <div>
    <p>{left}</p>
  </div>
);

export default CountdownComponent;
