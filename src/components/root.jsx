import React from "react";
import Home from "./App.jsx";
import { BrowserRouter, Route, Switch, Routes } from "react-router-dom";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" component={Home} />
      </Routes>
    </BrowserRouter>
  );
}
