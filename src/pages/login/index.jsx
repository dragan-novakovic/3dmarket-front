import React from "react";
import Header from "../../components/header/Header";
import NavBar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import LoginForm from "../../components/Forms/LoginForm";

export default function Login_or_Register() {
  return (
    <body>
      <Header />
      <NavBar />
      <LoginForm />
      <Footer />
    </body>
  );
}
