import "./App.css";

function App() {
  const handleChangeInput = () => {};

  return (
    <div className="App">
      <header className="App-header">
        <input
          className="digitInput"
          type="text"
          value="digit1"
          onChange={() => handleChangeInput()}
        />

        <button className="sumButton">Sum</button>

        <div className="sumView">
          <p>Sum Value</p>
        </div>
      </header>
    </div>
  );
}

export default App;
