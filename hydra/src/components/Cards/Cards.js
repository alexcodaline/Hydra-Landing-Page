import React, { useState } from "react";
import "./Cards.scss";
import card1 from "./../../img/decoration/card1.webp";
import card2 from "./../../img/decoration/card2.webp";
import card3 from "./../../img/decoration/card3.webp";
import card4 from "./../../img/decoration/card4.webp";
import cardLine from "./../../img/lines/cardLine.webp";
import arrowDown from "./../../img/arrows/arrowDown.webp";
import slide1 from "./../../img/decoration/slide1.webp";
import slide2 from "./../../img/decoration/slide2.webp";
import slide3 from "./../../img/decoration/slide3.webp";
import slide4 from "./../../img/decoration/slide4.webp";
import vector from "./../../img/arrows/arrowVector.webp";
import arrowIntro from "./../../img/arrows/arrowIntro.webp";
import Swiper from "./../Swiper/SwiperCards";
import SwiperTech from "./../Swiper/SwiperTech";
export default function Cards() {
  const [slideVisible, setSlideVisible] = useState(false);

  return (
    <section className="cards">
      <div className="container-wrapper">
        <Swiper />
        <div className="cards-info">
          <div className="cards-desc">
            <img src={card1} alt="simulation" />
            <span>SIMULATION</span>
            <p>
              Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet
              porttitor rhoncus libero justo laoreet sit amet vitae.
            </p>
            <a href="/">TRY IT NOW</a>
          </div>
          <div className="cards-desc">
            <img src={card2} alt="education" />
            <span>EDUCATION</span>

            <p>
              Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet
              porttitor rhoncus libero justo laoreet sit amet vitae.
            </p>
            <a href="/">TRY IT NOW</a>
          </div>
          <div className="cards-desc">
            <img src={card3} alt="self-care" />
            <span>SELF-CARE</span>
            <p>
              Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet
              porttitor rhoncus libero justo laoreet sit amet vitae.
            </p>
            <a href="/">TRY IT NOW</a>
          </div>
          <div className="cards-desc">
            <img src={card4} alt="outdoor" />
            <span>OUTDOOR</span>
            <p>
              Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet
              porttitor rhoncus libero justo laoreet sit amet vitae.
            </p>
            <a href="/">TRY IT NOW</a>
          </div>
        </div>
        <div className="line">
          <img src={cardLine} alt="background decoration" />
        </div>
        <div className="slide">
          <span>TECHNOLOGIES & HARDWARE</span>
          <p>USED BY HYDRA VR.</p>
          <button
            className={`btn-slide ${slideVisible ? "rotate" : ""}`}
            onClick={() => setSlideVisible(!slideVisible)}
          >
            <img src={arrowDown} alt="click to me" />
            {slideVisible ? <div className="slides"></div> : null}
          </button>
        </div>
        <SwiperTech />
        {slideVisible && (
          <div className="slides">
            <div className="slides-data">
              <img src={slide1} alt="unreal engine" />
            </div>
            <div className="slides-data">
              <img src={slide2} alt="unity" />
            </div>
            <div className="slides-data">
              <img src={slide3} alt="oculus" />
            </div>
            <div className="slides-data">
              <img src={slide4} alt="vive" />
            </div>
          </div>
        )}
        <div className="cards-desc">
          <div className="cards-context">
            <span>HOW WE BUILD</span>
            <p>WITH HYDRA VR?</p>
            <div className="arrow-card">
              <img src={vector} alt="background decoration" />
              <img src={arrowIntro} alt="background decoration" />
            </div>
          </div>

          <div className="cards-text">
            <p>
              Vitae sapien pellentesque habitant morbi tristique senectus et
              netus et. Feugiat nibh sed pulvinar proin gravida hendrerit
              lectus. Mi sit amet mauris commodo quis imperdiet massa tincidunt
              nunc. Viverra aliquet eget sit amet tellus. Ornare lectus sit amet
              est placerat in. Lectus magna fringilla urna porttitor rhoncus
              vitae.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
