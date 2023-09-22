import React from "react";
import "./style/banner.scss";
import diagonal from "../../assets/diagonal-banner.png";

const Banner = () => {
  return (
    // <div className="banner">
    //   <div className="far-left"></div>
    //   <div class="left"></div>
    //   <div class="right">
    //     <div className="diagonal"></div>
    //   </div>
    //   <div class="content">
    //     <h2>START THE</h2>
    //     <h1>CHANGE <br /> TODAY</h1>

    //     <button className="btn">About Us</button>
    //     <button className="btn">Learn more</button>
    //   </div>
    // </div>
    <div className="banner">
     <div className="diagonal"></div>
     <div className="right"></div>
      <div className="content">
        <h2>START THE</h2>
        <h1>CHANGE <br /> TODAY</h1>
        <p>Stand up for yourself, change into the best version of YOU.</p>
        <div className="button-container">
        <button className="btn first-button">About Us</button>
        <button className="btn second-button">Learn more</button>
        </div>
      </div>
     
    </div>
  );
};

export default Banner;
