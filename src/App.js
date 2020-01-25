import React from "react";

import "./App.css";
import NavBar from "./Components/NavBar";
import routes from "./routes";
import { HashRouter } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <div className="App">
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans|Poiret+One&display=swap"
          rel="stylesheet"
        />

        <NavBar />
        <hr className="dotted" />
        {routes}
      </div>
    </HashRouter>
  );
}

export default App;
