import React from "react";
import { Box, Avatar, Typography } from "@mui/material";

const testimonials = [
  {
    name: "Ayesha Khan",
    title: "CEO, TechCorp",
    message:
      "BrandingHopes ne hamari website ko ek nayi pehchaan di. Inki design aur development team bohot hi zabardast hai!",
    avatar: "https://i.pravatar.cc/100?img=1",
  },
  {
    name: "Ali Raza",
    title: "Founder, StartX",
    message:
      "I am super impressed with the quality and professionalism. Highly recommend BrandingHopes for any digital project.",
    avatar: "https://i.pravatar.cc/100?img=2",
  },
  {
    name: "Sara Malik",
    title: "Marketing Head, Innovate",
    message:
      "Their attention to detail and creativity exceeded our expectations. We loved working with BrandingHopes!",
    avatar: "https://i.pravatar.cc/100?img=3",
  },
];

const TestimonialSection = () => {
  return (
    <Box 
    className="py-10 px-4 max-w-7xl mx-auto font-montserrat"
    
    >
      <div className="mb-[4rem]">
        <div className="mt-[8rem] text-center">
        
          <h2 className="mt-[20px] text-[#fca311] text-3xl sm:text-4xl md:text-5xl lg:text-[42px] font-bold uppercase leading-tight">
            <span className="text-white ">Our</span> Client Says
          </h2>
        </div>
        {/* <TestimonialCard /> */}
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((item, index) => (
          <Box
            key={index}
            className="bg-white  rounded-2xl shadow-lg p-6 flex flex-col justify-between h-full transition transform hover:-translate-y-1 hover:shadow-xl"
          >
            <Typography variant="body1" className="mb-4 ">
              "{item.message}"
            </Typography>
            <div className="flex items-center mt-4">
              <Avatar
                src={item.avatar}
                alt={item.name}
                className="w-12 h-12 mr-3"
              />
              <div>
                <Typography
                  variant="subtitle1"
                  className="font-semibold dark:text-theme-red"
                >
                  {item.name}
                </Typography>
                <Typography
                  variant="caption"
                  className="text-gray-500 dark:text-theme-red"
                >
                  {item.title}
                </Typography>
              </div>
            </div>
          </Box>
        ))}
      </div>
    </Box>
  );
};

export default TestimonialSection;
