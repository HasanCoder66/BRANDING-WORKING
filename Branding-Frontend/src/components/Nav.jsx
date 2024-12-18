import { Bars3Icon } from "@heroicons/react/16/solid";
import React, { useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";

const Nav = ({ openNav }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleMouseEnter = () => setIsOpen(true);
  const handleMouseLeave = () => setIsOpen(false);

  return (
    <>
      <div className="navContainer w-[100%] fixed z-[10000] flex items-center justify-between px-[10px] h-[11vh] bg-transparent shadow-md">
        <div className="md:w-[100%] w-fit md:flex items-center justify-between h-[100%] lg:mx-[50px]">
          <Link to="/">
            <div className=" cursor-pointer w-[100%]">
              <img
              width={308} 
              height={88}
                src="https://res.cloudinary.com/dpvxkqhi8/image/upload/v1710929421/branding%20hopes/Logo_PNG_u07vul.png"
                className="w-[220px] h-[80px] object-contain "
                alt="Branding Hopes"
              />
            </div>
          </Link>
          <div className="flex lg:gap-[50px] gap-[15px]">
            <Link to="/">
              <div className="nav-link text-[#fca311]">Home</div>
            </Link>
            <Link to="/services">
              <div className="nav-link text-[#fca311]">Services</div>
            </Link>
            <div
              onMouseOver={handleMouseEnter}
              onClick={() => setIsOpen(!isOpen)}
              className="nav-link text-[#fca311]"
            >
              <Dropdown setIsOpen={setIsOpen} isOpen={isOpen}/>
            </div>
            <Link to="/about">
              <div className="nav-link text-[#fca311]">About</div>
            </Link>
            <Link to="/portfolio">
              <div className="nav-link text-[#fca311]">Portfolio</div>
            </Link>
            <Link to="/all-blogs">
              <div className="nav-link text-[#fca311]">Blogs</div>
            </Link>

            <Link to="/Contact">
              <div className="nav-link text-[#fca311]">Contact</div>
            </Link>
          </div>
        </div>
        <div onClick={openNav}>
          <Bars3Icon className="w-[2rem] md:hidden h-[2rem]  text-[#fca311] cursor-pointer " />
        </div>
      </div>
    </>
  );
};

export default Nav;
