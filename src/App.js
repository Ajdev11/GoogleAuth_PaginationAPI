import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Aboutme from "./Components/Aboutme";
import Display from "./Components/Display";
import ErrorBoundary from "./Components/ErrorBoundary";
import Hero from "./Components/Hero";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Aboutme" element={<Aboutme />} />
        <Route exact path="/display" element={<Display />} />
      </Routes>
      <ErrorBoundary>
        <Routes>
          <Route exact path="/error" element={<Hero name="Moses" />} />
        </Routes>
      </ErrorBoundary>
    </>
  );
}

export default App;
