import React from "react";
import EditInTouchBtn from "./EditInTouchBtn";

export default function AboutLeftCard({ text, heading, imgLink }) {
  return (
    <div className="p-[4rem]">
      <div className="container m-auto px-6 text-white md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:5/12 lg:w-5/12">
            <img width={3240} height={1820} src={imgLink} alt="image" />
          </div>
          <div className="md:7/12 lg:w-6/12">
            <h2 className="text-2xl text-[#fca311] uppercase font-bold md:text-4xl">
              {heading}
            </h2>
            <p className="mt-6 text-white">{text}</p>
            <EditInTouchBtn linktoRoute="/contact" />
          </div>
        </div>
      </div>
    </div>
  );
}
