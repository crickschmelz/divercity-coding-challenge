import React from "react";
import ReactDOM from "react-dom";
import Router from "./components/Router";
import "./style.css";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
  rootElement
);
