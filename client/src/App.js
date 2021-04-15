import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <button type="button" onClick={() => {
        fetch('/api/data')
        .then(function(res) {
          return res.json();
        })
        .then(function(data) {
          console.log(data);
        });
      }}>get data</button>
    </div>
  );
}

export default App;
