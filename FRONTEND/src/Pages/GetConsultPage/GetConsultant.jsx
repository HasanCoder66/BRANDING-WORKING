import React from "react";
import InputCmp from "../../Components/InputCmp/InputCmp";
import TextareaCmp from "../../Components/TextAreaCmp/TextAreaCmp";

const GetConsultant = () => {
  return (
    <div className='lg:p-[5rem] lg:pr-[5rem] px-[2rem] pb-[3rem] h-[100vh] bg-[url("https://res.cloudinary.com/dpvxkqhi8/image/upload/v1708534584/branding%20hopes/banner_b0pbcx.jpg")]  pt-[12vh] bg-cover bg-center bg-[#18252b] '>
      <div>
        <h1 className="text-[35px] md:text-[50px] text-[#fca311]  font-bold ">
          Get
          <span className="text-white"> Free</span>
          <span className=" text-[#e5e5e5]"> Consultancy!</span>
        </h1>
        <p className="mt-[1.5rem] text-[20px] text-[#ffffff]">
          We have experts available to provide guidance for you.
        </p>
        <div className="flex lg:flex-row flex-col mt-[2rem] gap-5">
          <InputCmp type="text" label="Enter Your Name" />
          <InputCmp type="Number" label="Enter Your Number" />
          <InputCmp type="email" label="Enter Your email" />
        </div>
        <div className="mt-[2rem]">
          <TextareaCmp />
        </div>
        <div className="right flex-1 flex justify-start items-center mt-[2rem]">
        <button className="cursor-pointer  md:w-32  mt-[1rem] bg-[#e5e5e5] text-[#fca311] font-bold py-3 px-6 rounded-lg  hover:bg-[#fca311] hover:text-[#fafafa] transition ease-in-out duration-300">
                  <span>Submit</span>
                </button>
        </div>
      </div>
    </div>
  );
};

export default GetConsultant;
