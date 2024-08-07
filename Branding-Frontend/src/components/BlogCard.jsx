import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
// import blogImg1 from "../assets/images/blogImg1.jpeg";

const BlogCard = ({ name, desc, imgUrl }) => {
  return (
    <>
      <div className="w-[100%] bg-slate-200 object-contain overflow-hidden">
        <Card.Img
          variant="top"
        //   src={blogImg1}
          src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Fproject-management&psig=AOvVaw3mld-NCOzMp9hIW-9n1Gt4&ust=1723149188308000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCNDlrozd44cDFQAAAAAdAAAAABAE"
          className="group-hover/item:rotate-3 duration-300 ease-out scale-110"
        />
      </div>
      <div className="p-[10px] flex justify-between flex-col">
        <div className="group-hover/item:opacity-0 duration-300 ease-out">
          <Card.Text className="text-theme-black text-lg my-2">
            By: <span className="text-theme-red">Name</span> / 2024-03-4
          </Card.Text>
        </div>
        <div className="group-hover/item:-translate-y-[3rem] relative duration-300 ease-out z-10">
          <Card.Title className="text-theme-red text-[2.3rem] font-bold my-5">
            {name || 'hasan'}
          </Card.Title>
          <Card.Text className="text-theme-black text-xl my-4 mb-[0]">
            {desc || 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non culpa, dolore ipsum pariatur eius vero velit? Eveniet quo debitis laudantium nihil illo facere eius quod?'}
          </Card.Text>
        </div>
        <div className="">
          <Button
            variant="primary"
            className="text-white text-lg group-hover/item:text-theme-red duration-300 ease-out -translate-y-4"
          >
            
            Read More <ArrowForwardIcon />
          </Button>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
