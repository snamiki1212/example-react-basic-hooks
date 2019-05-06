import React, {FC} from 'react';

interface CountdownButtonProps {
  buttonType: string;
  onClick: () => any;
  active?: boolean;
}
const CountdownButton: FC<CountdownButtonProps> = ({
  buttonType,
  onClick,
  active,
}: any) => {
  return <button onClick={onClick}>{buttonType}</button>;
};

export default CountdownButton;
