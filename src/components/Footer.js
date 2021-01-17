import React from 'react';
import LogoNoText from '../static/images/LogoNoText.png';
import instagramLogo from '../static/images/social-1_logo-instagram.png';
import twitterLogo from '../static/images/social-1_logo-twitter.png';
import facebookLogo from '../static/images/White_2_.png';

const Footer = () => {
    return (
        <div className="footer-container">
            <div>
                <img src={LogoNoText} alt="logo"/>
                <p>2020</p>
            </div>
            <div>
                <ul>
                    <li>price.io</li>
                    <li>home</li>
                    <li>trending price drops</li>
                    <li>popular products</li>
                </ul>
            </div>
            <div>
                <ul>
                    <li>amazon store selector</li>
                    <li>amazon us</li>
                    <li>amazon uk</li>
                    <li>amazon canada</li>
                    <li>amazon india</li>
                </ul>
            </div>
            <div>
            <ul>
                    <li>hotlinks</li>
                    <li>sign up</li>
                    <li>sign in</li>
                    <li>support</li>
            </ul>
            </div>
            <div>
                <li>personal</li>
                <li>dashboard</li>
            </div>
            <div>
                <h6>follow us on</h6>
                <div>
                    <img src={instagramLogo} alt="social-media logo"/>
                    <img src={twitterLogo} alt="social-media logo" />
                    <img src={facebookLogo} alt="social-media logo" />
                </div>
            </div>
            <div>
                <h6>made with love by ali zafar</h6>
            </div>
        </div>
    )
}

export default Footer
