import React from "react";
import { Link } from "react-router-dom";

const ButtonTwo = ({ text, styles, link, styleClass }) => {
  return (
    <Link to={link}>
      <button
        type="button"
        className={`cursor-pointer bg-[#fca311] lg:w-50  text-white font-bold py-3 px-6 rounded-lg  hover:bg-[#14213d] transition ease-in-out duration-300 
    font-poppins  text-[18px]  outline-none  ${styles}`}
      >
        {text ? text : "Get Started"}
      </button>
    </Link>
  );
};

export default ButtonTwo;
