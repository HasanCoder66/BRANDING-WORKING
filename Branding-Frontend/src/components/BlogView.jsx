import React from "react";
import "./styles/blogview.css";
// import Button from "../ButtonNew/Button";
// import { useRef } from "react";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { useNavigate } from "react-router-dom";
// // import { onAuthStateChanged, auth } from "../../firebase/config.js";
function BlogView() {
  // const allBlogs = JSON.parse(localStorage.getItem('allBlogs')) || []

  // const navigate = useNavigate()

  // const user = useRef()
  // const blogcontent = useRef()
  // const blogdescription = useRef()
  // const blogtitle = useRef()

  // function createBlogHandler() {
  //   // console.log(user.current.value);
  //   // console.log(blogcontent.current.value);
  //   // console.log(blogdescription.current.value);
  //   // console.log(blogtitle.current.value);

  //   const blog = {
  //     username: user?.current?.value,
  //     blogcontent: blogcontent?.current?.value,
  //     blogdescription: blogdescription?.current?.value,
  //     blogtitle: blogtitle?.current?.value
  //   }

  //   allBlogs.push(blog)

  //   localStorage.setItem('allBlogs', JSON.stringify(allBlogs))
  //   toast.success('blog added')
  //   setTimeout(() => {
  //     navigate('/')
  //   }, 5000)
  // }

  // onAuthStateChanged(auth, (user) => {
  //   if (user) {
  //     console.log(user)
  //     // User is signed in, see docs for a list of available properties
  //     // https://firebase.google.com/docs/reference/js/auth.user
  //     const uid = user.uid;
  //     console.log(uid)
  //     // ...
  //   } else {
  //     // User is signed out
  //     // ...
  //   }
  // });

  {
    /* lg:px-8 bg-gray-500 shadow-lg shadow-gray-500/ */
  }
  {
    /* <input
  placeholder="User Name"
  type="text"
  className="userInput"
  // ref={user}
/> */
  }
  return (
    <form
      className=" flex flex-col justify-center  rounded-lg  px-[5rem]"
      // ref={form}
      // onSubmit={sendEmail}
    >
      <div className="flex flex-col ">
        <label for="name" className="pl-[0.75rem] font-bold text-2xl text-[#fca311] mb-2">
          Blog Title
        </label>
        <input
          type="name"
          name="name"
          id="name"
          placeholder="Blog Title"
          className="w-100  py-3 px-3 rounded-lg bg-white border border-gray-400 text-[#14213d] font-semibold focus:border-[#fca311] focus:outline-none "
          // onChange={(e) => setName(e.target.value)}
        />
      </div>

      
      <div className="flex flex-col mt-2">
        <label for="tel" className="pl-[0.75rem] font-bold text-[#fca311] text-2xl">
         Blog Content
        </label>

        <textarea
          // onChange={(e) => setMessage(e.target.value)}
          name="message"
          id="message"
          cols="0"
          rows="5"
          placeholder="Enter Blog Content"
          className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-[#fca311] focus:outline-none resize-none"
        ></textarea>
      </div>
      <div className="flex flex-col mt-2">
        <label for="tel" className="pl-[0.75rem] font-bold text-[#fca311] text-2xl">
          Blog's Description
        </label>

        <textarea
          // onChange={(e) => setMessage(e.target.value)}
          name="message"
          id="message"
          cols="0"
          rows="10"
          placeholder="Enter your Blog's Description"
          className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-[#fca311] focus:outline-none resize-none"
        ></textarea>
      </div>
      <button
        type="submit"
        className="cursor-pointer    mt-[1.5rem] bg-[#14213d] text-[#fca311] font-bold py-3 px-6 rounded-lg  hover:bg-[#fca311] hover:text-[#fafafa] transition ease-in-out duration-300 "
      >
        <span>Create Blog Post</span>
      </button>
    </form>
    // <div className="parent">
    //   <input
    //     placeholder="Blog Content"
    //     // ref={blogcontent}
    //     type="text"
    //     className="blogInput w-100 mt-2 py-3 px-3 rounded-lg text-black font-semibold focus:border-[#fca311] focus:outline-none"
    //   />
    //   <input
    //     // ref={blogtitle}
    //     placeholder=" Blog Title"
    //     type="text"
    //     className="blogTitleInput w-100 mt-2 py-3 px-3 rounded-lg  text-black font-semibold focus:border-[#fca311] focus:outline-none"
    //   />
    //   <input
    //     // ref={blogdescription}
    //     placeholder="Blog description "
    //     type="text"
    //     className="blogDescInput w-100 mt-2 py-3 px-3 rounded-lg  text-black font-semibold focus:border-[#fca311] focus:outline-none"
    //   />
    //   <Button text='Create Blog' />
    // </div>
  );
}

export default BlogView;
