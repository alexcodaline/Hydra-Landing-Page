import React, { useState } from "react";
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
              <a href="/">
                <div className="logo">
                  <img src={logo} alt="logo" />
                </div>
                <div className="logoName">
                  <img src={logoName} alt="logo" />
                </div>
              </a>
            </div>
            <button className="burgerBtn" onClick={() => setIsOpen(!isOpen)}>
              <Icon />
            </button>
            <nav className={`nav ${isOpen ? "active" : ""}`}>
              <ul className="nav__list">
                <li>
                  <a href="/about">About</a>
                </li>
                <li>
                  <a href="/services">Services</a>
                </li>
                <li>
                  <a href="/technologies">Technologies</a>
                </li>
                <li>
                  <a href="/how-to">How to</a>
                </li>
              </ul>
              <div className="header-buttons">
                <a href="/" className="header-buttons contacts-button">
                  Contact us
                </a>
                <a href="/join" className="header-buttons join-button">
                  Join Hydra
                </a>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
