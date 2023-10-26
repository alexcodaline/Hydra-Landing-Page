import React from "react";
import "./Preloader.scss";
import preloaderLogo from "./logoPreloader.webp";
import preloaderName from "./preloaderName.svg";

const Preloader = () => {
  return (
    <div className="preloader">
      <div className="preloader__name">
        <img src={preloaderName} alt="Hydra" />
      </div>
      <div className="preloader__logo">
        <img src={preloaderLogo} alt="loading" />
      </div>
    </div>
  );
};

export default Preloader;
