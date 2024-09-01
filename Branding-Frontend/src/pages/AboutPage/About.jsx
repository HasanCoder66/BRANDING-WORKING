import { Helmet } from "react-helmet-async";
import { AboutLeftCard, AboutRightCard, TeamMatesCard } from "../../components";
import { useEffect } from "react";
import AOS from "aos";
import amc from "../../assets/amc.jpg";
import munna from "../../assets/munna.jpg";
import hasan from "../../assets/hasan.png";
import rizzwan from "../../assets/rizz.jpeg";
import aboutCover from "../../assets/aboutCover.png";
import ourMission from '../../assets/mission.png'
import ourValues from '../../assets/values.png'
import ourTeam from '../../assets/team.png'
import whyChooseUs from '../../assets/whychoose.png'
import ourService from '../../assets/service.png'
import "aos/dist/aos.css";

const AboutPage = () => {
  var firstBoxText = `At Branding Hopes, our mission is to empower businesses with innovative digital marketing solutions. We aim to drive growth and success while helping clients navigate the digital landscape.
 `;
  var secondBoxText = `We believe in integrity, fostering trust with our clients and partners. Innovation drives us to enhance our services continuously, while collaboration and excellence are at the core of our approach.

 `;
  var thirdBoxText = `Branding Hopes offers a range of digital marketing services, including web design, development, and SEO. Our expertise boosts online visibility and brand presence through social media management.
 `;
  var fourthBoxText = `Choosing Branding Hopes means partnering with a passionate team dedicated to your success. We combine industry knowledge with creative strategies to deliver measurable results through a personalized approach.
 `;
  var fifthBoxText = `Our team consists of skilled professionals with diverse backgrounds in marketing, design, and technology. We foster a culture of continuous learning to stay ahead of industry trends and achieve your goals.
 Feel free to make any adjustments to better fit your brand!
 `;
  let ourMissionImg = ourMission
  let ourValuesImg = ourValues
  let ourTeamImg = ourTeam
  let whyChooseUsImg = whyChooseUs
  let ourServiceImg = ourService
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
            src={aboutCover}
            // src="https://res.cloudinary.com/dpvxkqhi8/image/upload/v1710929235/branding%20hopes/Option_03_scel4o.jpg"
            alt="About-Cover"
            className="h-[50vh] w-[100%] object-cover	"
          />
        </div>
        {/*  */}
        {/* md:7/12 lg:w-6/12  */}
        <div className="flex flex-col items-center gap-[2rem] lg:px-[8rem] pt-[2rem]">
          <h2 className="text-[3.5rem] tracking-widest	uppercase text-[#fca311] text-center font-bold">
            About Branding <span className="text-white">Hopes</span>
          </h2>
          <p className="text text-white text-center">
            At <span className="text-[#fca311]">Branding Hopes</span>, we
            transcend the conventional role of a digital marketing agency. We
            are your steadfast partners, committed to propelling your success to
            new heights. Fueled by an unwavering passion for creativity and an
            unyielding dedication to tangible results, we stand alongside
            businesses like yours, empowering them to not just survive, but
            truly thrive in the dynamic landscape of the digital age. With our
            strategic insights, innovative solutions, and personalized approach,
            we pave the way for your brand's remarkable journey towards enduring
            success.
          </p>
        </div>

        <div className="">
          <div className="">
            <AboutRightCard text={firstBoxText} heading="Our Mission" imgLink={ourMission}/>
            <AboutLeftCard
              text={secondBoxText} heading="Our Values"   imgLink={ourMission}  />
            <AboutRightCard text={thirdBoxText} heading="Our Services"/>
            {/* imgLink={cardImgLink} */}
            <AboutLeftCard text={thirdBoxText} heading="Why Choose Us?
"/>
            <AboutRightCard text={fifthBoxText} heading="Our Team"/>
          </div>
        </div>

        {/* TeamMates Cards ===> */}
        <div>
          <div className="flex justify-evenly flex-wrap gap-[15px] pt-[6rem]">
            <div data-aos="zoom-in-right">
              <TeamMatesCard
                imgUrl={rizzwan}
                name="Rizzwan Ahmed"
                city="Karachi Pakistan"
                Role="Full Stack Developer "
                buttonContent="view more about"
              />
            </div>
            <div data-aos="zoom-in">
              <TeamMatesCard
                // imgUrl={hasan}
                imgUrl="https://yt3.googleusercontent.com/y03yJ4RBXAk6ngMs-hFHRwtPDtIFiA83YWDNzqo-DBg4dAvERHCu_y-xuaganp0eM0PTskOQyg=s160-c-k-c0x00ffffff-no-rj"
                name="Muhammad Hasan"
                city="Karachi Pakistan"
                Role="Full Stack Developer"
                buttonContent="view more about"
              />
            </div>

            <div data-aos="zoom-out-up">
              <TeamMatesCard
                imgUrl={amc}
                name="Abdul Majeed "
                city="Karachi Pakistan"
                Role="Web Developer || Full stack Developer "
                buttonContent="view more about"
              />
            </div>
            <div data-aos="zoom-out-up">
              <TeamMatesCard
                imgUrl={munna}
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
