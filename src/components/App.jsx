import React, { useState } from "react";
import NavBar from "./navbar/Navbar.jsx";
import Header from "../components/header/Header.jsx";
import CategoryList from "./categories/CategoryList.jsx";
import LatestList from "./latest/LatestProductsList.jsx";
import Footer from "./footer/Footer.jsx";

const App = () => {
  const [userData, setUserData] = useState(null);

  return (
    <body>
      <Header />
      <NavBar userData={userData} />
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
