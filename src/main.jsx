import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
if ('serviceWorker' in navigator && import.meta.env.PROD) {
  if (location.hostname !== 'albertgsmu.github.io') {
    navigator.serviceWorker.register('/service-worker.js')
  }
}
