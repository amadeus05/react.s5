import App from "./App";
import React from "react";
import "./main.css";
import ReactDOM from "react-dom";

console.log(`I'm a silly entry point`);
const arr = [1, 2, 3];
const iAmJavascriptES6 = () => console.log(...arr);
window.iAmJavascriptES6 = iAmJavascriptES6;

ReactDOM.render(<App />, document.getElementById("app"));