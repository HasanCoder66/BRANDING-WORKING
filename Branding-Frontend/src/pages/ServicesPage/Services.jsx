// import React from "react";
// import data from "./servicesData.js";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import { useEffect } from "react";
// import serviceCover from "../../assets/serviceCover.png";
// import { BlogCard } from "../../components";
// import { Helmet } from "react-helmet-async";

// const AllServices = () => {
//   useEffect(() => {
//     AOS.init({
//       disable: false,
//       startEvent: "DOMContentLoaded",
//       initClassName: "aos-init",
//       animatedClassName: "aos-animate",
//       useClassNames: false,
//       disableMutationObserver: false,
//       debounceDelay: 50,
//       throttleDelay: 99,
//       offset: 120,
//       delay: 0,
//       duration: 1000,
//       easing: "ease",
//       once: true,
//       mirror: false,
//       anchorPlacement: "top-bottom",
//     });
//   }, []);
//   return (
//     <>
//       <Helmet>
//         <meta
//           name="description"
//           content="Grow your business with Branding Hopes. We offer expert web development, creative design, SEO, and digital marketing services to elevate your brand and drive growth."
//         />
//         <link rel="canonical" href="https://www.brandinghopes.com/services" />
//       </Helmet>

//       <div className="min-h-[100vh] landingContainer py-[70px] flex flex-col justify-center items-center gap-[20px]">
//         <div data-aos="zoom-in-left" className="w-[100vw] ">
//           <img
//             width={3240}
//             height={1840}
//             src={serviceCover}
//             alt="Service-Cover"
//             className="h-[50vh] w-[100%] object-cover	"
//           />
//         </div>
//         <div className="md:7/12 lg:w-6/12 flex flex-col items-center gap-[2rem] pt-[2rem]">
//           <h1 className="text-[2.5rem] tracking-widest	 text-[#fca311] uppercase text-center font-bold">
//             We Provides You These <span className="text-white">Services</span>
//           </h1>
//         </div>
//         <div className=" blogCardCont p-16 flex flex-wrap  pt-[3rem] items-center justify-evenly ">
//           {data.map((data, index) => (
//             <div
//               key={index}
//               style={{ width: "380px", height: "440px" }}
//               className="bg-[#ffffff] group/item overflow-hidden mb-10 cursor-pointer"
//             >
//               <BlogCard data={data} />
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default AllServices;

import React, { useEffect } from "react";
import data from "./servicesData.js";
import AOS from "aos";
import "aos/dist/aos.css";
import serviceCover from "../../assets/serviceCover.png";
import { BlogCard } from "../../components";
import { Helmet } from "react-helmet-async";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

const AllServices = () => {
  useEffect(() => {
    AOS.init({
      disable: false,
      startEvent: "DOMContentLoaded",
      initClassName: "aos-init",
      animatedClassName: "aos-animate",
      useClassNames: false,
      disableMutationObserver: false,
      debounceDelay: 50,
      throttleDelay: 99,
      offset: 120,
      delay: 0,
      duration: 1000,
      easing: "ease",
      once: true,
      mirror: false,
      anchorPlacement: "top-bottom",
    });
  }, []);

  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Grow your business with Branding Hopes. We offer expert web development, creative design, SEO, and digital marketing services to elevate your brand and drive growth."
        />
        <link rel="canonical" href="https://www.brandinghopes.com/services" />
      </Helmet>

      <div
        // className="min-h-screen landingContainer py-16 flex flex-col justify-center items-center gap-6"
        className="min-h-screen landingContainer pt-[12vh] flex flex-col justify-center items-center gap-6 overflow-x-hidden"
      >
        <a href="#">
          <div className="flex items-center justify-center bg-[#fca311] w-[50px] h-[50px] fixed bottom-4 right-4 rounded-lg ">
            <ArrowUpwardIcon className="text-white text-2xl" />
          </div>
        </a>
        <div data-aos="zoom-in-left" className="w-full">
          <img
            src={serviceCover}
            alt="Service-Cover"
            className="w-full max-h-[60vh] object-cover rounded-lg shadow-lg"
          />
        </div>

        <div className="w-full px-4 sm:px-8 md:w-8/12 lg:w-6/12 text-center pt-6">
          <h1
            className="text-[#fca311] uppercase font-bold tracking-widest"
            style={{ fontSize: "clamp(2rem, 5vw + 1rem, 3rem)" }}
          >
            We Provides You These <span className="text-white">Services</span>
          </h1>
        </div>

        <div
          className="w-full px-4 sm:px-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pt-10"
          // className="w-full px-4 sm:px-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pt-10"
        >
          {data.map((data, index) => (
            <div
              key={index}
              className="bg-white group/item rounded-lg shadow-md overflow-hidden cursor-pointer transition-transform transform hover:scale-105"
            >
              <BlogCard data={data} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AllServices;
