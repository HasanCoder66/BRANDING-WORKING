import { Helmet } from "react-helmet-async";
import React from "react";
import Card from "react-bootstrap/Card";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link } from "react-router-dom";
// import { BlogCard } from "../../components";
// import data from '../ServicesPage/servicesData.js'

// console.log(data)
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
      <Link  
      // to={routeLink}
      >
    <Card 
    // key={id}
     className="  object-contain overflow-hidden border-2px-[#fca311]">
      <Card.Img
        // variant="top"
        // src={imgUrl}s
        src="https://img.freepik.com/free-photo/one-person-typing-laptop-office-generated-by-ai_188544-39272.jpg?size=626&ext=jpg&uid=R135466208&ga=GA1.1.1540570184.1698578526&semt=sph"
        className="group-hover/item:rotate-3 duration-300 ease-out scale-110"
      />
      <Card.Body className="p-[10px] flex justify-between flex-col">
        <div className="group-hover/item:-translate-y-[2rem] relative duration-300 ease-out z-10">
          <Card.Title className="text-theme-red text-2xl font-bold my-5">
            {/* {title} */}
            new project
          </Card.Title>
          <Card.Text className="text-theme-black text-md my-4 mb-0">
            {/* {desc} */}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis unde expedita vitae ipsam. Distinctio ex, esse dolorum saepe quo tenetur, accusamus minus adipisci dignissimos aspernatur expedita, fuga accusantium nisi! Quaerat.20
          </Card.Text>
        </div>
        <Link 
        // to={routeLink}
        >
          <div
            variant="primary"
            className="mt-[10px] text-white text-base group-hover/item:text-theme-red duration-300 ease-out -translate-y-8"
          >
            {/* {buttonContent}  */}
            new btn
            <ArrowForwardIcon />
          </div>
        </Link>
      </Card.Body>
    </Card>
    </Link>
    </>
  );
};

export default Portfolio;