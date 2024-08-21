import "./Home.css";
import { Helmet } from "react-helmet-async";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import {
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
                    src="https://res.cloudinary.com/dpvxkqhi8/image/upload/v1710929235/branding%20hopes/Option_03_scel4o.jpg"
                    alt="image"
                    className="sm:w-[100%] "
                  />
                </div>
                <div className="md:7/12 lg:w-6/12">
                  <h2 className=" text-[#fca311] lg:text-[42px] font-bold md:text-4xl uppercase">
                    About <span className="text-[#ffffff]">Branding</span> Hopes
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

        {/* <Testimonials /> */}
        <CTA />
        <Contact />
      </div>
    </>
  );
};

export default HomePage;
