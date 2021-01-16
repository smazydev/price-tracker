import React from 'react';
import heroImage from '../static/images/hero-image.png';

const Hero = () => {
    return (
        <div className="hero-container">
            <div className="hero-text">
                <h1>get instant e-mail <br/> notifications when amazon <br/> prices drop.</h1>
                <div className="search">
                    <input placeholder="Enter Product URL (https://www.amazon.com/Fujifilm-Instax-SP-3-Mobi...)"/>
                    <button>search</button>
                    <p>* You can also search via Keyword (i.e. Apple Airpods Pro)</p>
                </div>
            </div>
            <div className="hero-img">
                <img src={heroImage} alt="pattern"/>
            </div>
        </div>
    )
}

export default Hero
