import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./App.jsx";
import RegisterPage from "../components/Forms/RegisterForm/index.jsx";
import LoginPage from "../components/Forms/LoginForm/index.jsx";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}
