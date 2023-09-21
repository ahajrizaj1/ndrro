import React from 'react'
import './style/mobile.scss'
import navLogo from './../../../assets/abstract-shape.png'
import { MdKeyboardArrowDown } from "react-icons/md";
import { FiSearch } from "react-icons/fi";

const MobileNav = () => {
  return (
    <div className='mobile'>
        <div className="mobile__logo-container">
            <img  className='mobile__logo' src={navLogo} alt="" />
            <h3>NDRROHU</h3>
        </div>
        <div className="mobile__links">
        <p>
          <a href="home.html">Home</a>
        </p>
        <p>
          <a href="about.html">About Us</a>
        </p>
        <p>
          <a href="services.html">
            Our Services <MdKeyboardArrowDown />
          </a>
        </p>
        <p>
          <a href="pricing.html">
            Pricing <MdKeyboardArrowDown />
          </a>
        </p>
        <p>
          <a href="blog.html">Blog</a>
        </p>
        <p>
          <a href="contact.html">Contact Us</a>
        </p>
        </div>
        <div className="mobile__auth">
        <span>
          <FiSearch />
        </span>
        <button className="btn login__btn">Learn more</button>
        <button className="btn signup__btn">Learn more</button>
        </div>
    </div>
  )
}

export default MobileNav