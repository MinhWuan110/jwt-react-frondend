import Nav from "../Navigation/Nav";
import Footer from "../footer/Footer"
const MainLayout = ({ children }) => {
  return (
    <>
      <Nav />
      <div>{children}</div>
      <Footer/>

    </>
  );
};

export default MainLayout;
