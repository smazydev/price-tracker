import React from 'react'

const SecondaryNav = () => {
    return (
        <div className="nav-container">
            <select className="item-sorter">
                <option label="best prices"></option>
                <option label="trending items"></option>
                <option label="surprise me"></option>
            </select>
            <ul className="nav-list">
                <a className="nav-link" href="Home"><li>home</li></a>
                <a className="nav-link" href="Home"><li>trending price drops</li></a>
                <a className="nav-link" href="Home"><li>popular products</li></a>
            </ul>
            <button className="signup">sign up</button>
        </div>
    )
}

export default SecondaryNav
