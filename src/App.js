import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Display from "./Components/Display";

function App() {
  return (
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/display" element={<Display />} />
      </Routes>

  );
}

export default App;
