import React from "react";
import LogoNoText from "../static/images/LogoNoText.png";
import instagramLogo from "../static/images/social-1_logo-instagram.png";
import twitterLogo from "../static/images/social-1_logo-twitter.png";
import facebookLogo from "../static/images/White_2_.png";

const Footer = () => {
  return (
    <div className="footer-container">
      {document.documentElement.clientWidth < 600 ? (
        <>
          <div className="logo-container">
            <img src={LogoNoText} alt="logo" />
            <p>&copy; 2020</p>
          </div>
          <div className="social-media">
            <h4>follow us on</h4>
            <div>
              <img src={instagramLogo} alt="social-media logo" />
              <img src={facebookLogo} alt="social-media logo" />
              <img src={twitterLogo} alt="social-media logo" />
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="logo-container">
            <img src={LogoNoText} alt="logo" />
            <p>&copy; 2020</p>
          </div>
          <div className="links">
            <ul>
              <li>
                <h4>price.io</h4>
              </li>
              <li>home</li>
              <li>trending price drops</li>
              <li>popular products</li>
            </ul>
          </div>
          <div className="links">
            <ul>
              <li>
                <h4>amazon store setter</h4>
              </li>
              <li>amazon us</li>
              <li>amazon uk</li>
              <li>amazon canada</li>
              <li>amazon india</li>
            </ul>
          </div>
          <div className="links">
            <ul>
              <li>
                <h4>hotlinks</h4>
              </li>
              <li>sign up</li>
              <li>sign in</li>
              <li>support</li>
            </ul>
          </div>
          <div className="links">
            <ul>
              <li>
                <h4>personal</h4>
              </li>
              <li>dashboard</li>
            </ul>
          </div>
          <div className="social-media">
            <h4>follow us on</h4>
            <div>
              <img src={instagramLogo} alt="social-media logo" />
              <img src={facebookLogo} alt="social-media logo" />
              <img src={twitterLogo} alt="social-media logo" />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Footer;
