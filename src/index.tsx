import Container from "container";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "ress";
import "./styles/index.scss";
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Container />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
