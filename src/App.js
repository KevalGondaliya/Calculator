import "./App.css";

function App() {
  
  // Added function for the sum of values
  const add = (values) => {
    console.log({ values });

    if (values === "") {
      return 0;
    }

    const sumArray = values?.split(/,|\n/);

    console.log({ sumArray });

    let sum = 0;

    for (const number of sumArray) {
      sum += parseInt(number);
    }

    console.log({ sum });

    return sum;
  };

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
