import React, { useState } from "react";
import "./App.css";

function App() {
  const [inputVal, setInputVal] = useState("");
  const [result, setResult] = useState(0);
  const defaultDelimiter = /,|\n/;

  // Function to calculate the sum of numbers in the input string
  const add = (values, delimiter = defaultDelimiter) => {
    if (values === "") {
      return 0;
    }

    if (values.startsWith("//")) {
      const match = values.match(/\/\/(.)\n/);
      if (match) {
        delimiter = new RegExp(match[1]);
        values = values.substring(4);
      }
    }

    // Split the input string based on the delimiter
    const numbers = values.split(delimiter);

    // Calculate the sum, handling invalid numbers and negative numbers
    let sum = 0;
    for (const numberStr of numbers) {
      const number = parseInt(numberStr);
      if (isNaN(number)) {
        return "Invalid number";
      }
      if (number < 0) {
        return "Negative numbers not allowed";
      }
      sum += number;
    }

    return sum;
  };

  // Handle Input change
  const handleChangeInput = (event) => {
    setInputVal(event.target.value);
  };

  // Calculate the sum of value entered in the input
  const handleCalculate = () => {
    const sum = add(inputVal);
    setResult(sum);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>calculator</h1>
        <textarea
          className="digitInput"
          type="text"
          value={inputVal}
          onChange={handleChangeInput}
        />

        <button className="sumButton" onClick={handleCalculate}>
          Sum
        </button>

        <div className="sumView">
          {result !== 0 && result === "Invalid number" ? (
            <div className="error-message">Invalid number entered!</div>
          ) : result === "Negative numbers not allowed" ? (
            <div className="error-message">Negative numbers not allowed.</div>
          ) : (
            <div className="total">{result >= 0 && `Result: ${result}`}</div>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
