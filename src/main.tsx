import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { registerSW } from "virtual:pwa-register";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

registerSW();

const patternsForFailureToFetchResource = [
  "TypeError: Failed to fetch dynamically imported module",
  "Failed to load module script: Expected a JavaScript module script",
].map(text => new RegExp(text));

window.addEventListener("error", error => {
  const hasError = patternsForFailureToFetchResource.map(patten => patten.test(error.message)).some(value => value);
  if (hasError) {
    alert("Failed to get resource.");
  }
});