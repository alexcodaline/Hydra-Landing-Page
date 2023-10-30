import React from "react";
import "./Title.scss";
import titleImg from "./../../img/decoration/title.webp";
import arrow from "./../../img/arrows/arrow-right.webp";
import line1 from "./../../img/lines/line1.webp";
import line2 from "./../../img/lines/line2.webp";
import line3 from "./../../img/lines/line3.webp";
import line4 from "./../../img/lines/line4.webp";
import location from "./../../img/contacts/location.webp";
import phone from "./../../img/contacts/phone.webp";
import email from "./../../img/contacts/email.webp";
import contactLine from "./../../img/lines/contact-line.webp";
import SwiperContacts from "./../Swiper/SwiperContacts";

export default function Title() {
  return (
    <section className="main">
      <div className="container-wrapper">
        <div className="title">
          <div className="title-img">
            <div className="woman">
              <img src={titleImg} alt="Hydra product" />
            </div>
            <div className="lines">
              <img src={line1} alt="background decoratin" />
              <img src={line2} alt="background decoratin" />
              <img src={line3} alt="background decoratin" />
            </div>
          </div>
          <div className="title-text">
            <div className="line">
              <img src={line4} alt="background decoration" />
            </div>
            <span>
              Dive{" "}
              <span>
                Into The Depths Of <span>Virtual Reality</span>
              </span>
            </span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore nisl tincidunt eget.
              Lectus mauris eros in vitae.
            </p>
            <div className="title-button">
              <a href="/start">Build your world</a>
              <div className="arrow">
                <img src={arrow} alt="arrow" />
              </div>
            </div>
          </div>
        </div>
        <div className="contacts">
          <div className="location">
            <a
               href="https://www.google.com/maps?q=Union+St,Seattle,WA+98101,United+States"
              target="blank"
            >
              <div className="contact_info">
                <img src={location} alt="location" />
                <div className="info">
                  <span>Pay Us a Visit</span>
                  <p>Union St, Seattle, WA 98101, United States</p>
                </div>
              </div>
            </a>
          </div>
          <div>
            <img src={contactLine} alt="background decoratin" />
          </div>
          <div className="phone">
            <a href="tel:+11011111010">
              <div className="contact_info">
                <img src={phone} alt="phone call" />
                <div className="info">
                  <span>Give Us a Call</span>
                  <p>(110) 1111-1010</p>
                </div>
              </div>
            </a>
          </div>
          <div>
            <img src={contactLine} alt="background decoratin" />
          </div>
          <div className="email">
            <a href="mailto:contact@HydraVTech.com">
              <div className="contact_info">
                <img src={email} alt="mail" />
                <div className="info">
                  <span>Send Us a Message</span>
                  <p>Contact@HydraVTech.com</p>
                </div>
              </div>
            </a>
          </div>
        </div>
        <SwiperContacts />
      </div>
    </section>
  );
}
