import React from 'react'
import logo from '../static/images/logo.png';
import Button from './Button';
import {FaBars} from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';

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
            <IconContext.Provider value={{size: "40px",margin:"20px",color:"#0D65F8"}}>
                <div className="hambgr-holder">
                    <FaBars/>
                </div>
            </IconContext.Provider>
            </div>
           <div className="button-container">
                <Button/>
                <Button/>          
            </div>
        </div>
    )
}

export default Navbar
