import React from "react";
import "./styles/blogview.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { CREATEBLOG_URL } from "../constants/apis";
import axios from "axios";

function BlogView() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [description, setDescription] = useState("");
  const [imgFile, setImageFile] = useState("");
  const [category, setCategory] = useState("");

  // console.log(title, "title =>");
  // console.log(content, "content =>");
  // console.log(description, "description =>");
  // console.log(imgFile, "imgFile =>");
  // console.log(category, "category =>");

  const PostBlogHandler = async (e) => {
    e.preventDefault();
    console.log(title, "title =>");
    console.log(content, "content =>");
    console.log(description, "description =>");
    console.log(imgFile, "imgFile =>");
    console.log(category, "category =>");

    let blogData = {
      title,
      content,
      description,
      blogImgUrl: imgFile,
      category,
    };

    try {
      const blogResult = await axios.post(`/api/${CREATEBLOG_URL}`, blogData);
      console.log(blogResult);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form
      onSubmit={PostBlogHandler}
      className=" flex flex-col justify-center  rounded-lg  px-[5rem]"
    >
      <div className="flex flex-col ">
        <label
          for="name"
          className="pl-[0.75rem] font-bold text-2xl text-[#fca311] mb-2  mt-[2rem] "
        >
          Blog Title
        </label>
        <input
          type="name"
          name="name"
          id="name"
          placeholder="Blog Title"
          className="w-100  py-3 px-3 rounded-lg bg-white border border-gray-400 text-[#14213d] font-semibold focus:border-[#fca311] focus:outline-none "
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div className="flex flex-col  mt-[2rem]">
        <label
          for="tel"
          className="pl-[0.75rem] font-bold text-[#fca311] text-2xl"
        >
          Blog Content
        </label>

        <textarea
          onChange={(e) => setContent(e.target.value)}
          name="message"
          id="message"
          cols="0"
          rows="2"
          placeholder="Enter Blog Content"
          className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-[#fca311] focus:outline-none resize-none"
        ></textarea>
      </div>
      <div className="flex flex-col  mt-[2rem]">
        <label
          for="tel"
          className="pl-[0.75rem] font-bold text-[#fca311] text-2xl"
        >
          Blog's Description
        </label>

        <textarea
          onChange={(e) => setDescription(e.target.value)}
          name="Description"
          id="message"
          cols="0"
          rows="5"
          placeholder="Enter your Blog's Description"
          className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-[#fca311] focus:outline-none resize-none"
        ></textarea>
      </div>
      <div className="flex flex-col  mt-[2rem]">
        <label
          for="name"
          className="pl-[0.75rem] font-bold text-2xl text-[#fca311] mb-2 "
        >
          Featured Blog Post
        </label>
        <input
          type="file"
          name="name"
          id="name"
          placeholder="Blog Title"
          className="w-100  py-3 px-3 rounded-lg bg-white border border-gray-400 text-[#14213d] font-semibold focus:border-[#fca311] focus:outline-none "
          onChange={(e) => setImageFile(e.target.value)}
        />
      </div>

      <div className="flex flex-col mt-[2rem]">
        <label
          htmlFor="category"
          className="pl-[0.75rem] font-bold text-[#fca311] text-2xl"
        >
          Blog Category
        </label>

        <select
          onChange={(e) => setCategory(e.target.value)}
          name="category"
          id="category"
          className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-[#fca311] focus:outline-none"
        >
          <option value="">Select a category</option>
          <option value="Technology">Technology</option>
          <option value="Health">Health</option>
          <option value="Education">Education</option>
          <option value="Business">Business</option>
          <option value="Lifestyle">Lifestyle</option>
          <option value="Travel">Travel</option>
          <option value="Food">Food</option>
        </select>
      </div>
      <button
        type="submit"
        className="cursor-pointer    mt-[1.5rem] bg-[#14213d] text-[#fca311] font-bold py-3 px-6 rounded-lg  hover:bg-[#fca311] hover:text-[#fafafa] transition ease-in-out duration-300 "
      >
        <span>Create Blog Post</span>
      </button>
    </form>
  );
}

export default BlogView;
