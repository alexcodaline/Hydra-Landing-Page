import React, { useState } from "react";
import logo from "./../../img/logo/logo.webp";
import logoName from "./../../img/logo/logoName.webp";
import { ReactComponent as Icon } from "./menuIcon.svg";
import "./Header.scss";
import { Link } from "react-scroll";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <div className="header">
        <div className="container-wrapper">
          <div className="header__row">
            <div className="header-logo">
              <a href="/">
                <div className="logo">
                  <img src={logo} alt="logo" />
                </div>
                <div className="logoName">
                  <img src={logoName} alt="logo" />
                </div>
              </a>
            </div>
            <button
              id="burgerBtn"
              aria-label="Open site navigation"
              className="burgerBtn"
              onClick={() => setIsOpen(!isOpen)}
            >
              <Icon />
            </button>
            <nav className={`nav ${isOpen ? "active" : ""}`}>
              <ul className="nav__list">
                <li>
                  <Link
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    duration={700}
                    offset={-50}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    activeClass="active"
                    to="services"
                    spy={true}
                    smooth={true}
                    duration={700}
                    offset={-50}
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    activeClass="active"
                    to="techno"
                    spy={true}
                    smooth={true}
                    duration={700}
                    offset={-50}
                  >
                    Technologies
                  </Link>
                </li>
                <li>
                  <Link
                    activeClass="active"
                    to="circles"
                    spy={true}
                    smooth={true}
                    duration={700}
                    offset={-350}
                  >
                    How To
                  </Link>
                </li>
              </ul>
              <div className="header-buttons">
                <Link
                  activeClass="active"
                  to="contacts"
                  spy={true}
                  smooth={true}
                  duration={700}
                  offset={-90}
                >
                  <a href="/" className="header-buttons contacts-button">
                    Contact us
                  </a>
                </Link>
                <Link
                  to="form"
                  spy={true}
                  smooth={true}
                  duration={700}
                  offset={-5}
                >
                  <a href="/join" className="header-buttons join-button">
                    Join Hydra
                  </a>
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
