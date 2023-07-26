import React from "react";
import NavBar from "../components/NavBar";
import { Col } from "react-bootstrap";

const Hero = () => {
  return (
    <>
      <header className="d-flex flex-column vh-100">
        <NavBar />
        <section className="hero_bg h-100">
          <div className="container">
            <div className="row">
              <Col lg={6}>
                <h1>Get Bussiness Solutions with TheFirm.</h1>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy.
                </p>
                <div><button>Get in Touch</button></div>
              </Col>
            </div>
          </div>
        </section>
      </header>
    </>
  );
};

export default Hero;
