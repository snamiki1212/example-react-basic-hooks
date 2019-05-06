import React, {useEffect, useState} from 'react';
import './App.css';

const App: React.FC = () => {
  const TIMER = 5;
  const [left, setLeft] = useState(TIMER);

  const setCountdown = () => setInterval(() => setLeft(prev => prev - 1), 1000);
  const afterTimeup = (left: number) => {
    if (left <= 0) {
      alert('FINISHED');
      setLeft(prev => TIMER);
    }
  };

  useEffect(() => {
    setCountdown();
  }, []);

  return (
    <div className="App">
      {left}
      {afterTimeup(left)}
    </div>
  );
};

export default App;
