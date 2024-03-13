import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('');

  useEffect(() => {
    const nameToDisplay = 'i am vivek';
    let index = 0;

    const interval = setInterval(() => {
      if (index <= nameToDisplay.length) {
        setName(nameToDisplay.substring(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 300); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="centered">
      <header>
        {name}
      </header>
    </div>
  );
}

export default App;
