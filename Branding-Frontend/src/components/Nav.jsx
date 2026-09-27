import { Bars3Icon } from "@heroicons/react/16/solid";
import React, { useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";
import MobileNav from "./MobileNav";

const Nav = () => {
  const [navOpen, setNavOpen] = useState(false);

  // Dropdown ke liye state add karo
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const openNav = () => setNavOpen(true);
  const closeNav = () => setNavOpen(false);

  return (
    <>
      <div className="navContainer w-full fixed z-[10000] flex items-center justify-between px-2 h-[11vh] bg-transparent shadow-md">
        <div className="w-full flex items-center justify-between h-full lg:mx-[50px]">
          <Link to="/">
            <img
              width={308}
              height={88}
              src="https://res.cloudinary.com/dpvxkqhi8/image/upload/v1710929421/branding%20hopes/Logo_PNG_u07vul.png"
              className="w-[220px] h-[80px] object-contain"
              alt="Branding Hopes"
            />
          </Link>
          <div className="hidden md:flex lg:gap-[50px] gap-[15px]">
            <Link to="/">
              <div className="nav-link text-[#fca311]">Home</div>
            </Link>
            <Link to="/services">
              <div className="nav-link text-[#fca311]">Services</div>
            </Link>
            <div className="nav-link text-[#fca311]">
              {/* Dropdown ko isOpen and setIsOpen pass karo */}
              <Dropdown isOpen={dropdownOpen} setIsOpen={setDropdownOpen} />
            </div>
            <Link to="/about">
              <div className="nav-link text-[#fca311]">About</div>
            </Link>
            {/* <Link to="/portfolio">
              <div className="nav-link text-[#fca311]">Portfolio</div>
            </Link> */}
            {/* <Link to="/all-blogs">
              <div className="nav-link text-[#fca311]">Blogs</div>
            </Link> */}
            <Link to="/contact">
              <div className="nav-link text-[#fca311]">Contact</div>
            </Link>
          </div>
        </div>
        <div onClick={openNav}>
          <Bars3Icon className="w-8 h-8 md:hidden text-[#fca311] cursor-pointer" />
        </div>
      </div>

      {/* Mobile Nav */}
      <MobileNav nav={navOpen} closeNav={closeNav} />
    </>
  );
};

export default Nav;
