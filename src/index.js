import React from "react";
import ReactDom from 'react-dom/client'
import App from "./App";
import "./App.scss";

const el = document.getElementById("app");

ReactDom.createRoot(el).render(<App />);