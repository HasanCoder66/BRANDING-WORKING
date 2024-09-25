import React from "react";
import "./styles/TeamMates.css";
const TeamMatesCard = ({ imgUrl, name, city, Role, buttonContent }) => {
  return (
    <div className="card-container mb-[1.5rem] px-[10px]">
      <img
        className="round w-[500px] object-cover"
        src={imgUrl}
        alt={name}
        width={160}
        height={160}
      />
      <h3 className="h3 text-[20px] font-bold text-[#ffffff]">{name}</h3>
      <h6 className="h6 text-[14px]">{city} </h6>
      <p className="p  mb-[1rem]">{Role}</p>
      <div className="buttons">
        <button className="primary mb-[1rem]">
          {buttonContent} {name}
        </button>
      </div>
    </div>
  );
};

export default TeamMatesCard;
