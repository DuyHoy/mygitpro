import logo from "./logo.svg";
import "./App.css";
import ExampleComp from "./ExComponent";
import { Route } from "react-router";

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
      {/* Route for example */}
      {/* <Route path="/example" component={ExampleComp} /> */}
    </div>
  );
}

export default App;
