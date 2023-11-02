import React from "react";
import card1 from "./../../img/decoration/card1.webp";
import card2 from "./../../img/decoration/card2.webp";
import card3 from "./../../img/decoration/card3.webp";
import card4 from "./../../img/decoration/card4.webp";
import btnNext from "./../../img/swiper/swiperNext.webp";
import btnPrev from "./../../img/swiper/swiperPrev.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css";

export default function SwiperCards() {
  return (
    <div className="swiper_cards_container">
      <Swiper
        modules={[Navigation]}
        slidesPerView={1}
        spaceBetween={8}
        navigation={{ nextEl: ".swiper-btn-next", prevEl: ".swiper-btn-prev" }}
        initialSlide={1}
        centeredSlides={true}
        loop={true}
      >
        <SwiperSlide className="swiper__cards">
          <div className="swiper_cards_info">
            <img src={card1} alt="simulation" />
            <span>SIMULATION</span>
            <p>
              Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet
              porttitor rhoncus libero justo laoreet sit amet vitae.
            </p>
            <a href="/">TRY IT NOW</a>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper__cards">
          <div className="swiper_cards_info">
            <img src={card2} alt="education" />
            <span>EDUCATION</span>

            <p>
              Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet
              porttitor rhoncus libero justo laoreet sit amet vitae.
            </p>
            <a href="/">TRY IT NOW</a>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper__cards">
          <div className="swiper_cards_info">
            <img src={card3} alt="self-care" />
            <span>SELF-CARE</span>
            <p>
              Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet
              porttitor rhoncus libero justo laoreet sit amet vitae.
            </p>
            <a href="/">TRY IT NOW</a>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper__cards">
          <div className="swiper_cards_info">
            <img src={card4} alt="outdoor" />
            <span>OUTDOOR</span>
            <p>
              Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet
              porttitor rhoncus libero justo laoreet sit amet vitae.
            </p>
            <a href="/">TRY IT NOW</a>
          </div>
        </SwiperSlide>
        <div className="swiper-btn-next">
          <img src={btnNext} alt="Next" style={{ width: '38px', height: '38px' }}/>
        </div>
        <div className="swiper-btn-prev">
          <img src={btnPrev} alt="Prev" style={{ width: '38px', height: '38px' }}/>
        </div>
      </Swiper>
    </div>
  );
}
