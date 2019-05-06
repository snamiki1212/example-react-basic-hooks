import React, {FC} from 'react';

interface CountdownButtonProps {
  buttonType: string;
  onClick: () => any;
}
const CountdownButton: FC<CountdownButtonProps> = ({
  buttonType,
  onClick,
}: any) => {
  return <button onClick={onClick}>{buttonType}</button>;
};

export default CountdownButton;
