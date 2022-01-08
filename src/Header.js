import React from "react";
import "./Header.css";
import contact from "./Assets/contact.png";
import instagram from "./Assets/instagram.png";
import tiktok from "./Assets/tiktok.png";
import youtube from "./Assets/youtube.png";
import godmode from "./Assets/godmode.png";
import logo from "./Assets/logo_animated.gif";
import { Container, Nav, Navbar } from "react-bootstrap";

const Header = () => {
  return (
    <div className="d-flex flex-column justify-content-between main-section">
      <div className="nav-menu d-flex justify-content-start navbar-section">
        <Navbar collapseOnSelect expand="lg" bg="black" variant="dark">
          <Container>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto"></Nav>
              <Nav>
                <Nav.Link
                  href="mailto:talha23c@hotmail.com?subject=slivermuse"
                  className="header-link"
                >
                  <img
                    loading="lazy"
                    src={contact}
                    alt="contact"
                    className="contact-link"
                  />
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <div className="d-flex flex-column align-items-center justify-content-around">
        <div className="text header d-flex justify-content-center myfont">
          sliversmuse
        </div>
        <div className="text d-flex align-items-center logo-section">
          <img loading="lazy" src={logo} alt="logo" className="logo" />
          <div className="text d-flex justify-content-center flex-column">
            <a
              href="https://www.youtube.com/channel/UCWmb-lfq3dQGAM4BbJ7VZ6A"
              className="d-flex justify-content-center"
            >
              <img
                loading="lazy"
                src={youtube}
                alt="youtube"
                className="w-50"
              />
            </a>
            <a
              href="https://www.tiktok.com/@sliversmuse?lang=en"
              className="d-flex justify-content-center"
            >
              <img loading="lazy" src={tiktok} alt="tiktok" className="w-50" />
            </a>
            <a
              href="https://www.instagram.com/sliversmuse/"
              className="d-flex justify-content-center"
            >
              <img
                loading="lazy"
                src={instagram}
                alt="instagram"
                className="w-50 p-3 pt-0 mb-5"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center w-100">
        <img loading="lazy" className="godmode" src={godmode} alt="godmode" />
      </div>
      {/* <div className="m-5">
          <p className="footer-text">drummer</p>
          <p className="footer-text">songwriter</p>
          <p className="footer-text">producer</p>
          <p className="footer-text">artist</p>
        </div> */}
    </div>
  );
};

export default Header;
