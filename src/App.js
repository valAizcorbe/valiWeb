import React from "react";

import "./App.css";
import NavBar from "./Components/NavBar";
import routes from "./routes";
import { HashRouter } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <span className="App">
        <link
          href="https://fonts.googleapis.com/css?family=Quicksand&display=swap"
          rel="stylesheet"
        ></link>
        <link
          href="https://fonts.googleapis.com/css?family=Sacramento&display=swap"
          rel="stylesheet"
        ></link>
        <NavBar />
        {routes}
      </span>
    </HashRouter>
  );
}

export default App;
