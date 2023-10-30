import React from "react";
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
            <img src={footerLine} alt="background decoration" />
          </div>
          <div className="footer__nav">
            <a href="/about">about</a>
            <a href="/about">SERVICES</a>
            <a href="/about">TECHNOLOGIES</a>
            <a href="/about">HOW TO</a>
            <a href="/about">JOIN HYDRA</a>
          </div>
          <div className="footer__line">
            <img src={footerLine} alt="background decoration" />
          </div>
          <div className="footer__links">
            <a href="/about">f.a.q</a>
            <a href="/about">sitemap</a>
            <a href="/about">conditions</a>
            <a href="/about">licenses</a>
          </div>
          <div className="footer__line">
            <img src={footerLine} alt="background decoration" />
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
          <img src={footerLine2} alt="background decoration" />
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
