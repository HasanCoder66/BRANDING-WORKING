import { Helmet } from "react-helmet-async";
import { TeamMatesCard } from "../../components";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutPage = () => {
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
      <Helmet>
        <meta
          name="description"
          content="At Branding Hopes, we transcend the conventional role of a digital
          marketing agency. We are your steadfast partners, committed to
          propelling your success to new heights."
        />
        <link rel="canonical" href="/about" />
      </Helmet>
      <div className="min-h-[100vh] landingContainer py-[70px] flex flex-col justify-center items-center gap-[20px]">
        <div data-aos="fade-down" className="w-[100vw] ">
          <img
            src="https://res.cloudinary.com/dpvxkqhi8/image/upload/v1710929235/branding%20hopes/Option_03_scel4o.jpg"
            alt="image"
            className="h-[50vh] w-[100%] object-cover	"
          />
        </div>
        <div className="md:7/12 lg:w-6/12 flex flex-col items-center gap-[2rem]">
          <h2 className="text-[3.5rem] tracking-widest	 text-[#fca311] text-center font-bold">
            About Branding Hopes
          </h2>
          <p className="text text-white text-center">
            At Branding Hopes, we transcend the conventional role of a digital
            marketing agency. We are your steadfast partners, committed to
            propelling your success to new heights. Fueled by an unwavering
            passion for creativity and an unyielding dedication to tangible
            results, we stand alongside businesses like yours, empowering them
            to not just survive, but truly thrive in the dynamic landscape of
            the digital age. With our strategic insights, innovative solutions,
            and personalized approach, we pave the way for your brand's
            remarkable journey towards enduring success.
          </p>
        </div>

        <div>
          <div className="flex justify-evenly flex-wrap gap-[15px]">
            <div data-aos="zoom-in-right">
              <TeamMatesCard
                imgUrl="https://avatars.githubusercontent.com/u/121274660?v=4"
                name="Rizzwan Ahmed"
                city="Karachi Pakistan"
                Role="Full Stack Developer "
                buttonContent="view more about"
              />
            </div>
            <div data-aos="zoom-in">
              <TeamMatesCard
                imgUrl="https://yt3.googleusercontent.com/y03yJ4RBXAk6ngMs-hFHRwtPDtIFiA83YWDNzqo-DBg4dAvERHCu_y-xuaganp0eM0PTskOQyg=s160-c-k-c0x00ffffff-no-rj"
                name="Muhammad Hasan"
                city="Karachi Pakistan"
                Role="Full Stack Developer"
                buttonContent="view more about"
              />
            </div>
            <div data-aos="zoom-out-up">
              <TeamMatesCard
                imgUrl="https://scontent.fkhi17-1.fna.fbcdn.net/v/t39.30808-6/305535406_131917102916717_6182782624124545240_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHYc1tRXjieO-hx7Of--eXT1VHiTDWZAdjVUeJMNZkB2D2XUoqeyS1A4M08oeAvHdbbFE0BCe4z5DzKMA7HpF2X&_nc_ohc=p8xAg-lIvPoQ7kNvgHgteuk&_nc_ht=scontent.fkhi17-1.fna&oh=00_AYAWWhI-0GUtTMXGo-XSrcOVJ7GkIMtqpAYFci1pl7kltg&oe=66B9BD01"
                name="Abdul Majeed "
                city="Karachi Pakistan"
                Role="Web Developer || Full stack Developer "
                buttonContent="view more about"
              />
            </div>
            <div data-aos="zoom-out-up">
              <TeamMatesCard
                imgUrl="https://scontent.fkhi17-1.fna.fbcdn.net/v/t39.30808-6/426701355_4621095901449668_5220658541142648378_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeE3q4gW8uxmLwigI_orWdkBvaFYqeo7YD29oVip6jtgPWKXoclEB7sBW70E5MkmRQxGDsJ-vtsDXv3y6XGCYatk&_nc_ohc=QdsyPBQuSSwQ7kNvgETUi1k&_nc_ht=scontent.fkhi17-1.fna&oh=00_AYBx__JymKDih7Rga7P9nw2BHRuRinF4NqwWJy2WHLkZZQ&oe=66B9CCB7"
                name="Mukhtar Ahmed "
                city="Karachi Pakistan"
                Role="Graphic Designer "
                buttonContent="view more about"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
