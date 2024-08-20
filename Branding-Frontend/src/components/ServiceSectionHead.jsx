import React from "react";

const ServiceSectionHead = () => {
  return (
    <div className="">
      <div className="flex flex-col items-center mt-[2rem]">
        <div className="mt-[20px] uppercase text-center flex flex-col gap-[10px]">
          <h2 className="text-[#fca311] text-5xl font-bold tracking-widest	 serviceTitle">
            Crafting Success in New{" "}
          </h2>
          <span className="text-[#e5e5e5] text-5xl font-bold tracking-widest	 serviceTitle">
            York's Digital Landscape{" "}
          </span>
        </div>
        <p className="p-[2rem] w-[40vw] mt-5 text-center sm:w-[80vw] serviceTag text-white">
          At <span className="text-[#fca311]"> Branding Hopes</span>, we offer a
          comprehensive range of digital marketing services designed to help
          your business succeed in today's competitive landscape. From
          increasing brand visibility to driving conversions and everything in
          between, we have the expertise and resources to deliver results that
          matter. Explore our services below:{" "}
        </p>
      </div>
    </div>
  );
};

export default ServiceSectionHead;
