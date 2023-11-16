import React from "react";
import btnNext from "./../../img/swiper/swiperNext.webp";
import btnPrev from "./../../img/swiper/swiperPrev.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css";

export default function SwiperCircles() {
  return (
    <div className="swiper_circle_container">
      <Swiper
        modules={[Navigation]}
        slidesPerView={1}
        spaceBetween={8}
        navigation={{
          nextEl: ".swiper-btn-next-circle",
          prevEl: ".swiper-btn-prev-circle",
        }}
        initialSlide={0}
        centeredSlides={true}
        loop={true}
      >
        <SwiperSlide>
          <div className="swiper_circle_items">
            <div className="numb">
              <span>01</span>
            </div>
            <div className="circle_text_desc">
              <span>3D Conception & Design</span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper_circle_items">
            <div className="numb">
              <span>02</span>
            </div>
            <div className="circle_text_desc">
              <span>Interaction Design</span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper_circle_items">
            <div className="numb">
              <span>03</span>
            </div>
            <div className="circle_text_desc">
              <span>VR World User Testing</span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper_circle_items">
            <div className="numb">
              <span>04</span>
            </div>
            <div className="circle_text_desc">
              <span>Hydra VR Deploy</span>
            </div>
          </div>
        </SwiperSlide>
        <div className="swiper-btn-next-circle">
          <img
            src={btnNext}
            alt="Next"
            style={{ width: "38px", height: "38px" }}
          />
        </div>
        <div className="swiper-btn-prev-circle">
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
