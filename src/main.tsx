import "./index.css";
import "react-toastify/dist/ReactToastify.css";
// @deno-types="@types/react"
import { StrictMode } from "react";
import { ToastContainer } from "react-toastify";
// @deno-types="@types/react-dom/client"
import { createRoot } from "react-dom/client";
import App from "./components/root.jsx";

createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <App store={{}} />
    <ToastContainer />
  </StrictMode>
);
