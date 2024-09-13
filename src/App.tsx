import React from "react";
import "./App.css";
import { HashRouter } from "react-router-dom";
import Labs from "./Labs";
import List1 from "./List1";

function App() {
  return (
    <HashRouter>
      <div>
        <Labs />
      </div>
    </HashRouter>
  );
}

export default App;
