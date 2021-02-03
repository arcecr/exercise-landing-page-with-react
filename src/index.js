import React from "react";
import ReactDOM from "react-dom";

// Include bootstrap NPM Library into the bundle
import "bootstrap";

// Include your index.scss file into the bundle
import "./styles/index.scss";

// Import App component
import App from "./containers/App";

// Render your react application
ReactDOM.render(<App />, document.querySelector("#app"));
