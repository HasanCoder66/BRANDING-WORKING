import React from "react";
import { Helmet } from "react-helmet-async";
import { BlogCard } from "../../components";

import CardGroup from "react-bootstrap/CardGroup";
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
        <CardGroup>
          <BlogCard
            name="Card title 1"
            desc="This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
            // imgUrl={blogImg1}
          />
          {/* <BlogCard
            name="Card title 2"
            desc="This card has supporting text below as a natural lead-in to additional content."
            // imgUrl={blogImg1}
          />
          <BlogCard
            name="Card title 3"
            desc="This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action."
            // imgUrl={blogImg1}
          /> */}
        </CardGroup>
      </div>
    </>
  );
};

export default Portfolio;
