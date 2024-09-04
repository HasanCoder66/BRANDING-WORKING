import React from "react";
import { BreadCrumbs, VerticalBlogCard } from "../../components";
// import { FeaturedBlog } from '../../components'
import posts from "../AllBlogPage/BlogPostData.js";

const AllBlog = () => {
  return (
    <div className="landingContainer pt-[5rem]">
      <div className="bg-white">
        <BreadCrumbs />
        {/*  */}
        {/* <AllBlogsCard postData={posts}/> */}
        <div className="flex flex-wrap gap-[20px] justify-around  p-[2rem]">
          {posts.map((item, index) => (
            <VerticalBlogCard key={index} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllBlog;
