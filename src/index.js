import { StrictMode } from "react";
import ReactDOM from "react-dom";

import Navigation from "./Navigation";
import App from "./App";
import Footer from "./Footer";

import "./styles.css";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <StrictMode>
    <Navigation />
  </StrictMode>,
  rootElement
);
