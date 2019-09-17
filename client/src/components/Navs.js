import React from "react";
import { Navbar, Nav } from "react-bootstrap";

export default function Navs() {
  return (
    <Navbar expand="lg" bg="dark" variant="dark">
      <Navbar.Brand>
        <h1>Samuel Jackson</h1>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="/">About</Nav.Link>
          <Nav.Link href="/portfolio">Portfolio</Nav.Link>
          <Nav.Link href="https://github.com/samj7792">GitHub</Nav.Link>
          <Nav.Link href="https://www.linkedin.com/in/samuel-s-jackson/">
            Linkedin
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
