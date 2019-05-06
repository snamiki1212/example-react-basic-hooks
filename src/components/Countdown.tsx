import React, {FC} from 'react';

interface CountdownProps {
  left: string;
}

const CountdownComponent: FC<CountdownProps> = ({left}) => <time>{left}</time>;

export default CountdownComponent;
