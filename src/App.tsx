import React from 'react';
import './App.css';
import Header from './containers/Header';
import CountdownContainer from './containers/Countdown';
import Footer from './containers/Footer';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <CountdownContainer />
      <Footer />
    </div>
  );
};

export default App;
