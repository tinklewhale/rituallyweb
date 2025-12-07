import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// Debug code for production issues
window.onerror = function(msg, url, line, col, error) {
  const div = document.createElement('div');
  div.style.position = 'fixed';
  div.style.top = '0';
  div.style.left = '0';
  div.style.width = '100%';
  div.style.backgroundColor = 'red';
  div.style.color = 'white';
  div.style.zIndex = '9999';
  div.style.padding = '20px';
  div.innerHTML = `<h1>Global Error</h1><p>${msg}</p><p>${url}:${line}:${col}</p><p>${error?.stack}</p>`;
  document.body.appendChild(div);
};

const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Root element not found");
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
