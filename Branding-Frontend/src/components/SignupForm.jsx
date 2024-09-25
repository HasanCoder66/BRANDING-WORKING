import React, { useState } from "react";
// import logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
// import ReCAPTCHA from "react-google-recaptcha";

import { SIGNUP_URL } from "../constants/apis.js";

import Swal from "sweetalert2";
import axios from "axios";

import { useDispatch } from "react-redux";
import { signupSuccess } from "../Redux/Slices/userSlices.js";

function SignUpForm() {
  // register forms states ==>
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");

  console.log(fullName);
  console.log(email);
  console.log(password);
  console.log(cPassword);

  const signupHandlerWithMongoDb = async (e) => {
    e.preventDefault();
    if (
      email === "" ||
      fullName === "" ||
      password === "" ||
      cPassword === ""
    ) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Missing Fields!",
      });
    } else if (password.length < 8) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Password must be at least 8 characters long!",
      });
    } else if (password.length < 8) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Password must be at least 8 characters long!",
      });
    } else if (password !== cPassword) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Password does not match!",
      });
    } else if (
      email != "" &&
      !email
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
    ) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Email is Not Valid!",
        timer: 1500,
      });
    } else {
      // console.log("signup handler is working");
      const userCredential = {
        username: fullName,
        email,
        password,
      };
      // console.log(userCredential);

      try {
        const response = await axios.post(`/api/${SIGNUP_URL}`, userCredential);
        console.log(response.data.data);
        // .data.data
        dispatch(signupSuccess(response.data.data));

        if (response.statusText === "OK") {
          Swal.fire({
            title: "Good job!",
            text: "user SignUp successfully!",
            icon: "success",
          });

          setTimeout(() => {
            navigate("/blog");
          }, 3000);
        }
      } catch (error) {
        console.log(error);
        console.log(error.response.data.message.includes("duplicate key"));
        if (error.response.data.message.includes("duplicate key")) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: `Email Already Registered`,
          });
        }
      }
    }
  };

  // const [capVal, setCapVal] = useState(null);
  // const myVariable = import.meta.env.VITE_SITE_KEY;

  return (
    <div className="bg-login-bg-imag w-[60%] flex justify-center ">
      <div className="flex justify-center w-full items-center gap-[4rem]  px-12 py-10">
        <form className="w-[50%]  p-10 shadow-lg bg-white   rounded-lg">
          <h1 className="text-2xl block  font-bold text-theme-red text-center uppercase">
            Join Branding Hopes!
            <br />
          </h1>
          <div className="mt-4 relative">
            <label
              className="   text-theme-red absolute top:[-1] left-1 bg-white px-3 py-1"
              htmlFor="email"
            >
              Full Name
            </label>
            <input
              onChange={(name) => setFullName(name.target.value)}
              type="text"
              className=" w-full border mt-4 px-4  py-4 focus:outline-none focus:ring-0 focus:border-gray-600 rounded-lg"
              placeholder=""
            />
          </div>
          <div className="mt-4 relative">
            <label
              className="   text-theme-red absolute top:[-1] left-1 bg-white px-3 py-1"
              htmlFor="email"
            >
              Email
            </label>
            <input
              onChange={(email) => setEmail(email.target.value)}
              type="email"
              required
              className=" w-full  border mt-4 px-4  py-4 focus:outline-none focus:ring-0 focus:border-gray-600 rounded-lg"
            />
          </div>

          <div className="mt-5 relative">
            <label
              className="absolute  text-theme-red top:[-1] left-1 bg-white px-3 py-1   "
              htmlFor="password"
            >
              Password
            </label>
            <input
              onChange={(pass) => setPassword(pass.target.value)}
              type="password"
              required
              className=" w-full  border  mt-4  py-4 px-2 rounded-lg focus:outline-none focus:ring-0 focus:border-gray-600"
            />
          </div>
          <div className="mt-4 relative">
            <label
              className="   text-theme-red absolute top:[-1] left-1 bg-white px-3 py-1"
              htmlFor="email"
            >
              Comfirm Password
            </label>
            <input
              onChange={(cPass) => setCPassword(cPass.target.value)}
              type="password"
              required
              className=" w-full  border mt-4 px-4  py-4 focus:outline-none focus:ring-0 focus:border-gray-600 rounded-lg"
            />
          </div>

          <div className="captcha w-full mt-8 mb-8">
            {/* <ReCAPTCHA
              className="flex justify-center mt-2 rounded-lg"
              sitekey={myVariable}
              onChange={(val) => setCapVal(val)}
            /> */}
          </div>

          <div className="mb-8">
            <button
              // disabled={!capVal}
              type="submit"
              className='border-2 text-2xl overflow-hidden w-full font-semibold className="text-[1.6rem] leading-[1.6rem] relative z-10 bg-theme-red text-white px-[2rem] py-[1.2rem] rounded-lg transition-all before:content-[""] before:absolute before:z-[-1] before:top-0 before:left-0 before:w-full before:h-full before:bg-theme-yellow before:translate-x-[-100%] before:translate-y-[100%] before:rounded-lg hover:before:translate-x-[0%] hover:before:translate-y-[0%] before:transition-all before:duration-300  '
              // disabled:cursor-not-allowed
              onClick={signupHandlerWithMongoDb}
            >
              Sign Up
            </button>
          </div>
          <div className="mt-4 text-center">
            <p className="text-theme-red  mb-2">Forget Password?</p>
            <p className="">
              Already have an account?{" "}
              <Link to={"/login"} className="text-theme-red">
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
export default SignUpForm;

// {/* <div className="w-[50%] text-center">
//           {/* <img src={logo} alt="" /> */}
//           <img
//             src="https://res.cloudinary.com/dpvxkqhi8/image/upload/v1710929235/branding%20hopes/Option_03_scel4o.jpg"
//             alt=""
//           />
//           <p className="text-center  text-white font-400">
//             Make a CV to define yourself The right away. Meet thousands of job
//             announcements and employers by the help of your profile with a
//             private extension, which you can share at all social media
//             environments.
//           </p>
//           <Link to={"/login"}>
//             <button className='bg-white  overflow-hidden w-1/3 p-4  text-theme-red rounded-2xl mt-10 className="text-[1.6rem] leading-[1.6rem] relative z-10  hover:text-white px-[2rem] py-[1.2rem]  transition-all  before:content-[""] before:absolute before:z-[-1] before:top-0 before:left-0 before:w-full before:h-full before:bg-theme-red before:translate-x-[-100%] before:translate-y-[100%] before:rounded-lg hover:before:translate-x-[0%] hover:before:translate-y-[0%] before:transition-all before:duration-300"'>
//               Login
//             </button>
//           </Link>
//         </div> */}
