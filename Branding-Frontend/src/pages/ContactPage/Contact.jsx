import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Contact } from "../../components";
import AOS from "aos";
import "aos/dist/aos.css";

const ContactPage = () => {
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
          content="Connect with Branding Hopes! Fill out our contact form to discuss your web development, design, or digital marketing needs. Let's bring your vision to life."
        />
        <link rel="canonical" href="https://www.brandinghopes.com/Contact" />
      </Helmet>

      <div
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        className="landingContainer min-h-[100vh] py-[90px] "
      >
        <div className="pt-[4rem]">
          <Contact />
        </div>
      </div>
    </>
  );
};

export default ContactPage;
