import React from "react";
import AllServiceCardCmp from "./AllServiceCard";
import data from "./AllServiceCard/servicesData";
const AllServices = () => {
  return (
    <div className="min-h-[100vh] landingContainer py-[70px] flex flex-col justify-center items-center gap-[20px]">
    <div className="w-[100vw] ">
      <img
        src="https://res.cloudinary.com/dpvxkqhi8/image/upload/v1710948265/branding%20hopes/service_cover_hn6ehv.jpg"
        alt="image"
        className="h-[50vh] w-[100%] object-cover	"
      />
    </div>
    <div className="md:7/12 lg:w-6/12 flex flex-col items-center gap-[2rem]">
      <h2 className="text-[2.5rem] tracking-widest	 text-[#fca311] text-center font-bold">
         Branding Hopes Provides You Theese Services
      </h2>
      
    </div>
    <div className="">
      <div className="flex justify-evenly flex-wrap ">
        {data.map((data) => (
          <AllServiceCardCmp data={data} />
        ))}
      </div>
    </div>
  </div>
  );
};

export default AllServices;
