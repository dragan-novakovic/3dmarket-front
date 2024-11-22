import React from "react";
import Header from "../../components/header/Header";
import NavBar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import LoginForm from "../../components/Forms/LoginForm";
import RegisterForm from "../../components/Forms/RegisterForm";

export default function Login_or_Register() {
  // NavBar with login details
  // Register or Login view

  return (
    <body>
      <Header />
      <NavBar />
      <RegisterForm />
      {/* <LoginForm /> */}
      <Footer />
    </body>
  );
}
