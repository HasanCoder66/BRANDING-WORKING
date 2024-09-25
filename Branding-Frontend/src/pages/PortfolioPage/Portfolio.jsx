import React, { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import portfolioCover from "../../assets/PortfolioCover.png";
import {
  HorizontalPortfolioCard,
  VerticalMobilePortfolioCard,
} from "../../components";
import { Helmet } from "react-helmet-async";

const PortfolioPage = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
          content="Explore Branding Hopes' portfolio of web development, design, SEO, and digital marketing projects. Discover impactful solutions to elevate your brand and drive success."
        />
        <link rel="canonical" href="https://www.brandinghopes.com/portfolio" />
      </Helmet>

      <div className="min-h-[100vh] landingContainer py-[70px] flex flex-col justify-center items-center gap-[20px]">
        <div data-aos="zoom-in-left" className="w-[100vw] ">
          <img
            src={portfolioCover}
            alt="portfolioCover"
            width={3240}
            height={1820}
            className="h-[50vh] w-[100%] object-cover	"
          />
        </div>
        <div className="md:7/12 lg:w-6/12 flex flex-col items-center gap-[2rem] pt-[2rem]">
          <h1 className="text-[2.5rem] tracking-widest	 text-[#fca311] uppercase text-center font-bold">
            Our Client Completed
            <span className="text-white"> Projects Work</span>
          </h1>
        </div>
        <div className=" blogCardCont p-16 flex flex-wrap  pt-[3rem] items-center justify-evenly ">
          {isMobile ? (
            <VerticalMobilePortfolioCard />
          ) : (
            <HorizontalPortfolioCard />
          )}
        </div>
      </div>
    </>
  );
};

export default PortfolioPage;
