import {
  CodeBracketSquareIcon,
  CommandLineIcon,
  RocketLaunchIcon,
} from "@heroicons/react/20/solid";
import React from "react";
import Button from "./Button";

const ServicesCards = () => {
  return (
    <div className=" pt-[2rem]">
      <p className=" heading ">
        Our Key <span className="text-[#fca311]">Services</span>
      </p>
      <div className="pt-[2rem] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[80%] mx-auto items-center gap-[3rem] mt-[4rem] text-white ">
        <div data-aos="fade-right">
          <div className=" h-[350px] bg-[#14213d] hover:scale-110 transform transition-all duration-300 hover:-rotate-6 uppercase font-semibold text-center p-[2rem] rounded-lg">
            <CodeBracketSquareIcon className="w-[6rem] h-[6rem] mx-auto text-[#fca311]" />
            <h2 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]   ">
              Web Development
            </h2>
            <p className="text-[15px] text-white font-normal">
              WordPress, React, Shopify, Custom Solutions	
              {/* Enhance Your Online Presence with Innovative Frontend Design.
              Crafting visually appealing, user-friendly interfaces for a
              standout web experience. */}
            </p>
          </div>
        </div>

        <div data-aos="zoom-in" data-aos-delay="300">
          <div className="bg-[#14213d] h-[350px] hover:scale-110 transform transition-all duration-300 hover:-rotate-6 uppercase font-semibold text-center p-[2rem] rounded-lg">
            <RocketLaunchIcon className="w-[6rem] h-[6rem] mx-auto text-[#fca311] " />
            <h2 className=" text-white text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]   ">
              Digital Marketing
            </h2>
            <p className="text-[15px] text-[#fff] font-normal   ">
              {/* Streamline Your Operations with Robust Backend Solutions. Building
              scalable, efficient server-side architectures that power your
              applications with reliability and performance. */}
              SEO, Social Media Ads, Google Ads, Content Marketing


            </p>
          </div>
        </div>

        <div data-aos="fade-left" data-aos-delay="500">
          <div className="bg-[#14213d] h-[350px] hover:scale-110 transform transition-all duration-300 hover:-rotate-6 uppercase font-semibold text-center p-[2rem] rounded-lg">
            <CommandLineIcon className="w-[6rem] h-[6rem] mx-auto text-[#fca311] " />
            <h2 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]   ">
              Graphic Designing
            </h2>
            <p className="text-[15px] text-[#fff] font-normal">
              {/* Integrating frontend and backend technologies to deliver
              outstanding, end-to-end web solutions that drive performance and
              user engagement. */}
              Logos, Social Media Posts, Banners, Branding Kits	
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center pt-[4rem]">
        <Button text=" View More Services" link="/services" />
      </div>
    </div>
  );
};

export default ServicesCards;
