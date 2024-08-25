import React from "react";
import { BlogCmpHead, BlogView } from "../../components";

const Blog = () => {
  return (
    <div className="w-[100%] landingContainer min-h-[100vh] py-[90px]">
      <BlogCmpHead />
      <BlogView />
    </div>
  );
};

export default Blog;
