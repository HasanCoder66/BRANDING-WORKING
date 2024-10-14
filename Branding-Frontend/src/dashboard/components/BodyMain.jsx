import React from "react";
// import Header from "./Header";
import Box from "./Box";
import Box1 from "./Box1";
import Box2 from "./Box2";
import Box3 from "./Box3";
import { FaUserDoctor, FaCalendarCheck } from "react-icons/fa6";
import { IoPerson } from "react-icons/io5";
import { FaCcStripe, FaCalendarAlt } from "react-icons/fa";

const BodyMain = () => {
  return (
    <div className="w-full bg-[#14213d] ">
      {/* <Header /> */}

      <div class="grid grid-cols-4 gap-3  p-5 ">
        <Box
          title={"TOTAL INVOICE GENERATED"}
          icon={<FaCcStripe className="text-red-300 text-3xl" />}
          value={9}
        />
        <Box
          title={"TOTAL APPOINTMENTS"}
          icon={<FaCalendarAlt className="text-green-500  text-3xl" />}
          value={11}
        />
        <Box
          title={"TOTAL PHYSICIANS"}
          icon={<FaUserDoctor className=" text-3xl" />}
          value={6}
        />
        <Box
          title={"TOTAL PATIENTS"}
          icon={<IoPerson className="text-sky-400  text-3xl" />}
          value={22}
        />
      </div>

      <Box1 />
      <Box2 />
      <Box3 />
    </div>
  );
};

export default BodyMain;
