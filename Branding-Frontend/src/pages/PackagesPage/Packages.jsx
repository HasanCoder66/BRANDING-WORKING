import React from "react";
import {
  graphicDesign,
  websitePackage,
  seoPackage,
  smmPackage,
  videoPackage,
} from "./ServicesPackages.js";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { PackageCard } from "../../components";

const Packages = () => {
  const { pathname } = useLocation();
  const packageName = pathname.split("/")[2];

  // console.log(packageName, "====>>>> package")

  let data =
    packageName === "graphicdesign"
      ? graphicDesign
      : packageName === "web"
      ? websitePackage
      : packageName === "ppc"
      ? []
      : packageName === "seo"
      ? seoPackage
      : packageName === "smm"
      ? smmPackage
      : packageName === "video"
      ? videoPackage
      : packageName === "contentwriting"
      ? []
      : packageName === "blogging"
      ? []
      : packageName === "copywriting"
      ? []
      : packageName === "typing"
      ? []
      : [];

  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Affordable Packages for Your Business
          We offer high-quality logo design packages to satisfy your business demands while meeting your budget."
        />
        <link rel="canonical" href="/services" />
      </Helmet>

      <div className="serviceContainer landingContainer">
        <div className="serviceWrapper py-[150px] md:px-[76px]">
          <div className=" px-[20px] mb-[2rem]">
            <h1 className="text-[40px] font-bold text-white uppercase">
              <span className="text-[#fca311]">Affordable</span> Packages for
              Your <span className="text-[#fca311]">Business</span>
            </h1>
            <p className="text-[16px] text-white">
              We offer high-quality logo design packages to satisfy your
              business demands while meeting your budget.
            </p>
          </div>
          <div className="flex flex-wrap justify-evenly pt-[4rem]">
            {data.map((item, index) => (
              <PackageCard data={item} key={index} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Packages;
