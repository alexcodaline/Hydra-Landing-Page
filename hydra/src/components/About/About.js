import React from "react";
import "./About.scss";
import vector from "./../../img/arrows/arrowVector.webp";
import arrowIntro from "./../../img/arrows/arrowIntro.webp";
import man from "./../../img/decoration/man.webp";
import line1 from "./../../img/lines/lineAbout.webp";
import line2 from "./../../img/lines/lineAbout2.webp";

export default function About() {
  return (
    <section className="about">
      <div className="container-wrapper">
        <div className="about__content">
          <div className="intro">
            <div className="intro-title">
              <span>introdution</span>
              <p>to hydra vr</p>
              <div className="arrow">
                <img src={vector} alt="background decoration" />
                <img src={arrowIntro} alt="background decoration" />
              </div>
            </div>
            <div className="intro_text">
              <p>
                Vitae sapien pellentesque habitant morbi tristique senectus et
                netus et. Feugiat nibh sed pulvinar proin gravida hendrerit
                lectus. Mi sit amet mauris commodo quis imperdiet massa
                tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare
                lectus sit amet est placerat in. Lectus magna fringilla urna
                porttitor rhoncus vitae.
              </p>
            </div>
          </div>
          {/* About VR*/}
          <div className="about-vr">
            <div className="lines">
              <img src={line1} alt="background decoration" />
              <img src={line2} alt="background decoration" />
            </div>
            <div className="man">
              <img src={man} alt="Man VR" loading="lazy" fetchpriority="high"/>
            </div>
            <div className="about-desc">
              <div className="about-title">
                <span>about</span>
                <p>hydra vr</p>
              </div>
              <div className="desk">
                <p>
                  Eget mi proin sed libero enim sed faucibus turpis. Nisl
                  rhoncus mattis rhoncus urna neque viverra justo. Vivamus at
                  augue eget arcu dictum. Ultrices gravida dictum fusce ut
                  placerat orci. Aenean et tortor at risus viverra adipiscing at
                  in. Mattis aliquam faucibus purus in massa. Est placerat in
                  egestas erat imperdiet sed. Consequat semper viverra nam
                  libero justo laoreet sit amet. Aliquam etiam erat velit
                  scelerisque in dictum non consectetur a. Laoreet sit amet
                  cursus sit amet. Vel eros donec ac odio tempor orci dapibus.
                  Sem nulla pha retra diam sit amet nisl suscipit adipiscing
                  bibendum. Leo a diam sollicitudi n tempor.
                </p>
              </div>
              <div className="about-btn">
                <a href="/">LET’S GET IN TOUCH</a>
              </div>
            </div>
          </div>
          <div className="context">
            <div className="context-title">
              <span>WHY BUILD</span>
              <p>WITH HYDRA?</p>
              <div className="arrow-context">
                <img src={vector} alt="background decoration" />
                <img src={arrowIntro} alt="background decoration" />
              </div>
            </div>

            <div className="context_text_hydra">
              <p>
                Vitae sapien pellentesque habitant morbi tristique senectus et
                netus et. Feugiat nibh sed pulvinar proin gravida hendrerit
                lectus. Mi sit amet mauris commodo quis imperdiet massa
                tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare
                lectus sit amet est placerat in. Lectus magna fringilla urna
                porttitor rhoncus vitae.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
