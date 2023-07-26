import React from "react";
import { useState } from "react";
import { Nav } from "react-bootstrap";
import nav_logo from "../assets/images/png/nav_logo.png";
import { HiMenuAlt1 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
const NavBar = () => {
  const [show, setshow] = useState(true);
  function showNav() {
    setshow(!show);
  }
  if (!show) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }
  return (
    <>
      <Nav>
        <div className="d-flex justify-content-between w-100 container py-3 align-items-center bg_white">
          <div className="logo py-1">
            <img src={nav_logo} alt="logo" />
          </div>
          <div className="d-xl-flex align-items-center d-none d-xl-block">
            <ul className="d-xl-flex gap-5 py-1 mb-0 d-none d-xl-block">
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
            <div className="ps-5">
              <button className="nav_btn ff_Nunito fs_lg fw-bold txt_white bg_yellow border-0">
                Get in Touch
              </button>
            </div>
          </div>

          <div
            className="d-flex justify-content-between flex-column d-xl-none z_index_100"
            onClick={showNav}
          >
            <h2 className="fs_4xl position-relative txt_yellow">
              {show ? <HiMenuAlt1 /> : <AiOutlineClose />}
            </h2>
          </div>

          <div
            className={`d-flex gap-4 mb-0 sm_nav mb-0 ps-0 d-xl-none ${
              show ? "" : "start-0"
            }`}
          >
            <ul className="d-flex gap-5 py-1 mb-0 flex-column align-items-center ps-0">
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
            <div className="pt-4">
              <button className="nav_btn ff_Nunito fs_lg fw-bold txt_white bg_yellow border-0">
                Get in Touch
              </button>
            </div>
          </div>
        </div>
      </Nav>
    </>
  );
};

export default NavBar;
