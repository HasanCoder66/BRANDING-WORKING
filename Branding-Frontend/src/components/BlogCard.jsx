// import React from "react";
// import Button from "react-bootstrap/Button";
// import Card from "react-bootstrap/Card";
// import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
// // import blogImg1 from "../assets/images/blogImg1.jpeg";

// const BlogCard = ({ name, desc, imgUrl }) => {
//   return (
//     <>
//       <div className="w-[100%] bg-slate-200 object-contain overflow-hidden">
//         <Card.Img
//           variant="top"
//           //   src={blogImg1}
//           src="https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=600"
//           className="group-hover/item:rotate-3 duration-300 ease-out scale-110"
//         />
//       </div>
//       <div className="p-[10px] flex justify-between flex-col">
//         <div className="group-hover/item:opacity-0 duration-300 ease-out">
//           <Card.Text className="text-theme-black text-lg my-2">
//             By: <span className="text-theme-red">Name</span> / 2024-03-4
//           </Card.Text>
//         </div>
//         <div className="group-hover/item:-translate-y-[3rem] relative duration-300 ease-out z-10">
//           <Card.Title className="text-theme-red text-[2.3rem] font-bold my-5">
//             {name || "hasan"}
//           </Card.Title>
//           <Card.Text className="text-theme-black text-xl my-4 mb-[0]">
//             {desc ||
//               "Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet "}
//           </Card.Text>
//         </div>
//         <div className="">
//           <Button
//             variant="primary"
//             className="text-white text-lg group-hover/item:text-theme-red duration-300 ease-out -translate-y-4"
//           >
//             Read More <ArrowForwardIcon />
//           </Button>
//         </div>
//       </div>
//     </>
//   );
// };

// export default BlogCard;










import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
// import blogImg1 from "../assets/images/blogImg1.jpeg";

const BlogCard = ({ name, desc, imgUrl }) => {
  return (
    <Card className="w-[100%] bg-slate-200 object-contain overflow-hidden">
      <Card.Img
        variant="top"
        //   src={blogImg1}
        src="https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=600"
        className="group-hover/item:rotate-3 duration-300 ease-out scale-110"
      />
      <Card.Body className="p-[10px] flex justify-between flex-col">
        <Card.Text className="text-theme-black text-base my-2 group-hover/item:opacity-0 duration-300 ease-out">
          By: <span className="text-theme-red">Name</span> / 2024-03-4
        </Card.Text>
        <div className="group-hover/item:-translate-y-[3rem] relative duration-300 ease-out z-10">
          <Card.Title className="text-theme-red text-2xl font-bold my-5">
            {name || "hasan"}
          </Card.Title>
          <Card.Text className="text-theme-black text-lg my-4 mb-0">
            {desc ||
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet."}
          </Card.Text>
        </div>
        <Button
          variant="primary"
          className="text-white text-base group-hover/item:text-theme-red duration-300 ease-out -translate-y-4"
        >
          Read More <ArrowForwardIcon />
        </Button>
      </Card.Body>
    </Card>
  );
};

export default BlogCard;
