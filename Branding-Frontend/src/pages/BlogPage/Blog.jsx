import React from "react";
import { BlogCmpHead, BlogView } from "../../components";
import { Helmet } from "react-helmet-async";

const Blog = () => {
  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Create engaging and impactful blogs with Branding Hopes. Share your ideas, insights, and stories to connect with your audience and grow your brand's online presence."
        />
        <link rel="canonical" href="https://www.brandinghopes.com/blog" />
      </Helmet>

      <div className="w-[100%] landingContainer min-h-[100vh] py-[90px]">
        <BlogCmpHead />
        <BlogView />
      </div>
    </>
  );
};

export default Blog;
