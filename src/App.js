import "./App.css";

function App() {
  // Added function for the sum of values
  const add = (values) => {
    if (values === "") {
      return 0;
    }
    const sumArray = values?.split(/,|\n/);

    let sum = 0;

    for (const number of sumArray) {
      sum += parseInt(number);
    }
    return sum;
  };

  // handle input change
  const handleChangeInput = () => {};

  add();
  return (
    <div className="App">
      <header className="App-header">
        <input
          className="digitInput"
          type="text"
          value="digit1"
          onChange={() => handleChangeInput()}
        />

        <button className="sumButton" onClick={() => {}}>
          Sum
        </button>

        <div className="sumView">
          <p>Sum Value</p>
        </div>
      </header>
    </div>
  );
}

export default App;
