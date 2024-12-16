import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import AOS from "aos";
import "aos/dist/aos.css";

import "./Home.css";
import {
  Business,
  Button,
  CTA,
  Contact,
  Hero,
  ServiceSectionHead,
  ServicesCards,
  Testimonials,
} from "../../components";

const HomePage = () => {

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
      {/* For Seo ===>  */}
      <Helmet>
        <meta
          name="description"
          content="Where Imagination Meets Innovation in Web Development, Design, SEO,
            and Digital Mastery"
        />
        <link rel="canonical" href="https://www.brandinghopes.com/" />
      </Helmet>

      <div className=" landingContainer homeContainer flex flex-col items-center">
        <Hero />
        <ServiceSectionHead />
        <ServicesCards />

        <div className="landingContainer about-page text-center pt-[4rem] pb-[4rem]">
          <div className="lg:p-[100px] py-[30px]">
            <div className=" m-auto px-6 md:px-12 xl:px-6">
              <div className="md:flex md:gap-6 lg:items-center lg:gap-12">
                <div data-aos="zoom-in-right" className="md:5/12 lg:w-5/12 ">
                  <img
                    width={3240}
                    height={1820}
                    src="https://res.cloudinary.com/dpvxkqhi8/image/upload/v1710929235/branding%20hopes/Option_03_scel4o.jpg"
                    alt="image"
                    className="sm:w-[100%] "
                  />
                </div>
                <div className="md:7/12 lg:w-6/12">
                  <h2 className=" text-[#fca311] lg:text-[42px] font-bold md:text-4xl uppercase">
                    <span className="text-[#ffffff]">About</span> Branding Hopes
                  </h2>
                  <p className="text mt-6 text-white text-center">
                    At Branding Hopes, we are more than just a digital marketing
                    agency – we are your partners in success. With a passion for
                    creativity and a drive for results, we are dedicated to
                    helping businesses like yours thrive in the digital age.
                  </p>
                  <div className="mt-[2rem]">
                    <Button text="Read More" link="/about" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Business />
        <Testimonials />
        <CTA />
        <Contact />
      </div>
    </>
  );
};

export default HomePage;
