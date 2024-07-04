import React from "react";
import PortCard from "../../Components/PortfolioCard/PortCard";
import cardData from "../../Components/PortfolioCard/cardDataPort";
import { Helmet } from "react-helmet-async";
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
        {cardData.map((data) => (
          <PortCard data={data} />
        ))}
      </div>
    </>
  );
};

export default Portfolio;
