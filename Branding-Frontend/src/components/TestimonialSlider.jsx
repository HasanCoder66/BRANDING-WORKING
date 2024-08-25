import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ClientReview from "./ClientReview";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const TestimonialSlider = () => {
  return (
    <Carousel
      additionalTransfrom={0}
      arrows={true}
      autoPlay={true}
      autoPlaySpeed={5000}
      centerMode={false}
      responsive={responsive}
      itemClass="carousel-item-padding-40-px"
      containerClass="carousel-container"
    >
      <ClientReview
        image="https://yt3.ggpht.com/y03yJ4RBXAk6ngMs-hFHRwtPDtIFiA83YWDNzqo-DBg4dAvERHCu_y-xuaganp0eM0PTskOQyg=s176-c-k-c0x00ffffff-no-rj"
        role="Web Developer"
        name="Mukhtar"
      />
      {/* <ClientReview
        image="https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=600"
        role="Mern Stack Developer"
        name="Hasan"
      />
      <ClientReview
        image="https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=600"
        role="NodeJs Developer"
        name="Ahsan"
      />
      <ClientReview
        image="https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=600"
        role="React Developer"
        name="Abdullah"
      /> */}
    </Carousel>
  );
};

export default TestimonialSlider;
