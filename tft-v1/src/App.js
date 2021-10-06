import "./App.css";
import ChampionPage from "./Components/ChampionsPage";
import TodoFeature from "./ExComponents/TodoFeature";
import { Route } from "react-router-dom";
import AlbumFeature from "./ExComponents/AlbumFeature";
function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
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
      </header> */}

      {/* Route for example */}
      <Route path="/example/todo" component={TodoFeature} />
      <Route path="/example/album" component={AlbumFeature} />
      {/* Route for/ */}
      {/* <Route path="/" component={Header} /> */}
      {/* Route for Champion Page */}
      <Route path="/db/champions" component={ChampionPage} />
    </div>
  );
}

export default App;
