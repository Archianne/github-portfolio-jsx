import React, { StrictMode, Suspense, lazy } from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import Loader from "react-loader-spinner";
const App = lazy(() => import ("./App.jsx"));

const root = document.getElementById("root");

ReactDOM.render(
  <StrictMode>
    <HashRouter>
      <Suspense
        fallback={
          <div id="fallback">
            <Loader type="TailSpin" color="#00BFFF" height={80} width={80} />
          </div>
        }
      >
        <App />
      </Suspense>
    </HashRouter>
  </StrictMode>,
  root
);
