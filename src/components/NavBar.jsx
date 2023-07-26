import React from "react";
import { Nav } from "react-bootstrap";
import nav_logo from "../assets/images/png/nav_logo.png";
const NavBar = () => {
  return (
    <>
      <Nav>
        <div className="d-flex justify-content-between w-100 container py-3 align-items-center">
          <div className="logo py-1">
            <img src={nav_logo} alt="logo" />
          </div>
          <div className="d-flex align-items-center">
            <ul className="d-flex gap-5 py-1 mb-0">
              <li>
                <a href="you.com">Home</a>
              </li>
              <li>
                <a href="you.com">Solutions</a>
              </li>
              <li>
                <a href="you.com">Cases</a>
              </li>
              <li>
                <a href="you.com">About Us</a>
              </li>
              <li>
                <a href="you.com">Blog</a>
              </li>
              <li>
                <a href="you.com">Contact Us</a>
              </li>
            </ul>
            <div className="ps-5"><button>Get in Touch</button></div>
          </div>
        </div>
      </Nav>
    </>
  );
};

export default NavBar;
