import React from "react";
import EditInTouchBtn from "./EditInTouchBtn";

export default function AboutLeftCard({ text, heading, imgLink }) {
  return (
    <div className="p-4 sm:p-6 md:p-8 lg:p-12">
      <div className="container m-auto px-4 sm:px-6 md:px-8 text-white">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          {/* Image Section */}
          <div className="w-full lg:w-6/12">
            <img
              src={imgLink}
              alt={heading}
              className="w-full h-auto max-h-[400px] object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Text Section */}
          <div className="w-full lg:w-6/12">
            <h2
              className="text-[#fca311] uppercase font-bold"
              style={{ fontSize: "clamp(1.5rem, 3vw + 1rem, 2.5rem)" }}
            >
              {heading}
            </h2>
            <p
              className="mt-4 text-white"
              style={{ fontSize: "clamp(1rem, 2vw + 0.5rem, 1.2rem)" }}
            >
              {text}
            </p>
            <EditInTouchBtn linktoRoute="/contact" />
          </div>
        </div>
      </div>
    </div>
  );
}
