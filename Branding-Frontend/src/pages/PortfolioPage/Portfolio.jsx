import React, { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import serviceCover from "../../assets/serviceCover.png";
import {  HorizontalPortfolioCard, VerticalMobilePortfolioCard } from "../../components";

const PortfolioPage = () => {

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      // Check if the screen width is less than the breakpoint for medium devices (768px)
      setIsMobile(window.innerWidth < 768);
    };

    // Add event listener to handle window resize
    window.addEventListener("resize", handleResize);

    // Initial check
    handleResize();

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    AOS.init({
      // Global settings:
      disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
      initClassName: "aos-init", // class applied after initialization
      animatedClassName: "aos-animate", // class applied on animation
      useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
      disableMutationObserver: false, // disables automatic mutations' detections (advanced)
      debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 120, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 1000, // values from 0 to 3000, with step 50ms
      easing: "ease", // default easing for AOS animations
      once: true, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
    });
  }, []);
  return (
    <div className="min-h-[100vh] landingContainer py-[70px] flex flex-col justify-center items-center gap-[20px]">
      <div data-aos="zoom-in-left" className="w-[100vw] ">
        <img
          // src="https://res.cloudinary.com/dpvxkqhi8/image/upload/v1710948265/branding%20hopes/service_cover_hn6ehv.jpg"
          src={serviceCover}
          alt="Service-Cover"
          className="h-[50vh] w-[100%] object-cover	"
        />
      </div>
      <div className="md:7/12 lg:w-6/12 flex flex-col items-center gap-[2rem] pt-[2rem]">
        <h2 className="text-[2.5rem] tracking-widest	 text-[#fca311] uppercase text-center font-bold">
          Our Client Completed<span className="text-white"> Projects Work</span>
        </h2>
      </div>
      <div className=" blogCardCont p-16 flex flex-wrap  pt-[3rem] items-center justify-evenly ">
        {isMobile ? <VerticalMobilePortfolioCard /> : <HorizontalPortfolioCard />}
        
        
        {/* {data.map((data, index) => (
          <div
            key={index}
            style={{ width: "380px", height: "440px" }}
            className="bg-[#ffffff] group/item overflow-hidden mb-10 cursor-pointer"
          >
            <BlogCard data={data} />
          </div>
        ))} */}
      </div>
    </div>
  );
};

export default PortfolioPage;