import React, { useState } from "react";
import { Link } from "react-scroll";
import logo from "./../../img/logo/logo.webp";
import logoName from "./../../img/logo/logoName.webp";
import { ReactComponent as Icon } from "./menuIcon.svg";
import "./Header.scss";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <div className="header">
        <div className="container-wrapper">
          <div className="header__row">
            <div className="header-logo">
              <Link
              to="/"
              spy={true}
              smooth={true}
              duration={700}
              offset={-50} 
              >
                <div className="logo">
                  <img src={logo} alt="logo" />
                </div>
                <div className="logoName">
                  <img src={logoName} alt="logo" />
                </div>
                </Link>
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
                    to="how_to"
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
                  <span className="header-buttons contacts-button">
                    Contact us
                  </span>
                </Link>
                <Link
                  to="form"
                  spy={true}
                  smooth={true}
                  duration={700}
                  offset={-5}
                >
                  <span className="header-buttons join-button">Join Hydra</span>
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
