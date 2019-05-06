import React from 'react';
import './App.css';
import Header from './containers/Header';
import CountdownContainer from './containers/Countdown';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <CountdownContainer />
    </div>
  );
};

export default App;
