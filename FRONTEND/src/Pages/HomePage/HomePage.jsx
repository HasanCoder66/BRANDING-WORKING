import "./HomePage.css";
import Landing from "../../Components/Hero/Landing";
import BlogPage from "../BlogPage/BlogPage";
import ContactPage from "../ContactPage/ContactPage";
import About from "../../Components/About/About";
import ServiceSection from "../../Components/ServiceSection/ServiceSection";
import { Helmet, HelmetProvider } from "react-helmet-async";
const HomePage = () => {
  return (
  <>  
<Helmet>
        <meta
          name="description"
          content="Where Imagination Meets Innovation in Web Development, Design, SEO,
            and Digital Mastery"
        />
        <link rel='canonical' href='https://www.brandinghopes.com/'/>
      </Helmet>
    <div className="homeContainer flex flex-col items-center">
      <Landing />
      <ServiceSection />
      <div className="">
        <About />
      </div>
      <BlogPage />
      <ContactPage />
    </div>
    </>
  );
};

export default HomePage;
