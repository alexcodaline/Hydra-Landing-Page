import React from "react";
import { Element } from "react-scroll";
import "./Circle.scss";
import circleLine from "./../../img/lines/circleLine.webp";

import SwiperCircles from "./../Swiper/SwiperCircles.js";

export default function Circle() {
  return (
    <section className="steps">
      <Element name="how_to">
        <div className="container-wrapper">
          <SwiperCircles />
          <div className="circleLine">
            <img src={circleLine} alt="background decoration" />
          </div>
          <div className="circle-container">
            <div className="circle">
              <div className="circle-numb">
                <span>01</span>
              </div>
              <div className="circle-desc">
                <span>3D Conception & Design</span>
              </div>
            </div>
            <div className="circle">
              <div className="circle-numb">
                <span>02</span>
              </div>
              <div className="circle-desc">
                <span>Interaction Design</span>
              </div>
            </div>
            <div className="circle">
              <div className="circle-numb">
                <span>03</span>
              </div>
              <div className="circle-desc">
                <span>VR World User Testing</span>
              </div>
            </div>
            <div className="circle">
              <div className="circle-numb">
                <span>04</span>
              </div>
              <div className="circle-desc">
                <span>Hydra VR Deploy</span>
              </div>
            </div>
          </div>
        </div>
      </Element>
    </section>
  );
}
