import React, {FC} from 'react';
import {PRIMARY_COLOR} from '../consists';

const Footer: FC = (): any => {
  return (
    <div
      style={{
        backgroundColor: PRIMARY_COLOR,
        width: '100%',
        position: 'absolute',
        bottom: 0,
      }}
    >
      <span>This app is created with React and Hooks.</span>
    </div>
  );
};

export default Footer;
