import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Display from "./Components/Display";
import ErrorHandling from "./Components/ErrorBoundary";
import Hero from "./Components/Hero";


function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/display" element={<Display />} />
      </Routes>
      <ErrorHandling>
        <Routes>
          <Route exact path="/error" element={<Hero name="Moses" />} />
        </Routes>
      </ErrorHandling>
    </>
  );
}

export default App;
