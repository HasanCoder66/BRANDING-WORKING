import React from "react";
import './TeamMates.css'
const TeamMatesCard = ({ data }) => {
  const { name, imgUrl, city, Role, buttonContent } = data
  // console.log(name);
  return (
    <div className="card-container mb-[1.5rem] px-[10px]">
      <span className="pro">PRO</span>
      <img
        className="round w-[500px] object-cover"
        src={imgUrl}
        alt={name}
      />
      <h3 className="h3 text-[20px] font-bold text-[#ffffff]">{name}</h3>
      <h6 className="h6 text-[14px]">{city} </h6>
      <p className="p  mb-[1rem]">
        {Role}
      </p>
      <div className="buttons">
        <button className="primary mb-[1rem]">{buttonContent} {name}</button>
        {/* <button className="primary ghost">Following</button> */}
      </div>

    </div>
    // <div className="max-w-xs rounded overflow-hidden shadow-lg">
    //   <img className="w-full" src={imageUrl} alt={name} />
    //   <div className="px-6 py-4">
    //     <div className="font-bold text-xl mb-2">{name}</div>
    //     <p className="text-gray-700 text-base">{position}</p>
    //   </div>
    //   <div className="px-6 pt-4 pb-2">
    //     <a href={profileLink} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Profile</a>
    //     {/* Add more profile links here if needed */}
    //   </div>
    // </div>
  );
};

export default TeamMatesCard;
