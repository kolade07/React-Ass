import React, { useState } from 'react';
import './App.css'


const App = () => {
  const [count, setCount] = useState(0)

  const increment = () => {
      setCount(count + 1)
  }

  const decrement = () => {
    setCount(count - 1)
  }

  const reset = () => {
    setCount(0)
  }

  return (
    <div className="App">
      <div>
         <p id='counter-value'>{count}</p>

         <button id='increase-button' onClick={increment}>Increment</button>
         <button id='decrease-button' onClick={decrement}>Decrement</button>
         <button id='reset-button' onClick={reset}>Reset</button>
      </div>
    </div>          
  )
}

export default App;
