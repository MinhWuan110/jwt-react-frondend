import Nav from "../Navigation/Nav";

const MainLayout = ({ children }) => {
  return (
    <>
      <Nav />
      <div>{children}</div>
    </>
  );
};

export default MainLayout;
