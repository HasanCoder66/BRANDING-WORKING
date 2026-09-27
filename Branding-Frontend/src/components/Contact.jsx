import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MapLocation from "./MapLocation";

function Contact() {
  const form = useRef();
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [company, setCompany] = useState("");
  const [loading, setLoading] = useState(false); // loader state

  const sendEmail = (e) => {
    e.preventDefault();

    if (!email || !number || !name || !message || !company) {
      return toast.error("Please fill all the required fields");
    }

    setLoading(true); // start loader

    emailjs
      .sendForm(
        "service_vr9bwdh", // Your EmailJS service ID
        "template_zmavhag", // Your EmailJS template ID
        form.current, // Form reference
        "vZObjBnxYzLNKpHc2" // Your EmailJS public key (user ID)
      )
      .then(
        () => {
          toast.success(
            `Thank you ${name}, your message has been sent successfully!`
          );
          setEmail("");
          setName("");
          setNumber("");
          setMessage("");
          setCompany("");
          form.current.reset();
          setLoading(false); // stop loader
        },
        (error) => {
          toast.error("Oops! Something went wrong while sending your message.");
          console.error("EmailJS Error:", error.text);
          setLoading(false); // stop loader on error too
        }
      );
  };

  return (
    <>
      <div className="flex flex-col md:flex-row items-start md:items-center justify-evenly min-h-[500px] w-full max-w-[1200px] mx-auto px-4 py-8 gap-8">
        {/* Left Contact Info */}
        {/* <div className="flex-1 bg-[#e5e5e5] p-6 rounded-lg shadow-md w-full max-w-full md:max-w-[500px]">
          <h2 className="text-2xl md:text-3xl lg:text-4xl text-[#14213d] font-extrabold tracking-tight mb-4">
            Get in touch:
          </h2>
          <p className="text-base md:text-lg lg:text-xl font-medium text-[#14213d] mb-6">
            Fill the form to start a conversation
          </p>
          <div className="mt-4 md:mt-6">
            <MapLocation />
          </div>
        </div> */}

        {/* Left Contact Info */}
        <div className="flex-1 bg-[#14213d] p-6 rounded-lg shadow-md w-full max-w-full md:max-w-[500px]">
          <h2 className="text-2xl md:text-3xl lg:text-4xl text-white font-extrabold tracking-tight mb-4">
            Get in touch:
          </h2>
          <p className="text-base md:text-lg lg:text-xl font-medium text-white mb-6">
            Fill the form to start a conversation
          </p>

          <div className="flex items-start mb-4 text-white">
            <svg
              fill="#fca311"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              className="w-6 h-6 md:w-8 md:h-8"
            >
              <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <div className="ml-3 text-sm md:text-md lg:text-lg font-semibold">
              +92 346 2046684
            </div>
          </div>

          <div className="flex items-start mb-4 text-white">
            <svg
              fill="#fca311"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              className="w-6 h-6 md:w-8 md:h-8"
            >
              <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <div className="ml-3 text-sm md:text-md lg:text-lg font-semibold">
              hello@brandinghopes.com
            </div>
          </div>

          <div className="flex items-start mb-4 text-white">
            <svg
              fill="#fca311"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              className="w-6 h-6 md:w-8 md:h-8"
            >
              <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <div className="ml-3 text-sm md:text-md lg:text-lg font-semibold">
              Al-Noor Society Near Ahsanabad Karachi, Pakistan
            </div>
          </div>

          <div className="mt-4 md:mt-6">
            <MapLocation />
          </div>
        </div>

        {/* Right Form */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex-1 bg-[#14213d] p-6 rounded-lg shadow-md w-full max-w-full md:max-w-[500px] flex flex-col gap-4"
        >
          {/* Your inputs remain unchanged */}
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Full Name *"
            className="w-full py-3 px-4 rounded border border-gray-400 text-[#14213d] font-semibold focus:border-[#fca311] focus:outline-none"
            onChange={(e) => setName(e.target.value)}
            value={name}
            required
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email *"
            className="w-full py-3 px-4 rounded border border-gray-400 text-[#14213d] font-semibold focus:border-[#fca311] focus:outline-none"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
          <input
            type="number"
            name="number"
            id="tel"
            placeholder="Telephone Number *"
            className="w-full py-3 px-4 rounded border border-gray-400 text-[#14213d] font-semibold focus:border-[#fca311] focus:outline-none"
            onChange={(e) => setNumber(e.target.value)}
            value={number}
            required
          />
          <input
            type="text"
            name="company"
            id="company"
            placeholder="Company Name *"
            className="w-full py-3 px-4 rounded border border-gray-400 text-[#14213d] font-semibold focus:border-[#fca311] focus:outline-none"
            onChange={(e) => setCompany(e.target.value)}
            value={company}
            required
          />
          <textarea
            name="message"
            id="message"
            placeholder="Enter your Subject *"
            rows="6"
            className="w-full py-3 px-4 rounded border border-gray-400 text-[#14213d] font-semibold focus:border-[#fca311] focus:outline-none resize-none"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            required
          ></textarea>
          {/* Submit Button with Loader */}
          <button
            type="submit"
            disabled={loading}
            className={`mt-4 py-3 px-6 rounded-lg font-bold transition border border-1
              ${
                loading
                  ? "bg-gray-400 text-gray-700 cursor-not-allowed"
                  : "bg-[#14213d] text-[#fca311] hover:bg-[#fca311] hover:text-white"
              }`}
          >
            {loading ? (
              <svg
                className="animate-spin h-6 w-6 mx-auto text-[#fca311]"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                ></path>
              </svg>
            ) : (
              "Submit"
            )}
          </button>
        </form>




        <ToastContainer
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
          transition={Bounce}
          className="fixed top-20 right-0"
        />
      </div>
    </>
  );
}

export default Contact;
