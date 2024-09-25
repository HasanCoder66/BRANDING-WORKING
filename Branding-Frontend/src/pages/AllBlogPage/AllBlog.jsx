import React from "react";
import {
  BreadCrumbs,
  HorizontalBlogCard,
  VerticalBlogCard,
} from "../../components";
import posts from "../AllBlogPage/BlogPostData.js";
import { Helmet } from "react-helmet-async";

const AllBlog = () => {
  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Explore the latest blogs from Branding Hopes on web development, design, SEO, and digital marketing. Stay updated with expert insights and industry trends."
        />
        <link rel="canonical" href="https://www.brandinghopes.com/all-blogs" />
      </Helmet>

      <div className="landingContainer pt-[5rem]">
        <div className="bg-white">
          <BreadCrumbs />
          <div className="flex flex-wrap gap-[20px] justify-around  p-[2rem]">
            {posts.map((item, index) => (
              <VerticalBlogCard key={index} data={item} />
            ))}
          </div>
          {/* <div className="flex flex-wrap gap-[20px] justify-around  p-[2rem]">
          {posts.map((item, index) => (
            <HorizontalBlogCard key={index} data={item} />
          ))}
        </div> */}
        </div>
      </div>
    </>
  );
};

export default AllBlog;
