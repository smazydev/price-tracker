import React from 'react'
import logo from '../static/images/logo.png';

const Navbar = () => {
    return (
        <div className="nav-container sticky">
            <div className="logo-container">
                <img src={logo} alt="logo"/>
            </div>
            <div className="list-container">
                <ul className="nav-list">
                <a className="nav-link" href="Home"><li>home</li></a>
                <a className="nav-link" href="Home"><li>trending price drops</li></a>
                <a className="nav-link" href="Home"><li>popular products</li></a>
            </ul>
            </div>
            <div className="button-container">
            <button className="signup">sign up</button>
            </div>
        </div>
    )
}

export default Navbar
