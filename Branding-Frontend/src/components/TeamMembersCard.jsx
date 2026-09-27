// import React from "react";
// import styles from "./styles/style.js";
// import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
// const TeamMembersCard = ({ imgUrl, name, city, Role, desc, visitLink }) => {
//   return (
//     <div
//       //   data-aos="zoom-in-right"
//       className={`w-[90%] bg-white ${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col rounded-[20px] box-shadow m-auto`}
//     >
//       <div className="flex items-center gap-[20px]">
//         <div className="flex items-center w-[50%] ">
//           <div className="">
//             <img
//               src={imgUrl}
//               alt={`${name}s Images`}
//               title={name}
//               width={160}
//               height={160}
//               className="rounded-full w-[150px] h-[150px] border-[4px] border-[#fca311]"
//             />
//           </div>
//           <div className="flex flex-col">
//             <p className="text-[#fca311] pl-[20px] font-bold text-[20px] mb-[2px] uppercase">
//               {name}
//             </p>
//             <p className="pl-[20px] mb-[2px] font-medium">{Role}</p>
//             <p className="pl-[20px] mb-[2px] font-medium">{city}</p>
//             <a href={visitLink} target="_blank" rel="noopener noreferrer">
//               <p className="pl-[20px] mb-[2px] cursor-pointer font-medium">
//                 Visit Linkedin Profile <ArrowForwardIcon />
//               </p>
//             </a>
//           </div>
//         </div>
//         <div className=" w-[50%]">{desc}</div>
//       </div>
//     </div>
//   );
// };

// export default TeamMembersCard;







import React from "react";
import styles from "./styles/style.js";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const TeamMembersCard = ({ imgUrl, name, city, Role, desc, visitLink }) => {
  return (
    <div
      className={`w-full max-w-[900px] bg-white  ${styles.flexCenter} ${styles.marginY} ${styles.padding} flex flex-row rounded-[20px] box-shadow m-auto`}
    >
      {/* Left side: Image + details */}
      <div className="flex items-center gap-4 min-w-[250px]">
        <img
          src={imgUrl}
          alt={`${name}'s Image`}
          title={name}
          width={150}
          height={150}
          className="rounded-full w-[150px] h-[150px] border-4 border-[#fca311]"
        />
        <div className="flex flex-col">
          <p className="text-[#fca311] font-bold text-xl mb-1 uppercase">
            {name}
          </p>
          <p className="font-medium">{Role}</p>
          <p className="font-medium">{city}</p>
          <a href={visitLink} target="_blank" rel="noopener noreferrer">
            <p className="mt-2 cursor-pointer font-medium flex items-center gap-1 text-sm text-[#fca311] hover:underline">
              Visit Linkedin Profile <ArrowForwardIcon fontSize="small" />
            </p>
          </a>
        </div>
      </div>

      {/* Right side: Description */}
      <div className="flex-1 pl-8 text-gray-700 text-base">
        {desc}
      </div>
    </div>
  );
};

export default TeamMembersCard;
