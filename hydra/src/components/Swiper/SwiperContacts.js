import React from "react";
import location from "./../../img/contacts/location.webp";
import phone from "./../../img/contacts/phone.webp";
import email from "./../../img/contacts/email.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css";
import slideNext from "./../../img/swiper/contactBtnNext.webp"
import slidePrev from "./../../img/swiper/contactBtnPrev.webp"

export default function SwiperContacts() {

    return (
        <div className="swiper_contacts_container">
            <Swiper
                modules={[Navigation]}
                slidesPerView={1}
                spaceBetween={8}
                navigation={{
                    nextEl: ".button-next-slide",
                    prevEl: ".button-prev-slide",
                }}
                initialSlide={1}
                centeredSlides={true}
                loop={true}
                className="swiper"
            >
                <SwiperSlide className="swipe__slide">
                        <a className="swipe__slide_info" href="/location">
                                <img src={location} alt="location" />
                                <p>Union St, Seattle, WA 98101, United States</p>
                        </a>
                </SwiperSlide>
                <SwiperSlide className="swipe__slide">
                        <a className="swipe__slide_info" href="/location">
                                <img src={email} alt="mail" />
                                <p>Contact@HydraVTech.com</p>
                        </a>
                </SwiperSlide>
                <SwiperSlide className="swipe__slide">
                        <a className="swipe__slide_info" href="/location">
                                <img src={phone} alt="phone call" />
                                <p>(110) 1111-1010</p>
                        </a>
                </SwiperSlide>
                <div className="button-prev-slide"><img src={slidePrev} alt="Prev" /></div>
                <div className="button-next-slide"><img src={slideNext} alt="Next" /></div>
            </Swiper>
        </div>
    );
}
