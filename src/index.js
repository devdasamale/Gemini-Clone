import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./Global.css";
import ContextProvider from "./context/Context.jsx";

ReactDOM.createRoot(document.querySelector("#root")).render(
  <ContextProvider>
    <App />
  </ContextProvider>
);
