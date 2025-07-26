import { Nav, Navbar } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/logo.png";
import BI from "../assets/bi.png";
import ojk from "../assets/ojk.png";
import JunoLoginButton from "./JunoLoginButton";

export default function NavComponentsAdmin() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
  }, [darkMode]);

  return (
    <Navbar
      expand="lg"
      id="nav"
      className={`border-bottom shadow-sm ${darkMode ? "bg-dark" : "bg-white"}`}
      style={{ borderColor: "#3B82F6" }}
    >
      <Navbar.Brand
        as={Link}
        to="/"
        className={`d-flex align-items-center ${
          darkMode ? "text-white" : "text-dark"
        }`}
      >
        <img src={Logo} alt="Logo" height="60" className="me-2" />
        <span className="fw-semibold">DigiForensicAI</span>
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto gap-4">
          <Nav.Link
            as={NavLink}
            to="/"
            className={({ isActive }) =>
              `${darkMode ? "text-light" : "text-dark"} ${
                isActive ? "fw-bold text-primary" : ""
              }`
            }
          >
          </Nav.Link>
          <Nav.Link
            as={NavLink}
            to="/feature"
            className={({ isActive }) =>
              `${darkMode ? "text-light" : "text-dark"} ${
                isActive ? "fw-bold text-primary" : ""
              }`
            }
          >
          </Nav.Link>
          <Nav.Link
            as={NavLink}
            to="/kontak"
            className={({ isActive }) =>
              `${darkMode ? "text-light" : "text-dark"} ${
                isActive ? "fw-bold text-primary" : ""
              }`
            }
          >
          </Nav.Link>
          <Nav.Link
            as={NavLink}
            to="/faq"
            className={({ isActive }) =>
              `${darkMode ? "text-light" : "text-dark"} ${
                isActive ? "fw-bold text-primary" : ""
              }`
            }
          >
          </Nav.Link>
        </Nav>

        <div className="d-flex align-items-center gap-3">
          <JunoLoginButton />
          {/* <img src={BI} alt="App Icon" width="160" height="51" />
          <img
            src={ojk}
            alt="Dark Mode"
            width="160"
            height="51"
            role="button"
          /> */}
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
}
