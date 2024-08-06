// import { StarIcon } from "@heroicons/react/20/solid";
// import React from "react";

// const ClientReview = ({ name, role, image }) => {
//   return (
//     <div className="flex flex-col text-center justify-center">
//       <img
//         src={image}
//         alt={name}
//         width={100}
//         height={100}
//         style={{ objectFit: 'contain' }}
//         className="mx-auto mb-[2rem] rounded-full "
//       />
//       <div className="flex items-center mx-auto">
//         <StarIcon className="w-[2rem] h-[2rem] text-yellow-500" />
//         <StarIcon className="w-[2rem] h-[2rem] text-yellow-500" />
//         <StarIcon className="w-[2rem] h-[2rem] text-yellow-500" />
//         <StarIcon className="w-[2rem] h-[2rem] text-yellow-500" />
//         <StarIcon className="w-[2rem] h-[2rem] text-yellow-500" />
//       </div>
//       <h1 className="text-[25px] text-white mt-[1rem] ">{name}</h1>
//       <p className="text-[18px] text-white mt-[0.5rem] opacity-75 mb-[1.4rem]">
//         {role}
//       </p>
//       <p className="text-[16px] text-white w-[90%] md:w-[50%] opacity-50 mx-auto">
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi in vitae,
//         aliquam nisi animi molestias, pariatur a, autem error quae aperiam
//         deserunt facere perspiciatis suscipit!
//       </p>
//     </div>
//   );
// };

// export default ClientReview;














import { StarIcon } from "@heroicons/react/20/solid";
import React from "react";

const ClientReview = ({ name, role, image }) => {
  return (
    <div className="flex flex-col text-center justify-center items-center h-full">
      <img
        src={image}
        alt={name}
        width={100}
        height={100}
        style={{ objectFit: 'contain' }}
        className="mx-auto mb-8 rounded-full"
      />
      <div className="flex items-center mx-auto">
        <StarIcon className="w-8 h-8 text-yellow-500" />
        <StarIcon className="w-8 h-8 text-yellow-500" />
        <StarIcon className="w-8 h-8 text-yellow-500" />
        <StarIcon className="w-8 h-8 text-yellow-500" />
        <StarIcon className="w-8 h-8 text-yellow-500" />
      </div>
      <h1 className="text-2xl text-white mt-4">{name}</h1>
      <p className="text-lg text-white mt-2 opacity-75 mb-6">{role}</p>
      <p className="text-base text-white w-11/12 md:w-1/2 opacity-50 mx-auto">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi in vitae,
        aliquam nisi animi molestias, pariatur a, autem error quae aperiam
        deserunt facere perspiciatis suscipit!
      </p>
    </div>
  );
};

export default ClientReview;