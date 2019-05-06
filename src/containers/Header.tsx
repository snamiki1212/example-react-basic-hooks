import React, {FC} from 'react';
import {APP_NAME, REPOSITORY_URL, PRIMARY_COLOR} from '../consists';

const Header: FC = (): any => {
  return (
    <div
      style={{
        backgroundColor: PRIMARY_COLOR,
        height: '30px',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
      }}
    >
      <span>{APP_NAME}</span>
      <a href={REPOSITORY_URL}>Github</a>
    </div>
  );
};

export default Header;
