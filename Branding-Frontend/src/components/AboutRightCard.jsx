import React from "react";
import EditInTouchBtn from "./EditInTouchBtn";

export default function AboutRightCard({ text, heading, imgLink, lastLine }) {
  return (
    <div className="p-4 sm:p-6 md:p-8 lg:p-12">
      <div className="container m-auto px-4 sm:px-6 md:px-8">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-8">
          {/* Text Section */}
          <div className="w-full lg:w-6/12">
            <h2
              className="text-[#fca311] font-bold uppercase"
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
            {lastLine && (
              <p
                className="mt-2 text-white"
                style={{ fontSize: "clamp(1rem, 2vw + 0.5rem, 1.2rem)" }}
              >
                {lastLine}
              </p>
            )}
            <EditInTouchBtn linktoRoute="/contact" />
          </div>

          {/* Image Section */}
          <div className="w-full lg:w-6/12">
            <img
              src={imgLink}
              alt={heading}
              className="w-full h-auto max-h-[400px] object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}