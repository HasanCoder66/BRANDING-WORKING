import React from "react";
import { Helmet } from "react-helmet-async";
import { BlogCard } from "../../components";
const Portfolio = () => {
  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Where Imagination Meets Innovation in Web Development, Design, SEO,
            and Digital Mastery"
        />
        <link rel="canonical" href="/portfolio" />
      </Helmet>
      <div className="flex flex-wrap justify-evenly min-h-[100vh] py-[90px] landingContainer">
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </>
  );
};

export default Portfolio;
