export default function Layout(props) {
  return (
    <>
      <Header />
      <NavBar />
      {...props.children}
      <Footer />
    </>
  );
}
