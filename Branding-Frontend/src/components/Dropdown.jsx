import React, { useState } from "react";
import { isRouteErrorResponse, Link } from "react-router-dom";

function Dropdown({ setIsOpen, isOpen }) {
  console.log(isOpen);
  const handleMouseEnter = () => setIsOpen(true);
  const handleMouseLeave = () => setIsOpen(false);

  const closeNav = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block">
      <button
        className="transition"
        onMouseOver={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={() => setIsOpen(!isOpen)}
      >
        Packages
      </button>
      {isOpen && (
        <ul
          className="absolute text-black z-10 bg-[#e5e5e5] rounded shadow w-[255px] mt-2 py-2 text-[15px] "
          onMouseLeave={handleMouseLeave}
        >
          <Link to="/packages/web">
            <li
              className="hover:bg-[#fca311] hover:text-white px-4 py-2  "
              onClick={closeNav}
            >
              Web Design & Development
            </li>
          </Link>
          <Link to="/packages/video">
            <li
              className="hover:bg-[#fca311] hover:text-white px-4 py-2"
              onClick={closeNav}
            >
              Video Animation
            </li>
          </Link>
          <Link to="/packages/graphicdesign">
            <li
              className="hover:bg-[#fca311] hover:text-white px-4 py-2"
              onClick={closeNav}
            >
              Graphic Design
            </li>
          </Link>
          <Link to="/packages/smm">
            <li
              className="hover:bg-[#fca311] hover:text-white px-4 py-2  "
              onClick={closeNav}
            >
              Social Media Management
            </li>
          </Link>
          <Link to="/packages/seo">
            <li
              className="hover:bg-[#fca311] hover:text-white px-4 py-2"
              onClick={closeNav}
            >
             Search Engine Optimization (SEO)
            </li>
          </Link>
          <Link to="/packages/ppc">
            <li
              className="hover:bg-[#fca311] hover:text-white px-4 py-2"
              onClick={closeNav}
            >
              Pay Per Click (PPC)
            </li>
          </Link>
          <Link to="/packages/contentwriting">
            <li
              className="hover:bg-[#fca311] hover:text-white px-4 py-2"
              onClick={closeNav}
            >
              Content Writing
            </li>
          </Link>
          <Link to="/packages/blogging">
            <li
              className="hover:bg-[#fca311] hover:text-white px-4 py-2"
              onClick={closeNav}
            >
              Blogging
            </li>
          </Link>
          <Link to="/packages/copywriting">
            <li
              className="hover:bg-[#fca311] hover:text-white px-4 py-2"
              onClick={closeNav}
            >
              Copywriting
            </li>
          </Link>
          <Link to="/packages/typing">
            <li
              className="hover:bg-[#fca311] hover:text-white px-4 py-2"
              onClick={closeNav}
            >
              Typing
            </li>
          </Link>
        </ul>
      )}
    </div>
  );
}

export default Dropdown;
