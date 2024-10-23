import React from "react";
import Nav from "react-bootstrap/Nav";
import "./Nav.css"
const Navigation = () => {
  return (
    <>
      <Nav className="justify-content-center topnav" >
        <Nav.Item>
          <img
            className="img-thumbnail mx-auto d-block mb-2"
            src={`${process.env.PUBLIC_URL}/assets/images/logo.png`}
            alt="logo"
          />
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/news">News </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/user">User </Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
};

export default Navigation;