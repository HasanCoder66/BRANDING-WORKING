import { Bars3Icon } from "@heroicons/react/16/solid";
import React from "react";
import "../../App.css";
import { Link } from "react-router-dom";
import DropdownMenu from "../../Components/Dropdown/Dropdown";

const Nav = ({ openNav }) => {
  return (
    <>
      {/* bg-[#14213d] */}
      <div className="navContainer w-[100%] fixed z-[10000] flex items-center justify-between px-[10px] h-[11vh] bg-transparent shadow-md">
        <div className="md:w-[100%] w-fit md:flex items-center justify-between h-[100%] lg:mx-[50px]">
          <Link to="/">
            <div className=" cursor-pointer w-[100%]">
              <img
                // src="https://res.cloudinary.com/dpvxkqhi8/image/upload/v1710850875/branding%20hopes/Icon_PNG-02_ypgqyn.png "
                src="https://res.cloudinary.com/dpvxkqhi8/image/upload/v1710929421/branding%20hopes/Logo_PNG_u07vul.png"
                className="w-[220px] h-[80px] object-contain " alt="Branding Hopes"
              />
              {/* BrandingHopes */}
            </div>
          </Link>
          <div className="flex lg:gap-[50px] gap-[15px]">
            <Link to="/">
              <div className="nav-link text-[#fca311]">Home</div>
            </Link>
            <Link to='/services'>
              <div className="nav-link text-[#fca311]">Services</div>
            </Link>
            <div className="nav-link text-[#fca311]">
              <DropdownMenu />
            </div>
            <Link to="/about">
              <div className="nav-link text-[#fca311]">About</div>
            </Link>
            <Link to='/portfolio'>
              <div className="nav-link text-[#fca311]">Portfolio</div>
            </Link>
            <Link to="/blog">
              <div className="nav-link text-[#fca311]">Blog</div>
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
