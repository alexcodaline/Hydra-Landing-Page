import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css";
import slide1 from "./../../img/decoration/slide1.webp";
import slide2 from "./../../img/decoration/slide2.webp";
import slide3 from "./../../img/decoration/slide3.webp";
import slide4 from "./../../img/decoration/slide4.webp";
import btnNext from "./../../img/swiper/swiperNext.webp";
import btnPrev from "./../../img/swiper/swiperPrev.webp";

export default function SwiperTech() {
  return (
    <div className="swiper_tech_container">
      <Swiper
        modules={[Navigation]}
        slidesPerView={1}
        spaceBetween={8}
        navigation={{ nextEl: ".swiper-btn-next", prevEl: ".swiper-btn-prev" }}
        initialSlide={1}
        centeredSlides={true}
        loop={true}
      >
        <SwiperSlide className="swipe__tech__slide">
          <div className="swipe_tech_item">
            <img src={slide1} alt="unreal engine" />
          </div>
        </SwiperSlide>

        <SwiperSlide className="swipe__tech__slide">
          <div className="swipe_tech_item">
            <img src={slide2} alt="unity" />
          </div>
        </SwiperSlide>

        <SwiperSlide className="swipe__tech__slide">
          <div className="swipe_tech_item">
            <img src={slide3} alt="oculus" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="swipe__tech__slide">
          <div className="swipe_tech_item">
            <img src={slide4} alt="vive" />
          </div>
        </SwiperSlide>
        <div className="swiper-btn-next">
          <img
            src={btnNext}
            alt="Next"
            style={{ width: "38px", height: "38px" }}
          />
        </div>
        <div className="swiper-btn-prev">
          <img
            src={btnPrev}
            alt="Prev"
            style={{ width: "38px", height: "38px" }}
          />
        </div>
      </Swiper>
    </div>
  );
}
