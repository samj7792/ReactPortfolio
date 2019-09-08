import React from "react";
import { Navbar, Nav } from "react-bootstrap";

export default function Navs() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand><h1>Samuel Jackson</h1></Navbar.Brand>
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="/home">About</Nav.Link>
          <Nav.Link href="/portfolio">
            Portfolio
          </Nav.Link>
          <Nav.Link href="https://github.com/samj7792">GitHub</Nav.Link>
          <Nav.Link href="https://www.linkedin.com/in/samuel-jackson-5634ab179/">LinkedIn</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}