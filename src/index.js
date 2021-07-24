import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./theme/globalStyle";
import Theme from "./theme/theme"

const root = document.getElementById("root");

ReactDOM.render(
  <ThemeProvider theme={Theme}>
    <GlobalStyle />
    <App />
  </ThemeProvider>,
  root
);
