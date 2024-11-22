import React from "react";
import Link from "next/link";
import NavBar from "./navbar/Navbar";
import Header from "../components/header/Header";
import CategoryList from "./categories/CategoryList";
import LatestList from "./latest/LatestProductsList";
import Footer from "./footer/Footer";
import { useUserStore } from "@/providers/UserContext";

const App = () => {
  const { email, accessToken, login } = useUserStore((state) => state);
  return (
    <body>
      <h1>{email}</h1>
      <div onClick={() => void login()}>XXXXX</div>
      <div onClick={login}>XXXXX</div>
      <Header />
      <NavBar />
      {/* Banner */}
      {/* Banner Boxes */}
      <CategoryList />
      <LatestList />
      {/* ADDS */}
      {/* <div class="container pb-16">
        <a href="#">
          <img src="assets/images/offer.jpg" alt="ads" class="w-full" />
        </a>
      </div> */}

      <Footer />
    </body>
  );
};

export default App;
