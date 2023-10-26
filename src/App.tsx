import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Counter} from "./components/Counter";

function App() {
  const [count, setCount] = useState(0);

  const  minCount = 0
  const  maxCount = 5

  const increaseCount = () => {
    if(count < maxCount) {
    setCount(count + 1);
  }
  }

  const resetCount = () => {
    setCount(minCount);
  }



  return (
    <div className="App">
      <Counter
          // count={count}
          // increaseCount={increaseCount}
          // resetCount={resetCount}
      />
    </div>
  );
}

export default App;
