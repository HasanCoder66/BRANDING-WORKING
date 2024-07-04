import React from "react";

const Topbar = () => {
  return (
    <div className=" w-[100%] h-[5vh] bg-[#379583]">
      <div className="flex justify-between px-[20px] items-center">
        <div>hello@brandinghopes.com</div>
        <div className=" ">
          <ul className="flex">
            <li>Facebook</li>
            <li>Instagram</li>
            <li>Linkedin</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
