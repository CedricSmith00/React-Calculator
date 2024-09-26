import React, { useState } from 'react';
import { evaluate } from 'mathjs';

const Calculator = () => {
  const [display, setDisplay] = useState('');

  const buttons = [
    '1', '2', '3', 'C',
    '4', '5', '6', '/',
    '7', '8', '9', '*',
    '0', '.', '+', '-',
    '=' 
  ];

  // Function to handle button click
  const handleClick = (value) => {
    if (value === 'C') {
      setDisplay(''); // Clears the display
    } else if (value === '=') {
      try {
        const result = evaluate(display); 
        setDisplay(result.toString());    // Replaces the sum with the result
      } catch (error) {
        setDisplay('Error');              // Show error if the sum is invalid
      }
    } else {
      setDisplay(display + value);
    }
  };

  return (
    <div className="calculator">
      <div className="display">
        <input type="text" value={display} readOnly /> {}
      </div>
      <div className="buttons">
        {buttons.map((button, index) => (
          <button key={index} onClick={() => handleClick(button)}>
            {button}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calculator;
