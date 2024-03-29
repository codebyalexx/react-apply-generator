import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import "./lib/style.css";

const root = createRoot(document.querySelector("#root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
