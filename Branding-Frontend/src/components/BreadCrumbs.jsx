/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

export default function CollapsedBreadcrumbs() {
  return (
    <>
      <div
        className="bg-white flex justify-center items-center pt-[2rem] pb-[2rem]"
        role="presentation"
        onClick={handleClick}
      >
        <Breadcrumbs maxItems={2} aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="#">
            <p className="font-medium text-[20px]">Home</p>
          </Link>
          <Link underline="hover" color="inherit" href="#">
          <p className="font-medium text-[20px]">Blogs</p>
          </Link>
          <p className="font-medium text-[20px]">Blog Category</p>
        </Breadcrumbs>
      </div>
      <h1 className=" mb-[1rem] text-center font-bold text-[30px]">
        Blog Category or Something
      </h1>
    </>
  );
}
