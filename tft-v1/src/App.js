import "./App.css";
import ChampionPage from "./Components/ChampionsPage";
import TodoFeature from "./ExComponents/TodoFeature";
import { Route } from "react-router-dom";
import AlbumFeature from "./ExComponents/AlbumFeature";
import Header from "./Components/Header"
import HeaderV2 from "./Components/HeaderV2";
import TeamCompPage from "./Components/TeamcompsPage";
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
      <Route path="/champions" component={ChampionPage} />

      <Route path="/header" component={Header} />
      <Route path="/headerV2" component={HeaderV2} />
      <Route path="/teamcomppage" component={TeamCompPage}/>

    </div>
  );
}

export default App;
