import React from "react";
import CopyrightIcon from "@mui/icons-material/Copyright";

const DashboardFooter = () => {
  return (
    <footer className="bg-[#14213d] text-white py-[2rem] px-[4rem]">
      <div className="container flex flex-wrap justify-between pt-4">
        <p className="text-xl">
          <CopyrightIcon /> BrandingHopes 2024. All rights reserved.
        </p>
        <div className="flex justify-center mt-2 gap-5">
          <p>Terms & Conditions | </p>
          <p>Privacy Policy | </p>
          <p>Affiliate Program</p>
        </div>
      </div>
    </footer>
  );
};

export default DashboardFooter;
