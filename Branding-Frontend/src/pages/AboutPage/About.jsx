import { Helmet } from "react-helmet-async";
import {
  AboutLeftCard,
  AboutRightCard,
  TeamMatesCard,
  TeamMembersCard,
} from "../../components";
import { useEffect, useState } from "react";
import AOS from "aos";
import amc from "../../assets/amc.jpg";
import munna from "../../assets/munna.jpg";
import hasan from "../../assets/hasan.png";
import rizzwan from "../../assets/rizz.jpeg";
import ahsan from "../../assets/ahsan.png";
import aboutCover from "../../assets/aboutCover.png";
import ourMission from "../../assets/mission.png";
import ourValues from "../../assets/values.png";
import ourTeam from "../../assets/team.png";
import whyChooseUs from "../../assets/whychoose.png";
import ourService from "../../assets/service.png";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import "aos/dist/aos.css";

const AboutPage = () => {
  const [isMobile, setIsMobile] = useState(false);

  var firstBoxText = `At Branding Hopes, our mission is to empower businesses with innovative digital marketing solutions. We aim to drive growth and success while helping clients navigate the digital landscape.`;
  var secondBoxText = `We believe in integrity, fostering trust with our clients and partners. Innovation drives us to enhance our services continuously, while collaboration and excellence are at the core of our approach.`;
  var thirdBoxText = `Branding Hopes offers a range of digital marketing services, including web design, development, and SEO. Our expertise boosts online visibility and brand presence through social media management.`;
  var fourthBoxText = `Choosing Branding Hopes means partnering with a passionate team dedicated to your success. We combine industry knowledge with creative strategies to deliver measurable results through a personalized approach.`;
  var fifthBoxText = `Our team consists of skilled professionals with diverse backgrounds in marketing, design, and technology. We foster a culture of continuous learning to stay ahead of industry trends and achieve your goals. Feel free to make any adjustments to better fit your brand!`;

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

  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="At Branding Hopes, we go beyond digital marketing. As your dedicated partner, we are committed to driving your brand's success and creating impactful growth."
        />
        <link rel="canonical" href="https://www.brandinghopes.com/about" />
      </Helmet>

      <div className="min-h-[100vh] landingContainer py-[70px] flex flex-col justify-center items-center gap-[20px]">
        <a href="#">
          <div className="flex items-center justify-center bg-[#fca311] w-[50px] h-[50px] fixed bottom-4 right-4 rounded-lg ">
            <ArrowUpwardIcon className="text-white text-2xl" />
          </div>
        </a>
        <div data-aos="fade-down" className="w-full">
          <img
            src={aboutCover}
            alt="About-Cover"
            className="w-full max-h-[60vh] object-cover"
          />
        </div>

        <div className="flex flex-col items-center gap-[2rem] lg:px-[8rem] pt-[2rem]">
          <h1
            className="tracking-widest uppercase text-[#fca311] text-center font-bold"
            style={{ fontSize: "clamp(2rem, 5vw + 1rem, 3.5rem)" }}
          >
            <span className="text-white">About </span> Branding Hopes
          </h1>

          <p
            className="text-white text-center"
            style={{ fontSize: "clamp(1rem, 2vw + 0.5rem, 1.2rem)" }}
          >
            At <span className="text-[#fca311]">Branding Hopes</span>, we
            transcend the conventional role of a digital marketing agency...
          </p>
        </div>

        <div>
          <AboutRightCard
            text={firstBoxText}
            heading="Our Mission"
            imgLink={ourMission}
          />
          <AboutLeftCard
            text={secondBoxText}
            heading="Our Values"
            imgLink={ourValues}
          />
          <AboutRightCard
            text={thirdBoxText}
            heading="Our Services"
            imgLink={ourService}
          />
          <AboutLeftCard
            text={fourthBoxText}
            heading="Why Choose Us?"
            imgLink={whyChooseUs}
          />
          <AboutRightCard
            text={fifthBoxText}
            heading="Our Team"
            imgLink={ourTeam}
          />
          
        </div>

        <div className="mt-[4rem]">
          <h2
            className="tracking-widest uppercase text-[#fca311] text-center font-bold"
            style={{ fontSize: "clamp(2rem, 5vw + 1rem, 3rem)" }}
          >
            <span className="text-white">Meet Our </span> Team Members
          </h2>
        </div>

        {isMobile ? (
          <div className="flex justify-evenly flex-wrap gap-[15px] pt-[6rem]">
            {[
              {
                imgUrl: rizzwan,
                name: "Rizzwan Ahmed",
                city: "Karachi, Pakistan",
                Role: "Full Stack Developer",
              },
              {
                imgUrl: "https://avatars.githubusercontent.com/u/140997677?v=4",
                name: "Muhammad Hasan",
                city: "Karachi, Pakistan",
                Role: "Full Stack Developer",
              },
              {
                imgUrl: ahsan,
                name: "Muhammad Ahsan",
                city: "Karachi, Pakistan",
                Role: "Digital Marketer",
              },
              {
                imgUrl: amc,
                name: "Abdul Majeed",
                city: "Karachi, Pakistan",
                Role: "Web Developer",
              },
              {
                imgUrl: munna,
                name: "Mukhtar Ahmed",
                city: "Karachi, Pakistan",
                Role: "Graphic Designer",
              },
            ].map((member, idx) => (
              <div key={idx} data-aos="zoom-in">
                <TeamMatesCard {...member} />
              </div>
            ))}
          </div>
        ) : (
          <div>
            <TeamMembersCard
              imgUrl="https://avatars.githubusercontent.com/u/140997677?v=4"
              name="Muhammad Hasan"
              city="Karachi, Pakistan"
              Role="Full Stack Developer"
              desc="Experienced MERN Stack Developer with expertise in MongoDB,
 Express.js, React.js, and Node.js. Seeking opportunities to expand
 my skills and contribute to innovative web development projects."
              visitLink="https://www.linkedin.com/in/hasancoder66/"
            />

            <TeamMembersCard
              imgUrl={ahsan}
              name="Muhammad Ahsan"
              city="Karachi, Pakistan"
              Role="Digital Marketer"
              desc="I’m Ahsan Ashraf, a passionate Digital Marketer focused on helping brands grow through effective digital strategies, creative content, and result-driven marketing. I’m always exploring new trends and strategies to build a stronger digital presence and achieve meaningful results."
              visitLink="https://www.linkedin.com/in/hafiz-ahsan-ashraf-3b21b0405/"
            />


            <TeamMembersCard
              imgUrl={rizzwan}
              name="Rizzwan Ahmed"
              city="Karachi, Pakistan"
              Role="Full Stack Developer"
              desc="👨‍💻 I'm Rizwan Ahmed👋, an Undergraduate University student, I'm currently pursuing a Software Engineering Degree from the University of Karachi."
              visitLink="https://www.linkedin.com/in/rizzwan-ahmed-1ba968247/"
            />
            <TeamMembersCard
              imgUrl={munna}
              name="Mukhtar Ahmed"
              city="Karachi, Pakistan"
              Role="Web & Graphic Designer"
              desc="A skilled Graphic Designer with expertise Adobe photoshop, Adobe Illustrator & many more.."
              visitLink="https://www.linkedin.com/in/mukhtar-ahmed-al-aziz-8372ab257/"
            />
            <TeamMembersCard
              imgUrl={amc}
              name="Abdul Majeed"
              city="Karachi, Pakistan"
              Role="Web Developer"
              desc="A skilled developer with expertise in creating scalable web applications using modern frameworks like React and Node.js. Passionate about delivering high-quality, user-friendly solutions."
              visitLink="https://www.linkedin.com/in/abdul-majeed-0b0bb0a5/"
            />
            
          </div>
        )}
      </div>
    </>
  );
};

export default AboutPage;
