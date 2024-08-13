import React from "react";
import { XMarkIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";

const MobileNav = ({ nav, closeNav }) => {
  // const navAnimated = nav? 'block' : 'hidden'
  const navAnimated = nav ? "translate-x-0" : "translate-x-[-100%]";
  // console.log(nav);
  // console.log(navAnimated);
  return (
    <div
      className={`fixed ${navAnimated}  transform transition-all duration-300 top-0 bottom-0 left-0 right-0 z-[1000000] bg-[#001d3d]`}
    >
      <div className="flex z-[1000000] flex-col w-[100vw] h-[100vh] justify-center items-center">
        <Link to="/">
          <img
            onClick={closeNav}
            src="https://res.cloudinary.com/dpvxkqhi8/image/upload/v1710929421/branding%20hopes/Logo_PNG_u07vul.png"
            className="w-[220px] h-[80px] object-contain "
            alt="Branding Hopes"
          />
        </Link>
        <Link to="/">
          <div className="nav-link-mobile" onClick={closeNav}>
            Home
          </div>
        </Link>
        <Link to="/services">
          <div className="nav-link-mobile" onClick={closeNav}>
            Services
          </div>
        </Link>
        <div className="nav-link-mobile">
          <Dropdown closeNav={closeNav} />
        </div>

        <Link to="/about">
          <div className="nav-link-mobile" onClick={closeNav}>
            About
          </div>
        </Link>
        {/* <Link to="/blog">
          <div className="nav-link-mobile" onClick={closeNav}>
            Blog
          </div>
        </Link> */}
        {/* <Link to="/portfolio">
          <div className="nav-link-mobile" onClick={closeNav}>
            Portfolio
          </div>
        </Link> */}
        <Link to="/contact">
          <div className="nav-link-mobile" onClick={closeNav}>
            Contact
          </div>
        </Link>
      </div>
      <div
        onClick={closeNav}
        className="absolute cursor-pointer top-[2rem] right-[2rem] w-[2rem] h-[2rem] text-[#fca311] "
      >
        <XMarkIcon />
      </div>
    </div>
  );
};

export default MobileNav;
