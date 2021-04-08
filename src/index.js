import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "@material-ui/styles";
import { CssBaseline } from "@material-ui/core";

import Themes from "./themes";
import App from "./components/App";
import reportWebVitals from './reportWebVitals';
import { LayoutProvider } from "./context/LayoutContext/LayoutContext";


ReactDOM.render(
  <LayoutProvider>
    <ThemeProvider theme={Themes.default}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </LayoutProvider>,
  document.getElementById("root"),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
