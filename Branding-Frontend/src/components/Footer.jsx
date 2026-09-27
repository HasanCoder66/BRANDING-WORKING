// import React from "react";
// import PhoneIcon from "@mui/icons-material/Phone";
// import MarkunreadIcon from "@mui/icons-material/Markunread";
// import XIcon from "@mui/icons-material/X";
// import FacebookIcon from "@mui/icons-material/Facebook";
// import InstagramIcon from "@mui/icons-material/Instagram";
// // import YouTubeIcon from "@mui/icons-material/YouTube";
// import LinkedinIcon from "@mui/icons-material/LinkedIn";
// import InterestsIcon from "@mui/icons-material/Interests";
// import CopyrightIcon from "@mui/icons-material/Copyright";
// import { Link } from "react-router-dom";

// const Footer = () => {
//   return (
//     <footer className="landingContainer text-white py-[6rem] px-[4rem] ">
//       <div className="container mx-auto flex flex-wrap justify-between">
//         <div className="w-full md:w-1/3">
//           <div className="mb-[10px]">
//             <h3 className="text-[2.5rem] font-normal mb-1">Contact Info</h3>
//             <div className="flex h-5 w-[70%] ">
//               <hr className="border-[1.2px] w-[20%] border-theme-yellow" />
//               <hr className="border-[1.2px] w-[80%] " />
//             </div>
//           </div>
//           <div className="flex items-center gap-3 mb-10">
//             <PhoneIcon
//               style={{ fontSize: "25px" }}
//               className="text-theme-red"
//             />
//             <div>
//               <p className="text-lg">MON TO SUN: 24/7</p>
//               <p className="text-xl font-bold">PK +92 346 2046 684 </p>
//             </div>
//           </div>
//           <div className="flex items-center gap-3 mb-10">
//             <MarkunreadIcon
//               style={{ fontSize: "25px" }}
//               className="text-theme-red"
//             />
//             <div>
//               <p className="text-lg">DO YOU HAVE ANY QUESTION?</p>
//               <p className="text-xl font-bold">hello@brandinghopes.com</p>
//             </div>
//           </div>
//           <div className="flex items-center gap-3 mb-10">
//             <InterestsIcon
//               style={{ fontSize: "25px" }}
//               className="text-theme-red"
//             />
//             <div>
//               <p className="text-lg">SOCIAL NETWORK</p>
//               <div className="flex items-center gap-5">
//                 {/* <XIcon /> */}
//                 <a
//                   href="https://web.facebook.com/profile.php?id=61557738595018"
//                   target="_blank"
//                 >
//                   <FacebookIcon />
//                 </a>
//                 <a
//                   href="https://www.instagram.com/brandinghopes/"
//                   target="_blank"
//                 >
//                   <InstagramIcon />
//                 </a>
//                 <a
//                   href="https://www.linkedin.com/in/branding-hopes-304207324/"
//                   target="_blank"
//                 >
//                   <LinkedinIcon />
//                 </a>

//                 {/* <YouTubeIcon /> */}
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="w-full md:w-1/3">
//           <div className="mb-[10px]">
//             <h3 className="text-[2.5rem] font-normal mb-1">Quick Links</h3>
//             <div className="flex h-5 w-[70%] ">
//               <hr className="border-[1.2px] w-[20%] border-theme-yellow" />
//               <hr className="border-[1.2px] w-[80%]" />
//             </div>
//           </div>
//           <div className="flex justify-between">
//             <ul className="list-none">
//               <li>
//                 <Link
//                   to={"/"}
//                   className="text-lg text-white hover:text-theme-red"
//                 >
//                   Home
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to={"/services"}
//                   className="text-white text-lg hover:text-theme-red"
//                 >
//                   Services
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to={"/packages/web"}
//                   className="text-white text-lg hover:text-theme-red"
//                   href="#"
//                 >
//                   Packages
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to={"/about"}
//                   className="text-white text-lg hover:text-theme-red"
//                   href="#"
//                 >
//                   About
//                 </Link>
//               </li>

