import React from "react";
import { Link } from "react-scroll";
import "./Footer.scss";
import footerLogo from "./../../img/logo/footerLogo.webp";
import footerLine from "./../../img/lines/footerLine.webp";
import facebook from "./../../img/socials/facebook.webp";
import twitter from "./../../img/socials/twitter.webp";
import linkedin from "./../../img/socials/linkedin.webp";
import youtube from "./../../img/socials/youtube.webp";
import instagram from "./../../img/socials/instagram.webp";
import pinterest from "./../../img/socials/pinterest.webp";
import footerLine2 from "./../../img/lines/footerLine2.webp";
import footer__line_decor from "./../../img/lines/footer__line1.webp";
import footer__line_decor2 from "./../../img/lines/footer__line2.webp";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="container-wrapper">
        <div className="footer__items">
          <div className="footer__logo">
            <a href="/home">
              <img src={footerLogo} alt="Logo" />
            </a>
          </div>
          <div className="footer__logo_lines">
            <img src={footer__line_decor} alt="background decoration" />
            <img src={footer__line_decor2} alt="background decoration" />
          </div>
          <div className="footer__line">
            <img
              src={footerLine}
              alt="background decoration"
              style={{ width: "auto", height: "196px" }}
            />
          </div>
          <div className="footer__nav">
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
          </div>
          <div className="footer__line">
            <img
              src={footerLine}
              alt="background decoration"
              style={{ width: "auto", height: "196px" }}
            />
          </div>
          <div className="footer__links">
            <a href="/f.a.q">f.a.q</a>
            <a href="/sitemap">sitemap</a>
            <a href="/conditions">conditions</a>
            <a href="/licenses">licenses</a>
          </div>
          <div className="footer__line">
            <img
              src={footerLine}
              alt="background decoration"
              style={{ width: "auto", height: "196px" }}
            />
          </div>
          <div className="social">
            <div className="social__title">
              <span>SOCIALIZE WITH HYDRA</span>
            </div>
            <div className="social__links">
              <a href="/facebook">
                <img src={facebook} alt="facebook" />
              </a>
              <a href="/twitter">
                <img src={twitter} alt="twitter" />
              </a>
              <a href="/linkedin">
                <img src={linkedin} alt="linkedin" />
              </a>
              <a href="/youtube">
                <img src={youtube} alt="youtube" />
              </a>
              <a href="/instagram">
                <img src={instagram} alt="instagram" />
              </a>
              <a href="/pinterest">
                <img src={pinterest} alt="pinterest" />
              </a>
            </div>
            <div className="footer__btn">
              <a href="/start">Build your world</a>
            </div>
          </div>
        </div>
        <div className="footer__line_row">
          <img
            src={footerLine2}
            alt="background decoration"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
        <div className="copyright">
          <p>
            2023 © HYDRA LANDING PAGE - BY ZINE. E. FALOUTI - ALL RIGHTS
            RESERVED{" "}
          </p>
        </div>
      </div>
    </footer>
  );
}
