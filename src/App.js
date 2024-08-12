import React, { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(0);

  // Added function for the sum of values
  const add = (values) => {
    if (values === "") {
      return 0;
    }

    let delimiter = /,|\n/;
    const negativeNumbers = [];

    if (values.startsWith("//")) {
      const deliCompare = values.match(/\/\/(.)\n/);
      if (deliCompare) {
        delimiter = new RegExp(deliCompare[1]);
        values = values.substring(4);
      }
    }

    const sumArray = values.split(delimiter);
    let sum = 0;

    for (const number of sumArray) {
      const parsedNumber = parseInt(number);
      if (isNaN(parsedNumber)) {
        console.log(isNaN(parsedNumber));
        throw new Error("Invalid number");
      }

      if (parsedNumber < 0) {
        negativeNumbers.push(parsedNumber);
      } else {
        sum += parsedNumber;
      }
    }

    if (negativeNumbers.length > 0) {
      throw new Error(
        `Negative numbers not allowed: ${negativeNumbers.join(", ")}`
      );
    }

    return sum;
  };

  // handle input change
  const handleChangeInput = (event) => {
    setInput(event.target.value);
  };

  const handleCalculate = () => {
    try {
      const sum = add(input);
      setResult(sum);
    } catch (error) {
      setResult(error.message);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <textarea
          className="digitInput"
          type="text"
          value={input}
          onChange={handleChangeInput}
        />

        <button className="sumButton" onClick={handleCalculate}>
          Sum
        </button>

        {result > 0 ? (
          <div className="sumView">Result: {result}</div>
        ) : (
          <div>
            {result.startsWith("Negative numbers") && (
              <div className="error-message">
                Negative numbers are not allowed.
              </div>
            )}
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
