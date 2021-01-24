import React from "react";
import Heart from "../static/images/heart.png";
import ItemSorter from "./ItemSorter";

const SecondaryNav = ({width}) => {
  return (
    <div className="sec-container no-border">
      {width <= 1024 ? (
        <>
          <ItemSorter
            labelOne={"Best Prices"}
            labelTwo={"Trending Products"}
            labelThree={"Surprise Me"}
          />
          <ItemSorter
            labelOne={"Amazon US"}
            labelTwo={"Amazon UK"}
            labelThree={"Amazon Canada"}
          />
        </>
      ) : (
        <div>
          <ItemSorter
            labelOne={"Best Prices"}
            labelTwo={"Trending Products"}
            labelThree={"Surprise Me"}
          />
          <ul className="nav-list">
            <a className="nav-link" href="Home">
              <li>amazon us</li>
            </a>
            <a className="nav-link" href="Home">
              <li>amazon uk</li>
            </a>
            <a className="nav-link" href="Home">
              <li>amazon canada</li>
            </a>
          </ul>
          <button className="favorite">
            <img src={Heart} alt="favorite button" />
          </button>
        </div>
      )}
    </div>
  );
};

export default SecondaryNav;
