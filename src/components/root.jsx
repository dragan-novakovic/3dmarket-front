import React from "react";
import Home from "./App.jsx";
import LoginPage from "../pages/login/index.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index exact path="/" element={<Home />} />
        <Route path="login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}
