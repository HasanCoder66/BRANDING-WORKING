import React from "react";
import Card from "react-bootstrap/Card";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link } from "react-router-dom";

const BlogCard = ({ data }) => {
  const { id, desc, imgUrl, title, buttonContent, routeLink } = data;
  return (
    <Link to={routeLink}>
      <Card
        key={id}
        className="  object-contain overflow-hidden border-2px-[#fca311]"
      >
        <Card.Img
          width={826}
          height={551}
          src={imgUrl}
          alt="Services-Cards"
          className="group-hover/item:rotate-3 duration-300 ease-out scale-110"
        />
        <Card.Body className="p-[10px] flex justify-between flex-col">
          <div className="group-hover/item:-translate-y-[2rem] relative duration-300 ease-out z-10">
            <Card.Title className="text-theme-red text-2xl font-bold my-5">
              {title}
            </Card.Title>
            <Card.Text className="text-theme-black text-md my-4 mb-0">
              {desc}
            </Card.Text>
          </div>
          <Link to={routeLink}>
            <div
              variant="primary"
              className="mt-[10px] text-white text-base group-hover/item:text-theme-red duration-300 ease-out -translate-y-8"
            >
              {buttonContent} <ArrowForwardIcon />
            </div>
          </Link>
        </Card.Body>
      </Card>
    </Link>
  );
};

export default BlogCard;
