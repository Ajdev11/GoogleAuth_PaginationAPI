import React from "react";
import ReactDom from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./ErrorBoundary";

const container = document.getElementById("root");
const root = ReactDom.createRoot(container);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
