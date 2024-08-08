// import React from "react";
// import TestimonialSlider from "./TestimonialSlider";

// const Testimonials = () => {
//   return (
//     <div className="pt-[4rem] md:first-line:pt-[8rem] ">
//       <h1 className="heading">
//         Client <span className="text-yellow-400">Review</span>
//       </h1>
//       <div className="pt-[5rem] pb-[4rem] w-[80%] mx-auto ">
//         <TestimonialSlider />
//       </div>
//     </div>
//   );
// };

// export default Testimonials;

import React from "react";
import TestimonialSlider from "./TestimonialSlider";
import CarouselCmp from "./CarouselCmp";

const Testimonials = () => {
  return (
    <div className="pt-16 md:pt-32">
      <h1 className="heading">
        Client <span className="text-[#fca311]">Review</span>
      </h1>
      <div className="pt-20 pb-16 w-4/5 mx-auto">
        <TestimonialSlider />
        {/* <CarouselCmp /> */}
      </div>
    </div>
  );
};

export default Testimonials;
