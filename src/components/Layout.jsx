import Header from "./header/Header.jsx";
import NavBar from "./navbar/Navbar.jsx";
import Footer from "./footer/Footer.jsx";

export default function Layout(props) {
  return (
    <>
      <Header />
      <NavBar />
      {props.children}
      <Footer />
    </>
  );
}
