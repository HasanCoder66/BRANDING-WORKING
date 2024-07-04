import Button from "../../Components/ButtonNew/Button";
import TeamMatesCard from "../../Components/TeamMates/TeamMatesCards";
import { Helmet } from "react-helmet-async";
import TeamMateData from "../../Components/TeamMates/data";
const AboutPage = () => {
  console.log(TeamMateData);
  return (
    <>
    <Helmet>
        <meta
          name="description"
          content="At Branding Hopes, we transcend the conventional role of a digital
          marketing agency. We are your steadfast partners, committed to
          propelling your success to new heights."
        />
        <link rel='canonical' href='/about'/>
      </Helmet>
    <div className="min-h-[100vh] landingContainer py-[70px] flex flex-col justify-center items-center gap-[20px]">
      <div className="w-[100vw] ">
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
          results, we stand alongside businesses like yours, empowering them to
          not just survive, but truly thrive in the dynamic landscape of the
          digital age. With our strategic insights, innovative solutions, and
          personalized approach, we pave the way for your brand's remarkable
          journey towards enduring success.
        </p>
      </div>
      <div className="">
        <div className="flex justify-evenly flex-wrap gap-[15px]">
          {TeamMateData.map((data) => (
            <TeamMatesCard data={data} />
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default AboutPage;
