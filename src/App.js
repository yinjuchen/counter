import { useState } from 'react';
import './App.css';

function App() {
  // useState to setCount starting at 0 
  const [count, setCount] = useState(0)
  // onClickHandler to increament count
  const onClickHandler = () => {
    setCount(count + 1)
  }
  return (
    <div className="App">
      <button onClick={onClickHandler}>Count:{count}
      </button>
    </div>
  );
}

export default App;