//               <li>
//                 <Link
//                   to={"/blog"}
//                   className="text-white text-lg hover:text-theme-red"
//                   href="#"
//                 >
//                   Blog
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to={"/portfolio"}
//                   className="text-white text-lg hover:text-theme-red"
//                   href="#"
//                 >
//                   Portfolio
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to={"/contact"}
//                   className="text-white text-lg hover:text-theme-red"
//                   href="#"
//                 >
//                   Contact
//                 </Link>
//               </li>
//             </ul>
//           </div>
//         </div>
//         <div className="w-full md:w-1/3 ">
//           <div className="mb-[10px]">
//             <h3 className="text-[2.5rem] font-normal mb-1">Our Company</h3>
//             <div className="flex h-5 w-[70%] ">
//               <hr className="border-[1.2px] w-[20%] border-theme-yellow" />
//               <hr className="border-[1.2px] w-[80%]" />
//             </div>
//           </div>
//           <div className="flex justify-between">
//             <ul className="list-none">
//               <li>
//                 <a className="text-lg text-white hover:text-theme-red" href="#">
//                   About Us
//                 </a>
//               </li>
//               <li>
//                 <a className="text-white text-lg hover:text-theme-red" href="#">
//                   Privacy Policy
//                 </a>
//               </li>
//               <li>
//                 <a className="text-white text-lg hover:text-theme-red" href="#">
//                   Affiliate
//                 </a>
//               </li>
//               <li>
//                 <a className="text-white text-lg hover:text-theme-red" href="#">
//                   Program
//                 </a>
//               </li>
//             </ul>
//             {/* <ul className="list-none pr-[30%]">
//               <li>
//                 <a className="text-lg text-white hover:text-theme-red" href="#">
//                   Contact Us
//                 </a>
//               </li>
//               <li>
//                 <a className="text-white text-lg hover:text-theme-red" href="#">
//                   Terms & Conditions
//                 </a>
//               </li>
//               <li>
//                 <a className="text-white text-lg hover:text-theme-red" href="#">
//                   Sponsorship Program
//                 </a>
//               </li>
//             </ul> */}
//           </div>
//         </div>
//       </div>
//       <hr />
//       <div className="container flex flex-wrap justify-between pt-4">
//         <p className="text-xl">
//           <CopyrightIcon /> BrandingHopes 2024. All rights reserved.
//         </p>
//         <div className="flex justify-center mt-2 gap-5">
//           <p>Terms & Conditions | </p>
//           <p>Privacy Policy | </p>
//           <p>Affiliate Program</p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from "react";
import PhoneIcon from "@mui/icons-material/Phone";
import MarkunreadIcon from "@mui/icons-material/Markunread";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedinIcon from "@mui/icons-material/LinkedIn";
import InterestsIcon from "@mui/icons-material/Interests";
import CopyrightIcon from "@mui/icons-material/Copyright";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="landingContainer text-white py-12 px-4 sm:px-6 lg:px-16">
      <div className="container mx-auto flex flex-wrap gap-y-8 justify-between">
        {/* Contact Info */}
        <div className="w-full md:w-1/3">
          <div className="mb-4">
            <h3 className="text-2xl sm:text-3xl font-semibold mb-1">
              Contact Info
            </h3>
            <div className="flex h-1 w-[70%]">
              <hr className="border-[1.2px] w-[20%] border-theme-yellow" />
              <hr className="border-[1.2px] w-[80%]" />
            </div>
          </div>
          <div className="flex items-start gap-3 mb-6">
            <PhoneIcon fontSize="small" className="text-theme-red mt-1" />
            <div>
              <p className="text-sm sm:text-base">MON TO SUN: 24/7</p>
              <p className="text-base sm:text-lg font-bold">
                PK +92 346 2046 684
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3 mb-6">
            <MarkunreadIcon fontSize="small" className="text-theme-red mt-1" />
            <div>
              <p className="text-sm sm:text-base">DO YOU HAVE ANY QUESTION?</p>
              <p className="text-base sm:text-lg font-bold">
                hello@brandinghopes.com
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3 mb-6">
            <InterestsIcon fontSize="small" className="text-theme-red mt-1" />
            <div>
              <p className="text-sm sm:text-base">SOCIAL NETWORK</p>
              <div className="flex items-center gap-4 mt-1">
                <a
                  href="https://web.facebook.com/profile.php?id=61557738595018"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FacebookIcon fontSize="small" />
                </a>
                <a
                  href="https://www.instagram.com/brandinghopes/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <InstagramIcon fontSize="small" />
                </a>
                <a
                  href="https://www.linkedin.com/in/branding-hopes-304207324/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <LinkedinIcon fontSize="small" />
                </a>
              </div>
            </div>
          </div>
        </div>


        <div className="w-full md:w-1/3">
          <div className="mb-4">
            <h3 className="text-2xl sm:text-3xl font-semibold mb-1">
              Quick Links
            </h3>
            <div className="flex h-1 w-[70%]">
              <hr className="border-[1.2px] w-[20%] border-theme-yellow" />
              <hr className="border-[1.2px] w-[80%]" />
            </div>
          </div>
          <ul className="space-y-2">
            <li>
              <a
                href="/"
                className="text-sm sm:text-base text-white hover:text-theme-red"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/services"
                className="text-sm sm:text-base text-white hover:text-theme-red"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="/packages/web"
                className="text-sm sm:text-base text-white hover:text-theme-red"
              >
                Packages
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="text-sm sm:text-base text-white hover:text-theme-red"
              >
                About
              </a>
            </li>
            {/* <li>
              <a
                href="/blog"
                className="text-sm sm:text-base text-white hover:text-theme-red"
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href="/portfolio"
                className="text-sm sm:text-base text-white hover:text-theme-red"
              >
                Portfolio
              </a>
            </li> */}
            <li>
              <a
                href="/contact"
                className="text-sm sm:text-base text-white hover:text-theme-red"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Our Company */}
        <div className="w-full md:w-1/3">
          <div className="mb-4">
            <h3 className="text-2xl sm:text-3xl font-semibold mb-1">
              Our Company
            </h3>
            <div className="flex h-1 w-[70%]">
              <hr className="border-[1.2px] w-[20%] border-theme-yellow" />
              <hr className="border-[1.2px] w-[80%]" />
            </div>
          </div>
          <ul className="space-y-2">
            <li>
              <a
                className="text-sm sm:text-base text-white hover:text-theme-red"
                href="/about"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                className="text-sm sm:text-base text-white hover:text-theme-red"
                href="#"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                className="text-sm sm:text-base text-white hover:text-theme-red"
                href="#"
              >
                Affiliate
              </a>
            </li>
            <li>
              <a
                className="text-sm sm:text-base text-white hover:text-theme-red"
                href="#"
              >
                Program
              </a>
            </li>
          </ul>
        </div>
      </div>

      <hr className="my-6 border-gray-700" />

      <div className="container flex flex-col sm:flex-row justify-between items-center gap-2 text-sm sm:text-base">
        <p className="flex items-center">
          <CopyrightIcon fontSize="small" className="mr-1" /> BrandingHopes
          2024. All rights reserved.
        </p>
        {/* <div className="flex flex-wrap justify-center gap-2">
          <p>Terms & Conditions |</p>
          <p>Privacy Policy |</p>
          <p>Affiliate Program</p>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
