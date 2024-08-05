import "./HomePage.css";
import Landing from "../../Components/Hero/Landing";
import BlogPage from "../BlogPage/BlogPage";
import ContactPage from "../ContactPage/ContactPage";
import About from "../../Components/About/About";
import ServiceSection from "../../Components/ServiceSection/ServiceSection";
import { Helmet, HelmetProvider } from "react-helmet-async";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const HomePage = () => {
  useEffect (()=> {
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
  },[])
  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Where Imagination Meets Innovation in Web Development, Design, SEO,
            and Digital Mastery"
        />
        <link rel="canonical" href="https://www.brandinghopes.com/" />
      </Helmet>
      <div className="homeContainer flex flex-col items-center">
        <Landing />
        <ServiceSection />
        <div className="">
          <About />
        </div>
        {/* <BlogPage /> */}
        <ContactPage />
      </div>
    </>
  );
};

export default HomePage;
