import React from 'react'
import ProductOne from '../static/images/product-1.png';
import Button from './Button';

const Item = () => {
    return (
        <div className="item-container">
            <img src={ProductOne} alt="Macbook"/>
            <h1>apple macBook pro 13' 2.4 <br/> ghz - 8 GB RAM</h1>
            <div className="price-container">
                <h2 className="new-price">$850</h2>
                <h2 className="old-price">$1250</h2>
            </div>
            <button className="buy-button">buy now</button>
        </div>
    )
}

export default Item
