import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MapLocation from "./MapLocation";


function Contact() {
  const form = useRef();
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    if (email === "" || number === "" || name === "" || message === "") {
      return toast.error("Missings Fields");
    } else {
      console.log("send");
      emailjs
        .sendForm("service_nov0ltj", "template_nrp9fvf", form.current, {
          publicKey: "mcrSWA35JOVCajwf0",
        })
        .then(
          () => {
            console.log("SUCCESS!");
            toast.success("Email Send Successfully");
          },
          (error) => {
            console.log("FAILED...", error.text);
            toast.error("Email Send Failed");
          }
        );
    }
  };

  return (
    <>
      <div className=" landingContainer flex items-top justify-between min-h-[500px] sm:items-center sm:pt-0 sm:pb-0 w-[100%]]">
        <div className=" mx-auto my-auto  sm:px-6 w-[100vw] min-h-[370px] lg:px-8  ">
          <div className="overflow-hidden lg:px-[120px] ">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px]">
              <div className="p-6 mr-2 bg-[#e5e5e5] sm:rounded-lg">
                <h2 className="text-2xl sm:text-4xl text-[#14213d] font-extrabold tracking-tight">
                  Get in touch:
                </h2>
                <p className="text-normal text-lg sm:text-xl font-medium text-[#14213d]  mt-2 mb-6">
                  Fill the form to start a conversation
                </p>

                <div className="flex items-center mt-4 text-[#14213d] ">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    className="w-8 h-8  text-[#14213d] "
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <div className="ml-4 text-md tracking-wide font-semibold w-40 text-[#14213d] ">
                    +92 346 2046684
                  </div>
                </div>

                <div className="flex items-center mt-2 text-[#14213d] ">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    className="w-8 h-8 text-[#14213d] "
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <div className="ml-4 text-md tracking-wide font-semibold w-40 text-[#14213d] ">
                    hello@brandinghopes.com
                  </div>
                </div>
                <div className="flex items-center mt-2 text-[#14213d] ">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    className="w-8 h-8 text-[#14213d] "
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <div className="ml-4 text-md tracking-wide font-semibold w-60 text-[#14213d] ">
                    Al-Noor Socitey Near Ahsanabad Karachi, Pakistan
                  </div>
                </div>
                <div className="mt-[2rem]">
                  <MapLocation />
                </div>
              </div>

              <form
                className=" flex flex-col justify-center bg-[#e5e5e5] rounded-lg p-[1rem] "
                ref={form}
                onSubmit={sendEmail}
              >
                <div className="flex flex-col">
                  <label for="name" className="hidden">
                    Full Name
                  </label>
                  <input
                    type="name"
                    name="name"
                    id="name"
                    placeholder="Full Name *"
                    className="w-100  py-3 px-3 rounded-lg bg-white border border-gray-400 text-[#14213d] font-semibold focus:border-[#fca311] focus:outline-none"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div className="flex flex-col mt-2">
                  <label for="email" className="hidden">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    name="email"
                    id="email"
                    placeholder="Email *"
                    className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-[#fca311] focus:outline-none "
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="flex flex-col mt-2">
                  <label for="tel" className="hidden">
                    Number
                  </label>
                  <input
                    type="number"
                    name="number"
                    id="tel"
                    placeholder="Telephone Number *"
                    className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-[#fca311] focus:outline-none "
                    onChange={(e) => setNumber(e.target.value)}
                  />
                </div>

                <div className="flex flex-col mt-2">
                  <label for="tel" className="hidden">
                    Company Name
                  </label>
                  <input
                    type="text"
                    name="company "
                    id="company"
                    placeholder="Company Name *"
                    className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-[#fca311] focus:outline-none "
                    onChange={(e) => setCompany(e.target.value)}
                  />
                </div>
                <div className="flex flex-col mt-2">
                  <label for="tel" className="hidden">
                    Enter Your Message
                  </label>

                  <textarea
                    onChange={(e) => setMessage(e.target.value)}
                    name="message"
                    id="message"
                    cols="0"
                    rows="6"
                    placeholder="Enter your Subject"
                    className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-[#fca311] focus:outline-none resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="cursor-pointer    mt-[1.5rem] bg-[#14213d] text-[#fca311] font-bold py-3 px-6 rounded-lg  hover:bg-[#fca311] hover:text-[#fafafa] transition ease-in-out duration-300 "
                  // onClick={(e) => twoFunctionForEmail}
                >
                  <span>Submit</span>
                </button>
              </form>

              <ToastContainer
                style={{ marginTop: "11vh" }}
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition:Bounce
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;

