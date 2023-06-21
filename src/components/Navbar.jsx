import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <div className="logo">
            <Link to="/" style={{ textDecoration: "none" }}>
              <Navbar.Brand href="#home">Money Manager</Navbar.Brand>
            </Link>
          </div>
          <div className="content">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <NavDropdown title="Categoris" id="basic-nav-dropdown">
                  <Link to="/weekly" style={{ textDecoration: "none" }}>
                    <NavDropdown.Item href="#action/3.1">
                      Weekly
                    </NavDropdown.Item>
                  </Link>
                  <Link to="/monthly" style={{ textDecoration: "none" }}>
                    <NavDropdown.Item href="#action/3.2">
                      Monthly
                    </NavDropdown.Item>
                  </Link>
                  <Link to="/yearly" style={{ textDecoration: "none" }}>
                    <NavDropdown.Item href="#action/3.3">
                      Yearly
                    </NavDropdown.Item>
                  </Link>
                </NavDropdown>
           
              </Nav>
            </Navbar.Collapse>
          </div>
        </Container>
      </Navbar>
    </>
  );
}
