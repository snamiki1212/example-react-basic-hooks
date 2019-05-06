import React from 'react';
import './App.css';
import CountdownContainer from './containers/Countdown';

const App: React.FC = () => {
  return (
    <div className="App">
      <CountdownContainer />
    </div>
  );
};

export default App;
