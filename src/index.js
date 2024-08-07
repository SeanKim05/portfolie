import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./Router";
import "./styles/reset.scss";
import "./styles/common.scss";
import { NavContextProvider } from "./context/nav-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <NavContextProvider>
    <Router />
  </NavContextProvider>
);
