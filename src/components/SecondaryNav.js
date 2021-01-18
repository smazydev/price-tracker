import React from 'react'

const SecondaryNav = () => {
    return (
        <div className="nav-container no-border">
            <select className="item-sorter">
                <option label="best prices"></option>
                <option label="trending items"></option>
                <option label="surprise me"></option>
            </select>
            <ul className="nav-list">
                <a className="nav-link" href="Home"><li>amazon us</li></a>
                <a className="nav-link" href="Home"><li>amazon uk</li></a>
                <a className="nav-link" href="Home"><li>amazon canada</li></a>
                <a className="nav-link" href="Home"><li>amazon india</li></a>
            </ul>
            <button className="signup">sign up</button>
        </div>
    )
}

export default SecondaryNav
