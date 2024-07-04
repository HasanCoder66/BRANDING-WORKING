import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function DropdownMenu({ closeNav }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => setIsOpen(true);
  const handleMouseLeave = () => setIsOpen(false);

  return (
    <div className="relative inline-block">
      <button
        className="transition"
        onMouseOver={handleMouseEnter}
        onClick={() => setIsOpen(!isOpen)}
      >
        Packages
      </button>
      {isOpen && (
        <ul
          className="absolute text-black z-10 bg-[#e5e5e5] rounded shadow w-[250px] mt-2 py-2 text-[15px] "
          onMouseLeave={handleMouseLeave}
        >
          <Link to="/services/web">
            <li
              className="hover:bg-[#fca311] hover:text-white px-4 py-2  "
              onClick={closeNav}
            >
              Web Design & Development
            </li>
          </Link>
          <Link to="/services/video">
            <li
              className="hover:bg-[#fca311] hover:text-white px-4 py-2"
              onClick={closeNav}
            >
              Video Animation
            </li>
          </Link>
          <Link to="/services/graphicdesign">
            <li
              className="hover:bg-[#fca311] hover:text-white px-4 py-2"
              onClick={closeNav}
            >
              Graphic Design
            </li>
          </Link>
          <Link to="/services/smm">
            <li
              className="hover:bg-[#fca311] hover:text-white px-4 py-2  "
              onClick={closeNav}
            >
              Social Media Management
            </li>
          </Link>
          <Link to="/services/seo">
            <li
              className="hover:bg-[#fca311] hover:text-white px-4 py-2"
              onClick={closeNav}
            >
              SEO
            </li>
          </Link>
          <Link to="/services/ppc">
            <li
              className="hover:bg-[#fca311] hover:text-white px-4 py-2"
              onClick={closeNav}
            >
              Pay Per Click (PPC)
            </li>
          </Link>
          <Link to="/services/contentwriting">
            <li
              className="hover:bg-[#fca311] hover:text-white px-4 py-2"
              onClick={closeNav}
            >
              Content Writing
            </li>
          </Link>
          <Link to="/services/blogging">
            <li
              className="hover:bg-[#fca311] hover:text-white px-4 py-2"
              onClick={closeNav}
            >
              Blogging
            </li>
          </Link>
          <Link to="/services/copywriting">
            <li
              className="hover:bg-[#fca311] hover:text-white px-4 py-2"
              onClick={closeNav}
            >
              Copywriting
            </li>
          </Link>
          <Link to="/services/typing">
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

export default DropdownMenu;
