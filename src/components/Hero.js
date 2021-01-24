import React from "react";
import heroImage from "../static/images/hero-image.png";
import Button from "./Button";

const Hero = ({ width }) => {
  return (
    <div className="hero-container">
      {width <= 1024 ? (
        <>
          <div className="hero-text">
            <h1>get instant e-mail notifications when amazon prices drop.</h1>
            <div className="search">
              <input placeholder="Enter Product URL (https://www.amazon.com/Fujifilm-Instax-SP-3-Mobi...)" />
              <Button />
              <p>* You can also search via Keyword (i.e. Apple Airpods Pro)</p>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="hero-text">
            <h1>get instant e-mail notifications when amazon prices drop.</h1>
            <div className="search">
              <input placeholder="Enter Product URL (https://www.amazon.com/Fujifilm-Instax-SP-3-Mobi...)" />
              <Button />
              <p>* You can also search via Keyword (i.e. Apple Airpods Pro)</p>
            </div>
          </div>
          <div className="hero-img">
            <img src={heroImage} alt="pattern" />
          </div>
        </>
      )}
    </div>
  );
};

export default Hero;
