import logo from './logo.svg';
import './App.css';
import Keypad from './Keypad';
import { useState } from 'react';

function App() {
  const [inputs, setInputs] = useState('');
  const handleClick = (value) => {
    setInputs(inputs + value);
  };
  const handleEqual = () => {
    setInputs(eval(inputs).toString());
  };
  const handleClear = () => {
    setInputs("");
  };
  return (
    <div className='App'>
      <div className='calc'>
        <input className='display' type="text" value={inputs} readOnly />

        <Keypad
          handleClear={handleClear}
          handleClick={handleClick}
          handleEqual={handleEqual}
        />
      </div>

    </div>

  );
}

export default App;
