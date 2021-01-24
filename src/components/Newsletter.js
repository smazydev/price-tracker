import React from "react";
import NewsletterImage from "../static/images/Newsletter-image.png";
import Button from "./Button";

const Newsletter = ({width}) => {
  return (
    <div className="newsletter-container">
      {width <= 1024 ? (
        <>
          <div className="newsletter-text">
            <h1>
              want to get notified when any
              product receives a price drop?
            </h1>
            <input placeholder="enter e-mail address"></input>
            <Button />
            <p>*no spam, ever. Only receive price drop notifications.</p>
          </div>
        </>
      ) : (
        <>
          <div className="newsletter-text">
            <h1>
              want to get notified when any <br />
              product receives a price drop?
            </h1>
            <input placeholder="enter e-mail address"></input>
            <Button />
            <p>*no spam, ever. Only receive price drop notifications.</p>
          </div>
          <div className="newsletter-img">
            <img src={NewsletterImage} alt="newsletter pattern" />
          </div>
        </>
      )}
    </div>
  );
};

export default Newsletter;
