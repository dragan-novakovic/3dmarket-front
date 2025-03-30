import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./App.jsx";
import RegisterPage from "../components/Forms/RegisterForm/index.jsx";
import LoginPage from "../components/Forms/LoginForm/index.jsx";
import ProductPage from "../pages/product/index.jsx";
import Layout from "./Layout.jsx";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route index element={<Home />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route
          path="product"
          element={
            <Layout>
              <ProductPage />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
