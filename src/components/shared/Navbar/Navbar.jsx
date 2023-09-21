import React, { useState } from "react";
import "./style/navbar.scss";
import navLogo from "./../../../assets/abstract-shape.png";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import MobileNav from "./MobileNav";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false)
  return (
    <nav className="navbar logo__font">
      {showNav && <MobileNav />}
      <div className="logo__container">
        <img className="logo" src={navLogo} alt="" />
        <h3>NDRROHU</h3>
      </div>
      <div className="nav__links">
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
      <div className="nav__auth">
        <span>
          <FiSearch />
        </span>
        <button className="btn login__btn">Learn more</button>
        <button className="btn signup__btn">Learn more</button>
      </div>
      <div className="burger" onClick={() => setShowNav((prev) => setShowNav(!prev))}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
};

export default Navbar;
