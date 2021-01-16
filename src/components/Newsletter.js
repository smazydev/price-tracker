import React from 'react'
import NewsletterImage from '../static/images/Newsletter-image.png';

const Newsletter = () => {
    return (
        <div>
            <div>
                <h1>want to get notified when any <br/>
                    product receives a price drop?
                </h1>
                <input placeholder="enter e-mail address"></input>
                <button>sign up</button>
                <p>*no spam, ever. Only receive price drop notifications.</p>
            </div>
            <div>
                <img src={NewsletterImage} alt="newsletter pattern"/>
            </div>
        </div>
    )
}

export default Newsletter
