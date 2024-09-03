import React from "react";
import styles from "./styles/style.js";
import ButtonTwo from "./ButtonTwo.jsx";
import { Link } from "react-router-dom";
const TeamMembersCard = ({ imgUrl, name, city, Role, desc, visitLink }) => {
  return (
    <div
      //   data-aos="zoom-in-right"
      className={`w-[90%] bg-white ${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col rounded-[20px] box-shadow m-auto`}
    >
      <div className="flex items-center gap-[20px]">
        <div className="flex items-center w-[50%] ">
          <div className="">
            <img
              src={imgUrl}
              alt={`${name}s Images`}
              title={name}
              className="rounded-full w-[150px] h-[150px] border-[4px] border-[#fca311]"
            />
          </div>
          <div className="flex flex-col">
            <p className="text-[#fca311] pl-[20px] font-bold text-[20px] mb-[2px] uppercase">
              {name}
            </p>
            <p className="pl-[20px] mb-[2px] font-medium">{Role}</p>
            <p className="pl-[20px] mb-[2px] font-medium">{city}</p>
            <a href={visitLink} target="_blank" rel="noopener noreferrer">
              <p className="pl-[20px] mb-[2px] cursor-pointer font-medium">
                Visit Linkedin Profile
              </p>
            </a>
          </div>
        </div>
        <div className=" w-[50%]">{desc}</div>
      </div>
    </div>
  );
};

export default TeamMembersCard;
