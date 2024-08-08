import React from "react";
import { Helmet } from "react-helmet-async";
import { BlogCard } from "../../components";

import CardGroup from "react-bootstrap/CardGroup";
const Portfolio = () => {
  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Where Imagination Meets Innovation in Web Development, Design, SEO,
            and Digital Mastery"
        />
        <link rel="canonical" href="/portfolio" />
      </Helmet>
      <div className="flex flex-wrap justify-evenly min-h-[100vh] py-[90px] landingContainer">
        <CardGroup>
          <div className="blogCardCont p-16 flex flex-wrap items-center justify-between ">
            {/* {blogCardData.map(({ name, desc, imgUrl }, index) => (
          ))} */}
            <div
              // key={index}
              style={{ width: "320px", height: "400px" }}
              className="bg-[#ffffff] group/item overflow-hidden mb-10 cursor-pointer"
            >
              {/* name={name} desc={desc} imgUrl={imgUrl} */}
              <BlogCard />
              {/* <BlogCard  />
            <BlogCard  /> */}
            </div>
          </div>
        </CardGroup>
      </div>
    </>
  );
};

export default Portfolio;

// import React from "react";
// import { BlogCard } from "../../components";
// // import { blogCardData } from "../dummyData";

// const Portfolio = () => {
//   return (
//     <div className="bg-[#FEF6F5] my-20">
//       <div className="text-center py-[5rem]">
//         <p className="text-theme-yellow text-[2.3rem]">LATEST NEWS</p>
//         <p className="text-theme-red text-[3.5rem] font-semibold">
//           Our Latest Articles
//         </p>
//       </div>
//       <div className="blogCardCont p-16 flex flex-wrap items-center justify-between ">
//         {/* {blogCardData.map(({ name, desc, imgUrl }, index) => (
//           ))} */}
//           <div
//             // key={index}
//             style={{ width: "307px", height: "381px" }}
//             className="bg-[#ffffff] group/item overflow-hidden mb-10 cursor-pointer"
//           >
//             {/* name={name} desc={desc} imgUrl={imgUrl} */}
//             <BlogCard  />
//           </div>
//       </div>
//     </div>
//   );
// };

// export default Portfolio;
