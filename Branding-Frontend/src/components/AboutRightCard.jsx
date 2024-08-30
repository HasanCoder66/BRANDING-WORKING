import React from "react";
import ourMission from '../assets/mission.png'
export default function AboutRightCard({text, heading}) {
  console.log(text);
  return (
    <div className="p-[4rem] ">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:7/12 lg:w-6/12">
            <h2 className="text-2xl text-[#fca311] font-bold md:text-4xl">
             {heading}
            </h2>
            <p className="mt-6 text-white">
              {text}
            </p>
            {/* <p className="mt-4 text-white">
              Nobis minus voluptatibus pariatur dignissimos libero quaerat iure
              expedita at? Asperiores nemo possimus nesciunt dicta veniam
              aspernatur quam mollitia.
            </p> */}
          </div>
          <div className="md:5/12 lg:w-5/12">
            <img
              src={ourMission}
              alt="ourMission"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
