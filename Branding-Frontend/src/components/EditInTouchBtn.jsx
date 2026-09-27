// import React from 'react'
// import { Link } from 'react-router-dom'

// const EditInTouchBtn = ({linktoRoute}) => {
//   return (
//     <Link to={linktoRoute}>
//     <button className='mt-[2rem] uppercase bg-[#fca311]  py-[10px] px-[15px] text-[#14213d] text-2xl font-bold rounded-lg '>
//         Get in Touch
//     </button>
//     </Link>
//   )
// }

// export default EditInTouchBtn

import React from "react";
import { Link } from "react-router-dom";

const EditInTouchBtn = ({ linktoRoute }) => {
  return (
    <Link to={linktoRoute}>
      <button
        className="mt-6 uppercase bg-[#fca311] hover:bg-[#14213d] hover:text-[#fca311] py-2 px-4 text-[#14213d] font-bold rounded-lg"
        style={{ fontSize: "clamp(1rem, 2vw + 0.5rem, 1.5rem)" }}
      >
        Get in Touch
      </button>
    </Link>
  );
};

export default EditInTouchBtn;
