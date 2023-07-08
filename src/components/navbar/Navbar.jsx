import React from "react";

// Agregamos ReactBoosTrap para Navbar

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

//Agregando el CartWidget
import { CardWidget } from "../cardwidget/CardWidget";

import "./navbar.css";

export const NavbarBar = () => {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container className="navbar-container">
          <Navbar.Brand href="#home" className="navbar-brand-titulo">Erland EPP</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">Inicio</Nav.Link>
              <Nav.Link href="#about">Nosotros</Nav.Link>

              <Nav.Link href="#contact">Contactanos</Nav.Link>

              <NavDropdown title="Products" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  Proteccion auditiva
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Proteccion de cabeza
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Protección de manos
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Ofertas</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>

          <CardWidget />
        </Container>
      </Navbar>
    </div>
  );
};
