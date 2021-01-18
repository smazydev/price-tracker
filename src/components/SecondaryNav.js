import React from 'react';
import Heart from '../static/images/heart.png';

const SecondaryNav = () => {
    return (
        <div className="nav-container no-border">
            <select className="item-sorter">
                <option label="Best Prices">best prices</option>
                <option label="Trending Items">trending items</option>
                <option label="Surprise Me">surprise me</option>
            </select>
            <ul className="nav-list">
                <a className="nav-link" href="Home"><li>amazon us</li></a>
                <a className="nav-link" href="Home"><li>amazon uk</li></a>
                <a className="nav-link" href="Home"><li>amazon canada</li></a>
                <a className="nav-link" href="Home"><li>amazon india</li></a>
            </ul>
            <button className="favorite"><img src={Heart} alt="favorite button"/></button>
        </div>
    )
}

export default SecondaryNav
