import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Display from "./Components/Display";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./ErrorBoundary";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/display" element={<Display />} />
        <Route exact path="/" element={<h1>Page not found..</h1>} />
      </Routes>
    </div>
  );
}

export default App;
