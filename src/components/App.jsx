import React from "react";
import Link from "next/link";
import NavBar from "./navbar/Navbar";
import Header from "../components/header/Header";
import CategoryList from "./categories/CategoryList";
import LatestList from "./latest/LatestProductsList";
import Footer from "./footer/Footer";

const App = () => {
  return (
    <body>
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
