import React from "react";
import "./styles/Mobile.css";
import Home from "./Components/Home";
import { Routes, Route } from "react-router-dom";
import Display from "./Display";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/" element={<Display />} />
        <Route exact path="/" element={<h1>Page not found..</h1>} />
      </Routes>
    </div>
  );
}

export default App;
