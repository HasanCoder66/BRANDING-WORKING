import React from "react";
import { BreadCrumbs, HorizontalBlogCard, VerticalBlogCard } from "../../components";
// import { FeaturedBlog } from '../../components'
import posts from "../AllBlogPage/BlogPostData.js";

const AllBlog = () => {
  return (
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
  );
};

export default AllBlog;
