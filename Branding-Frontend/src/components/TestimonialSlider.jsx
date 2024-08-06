// import React from "react";
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
// import ClientReview from "./ClientReview";

// const responsive = {
//   desktop: {
//     breakpoint: { max: 3000, min: 1024 },
//     items: 1,
//     slidesToSlide: 1, // optional, default to 1.
//   },
//   tablet: {
//     breakpoint: { max: 1024, min: 464 },
//     items: 1,
//     slidesToSlide: 1, // optional, default to 1.
//   },
//   mobile: {
//     breakpoint: { max: 464, min: 0 },
//     items: 1,
//     slidesToSlide: 1, // optional, default to 1.
//   },
// };

// const TestimonialSlider = () => {
//   return (
//     <Carousel
//       additionalTransfrom={0}
//       arrows={true}
//       autoPlay={true}
//       autoPlaySpeed={5000}
//       centerMode={false}
//       infinite
//       responsive={responsive}
//       itemClass="item"
//     >
//       <ClientReview
//         image="https://i0.wp.com/www.crazytips.org/wp-content/uploads/2018/06/PicsArt_06-17-05.03.08.jpg?ssl=1"
//         role="Web Developer"
//         name="Mukhtar"
//       />
//       <ClientReview
//         image="/images/c2.jpg"
//         role="Mern Stack Developer"
//         name="Hasan"
//       />
//       <ClientReview
//         image="/images/c1.jpg"
//         role="NodeJs Developer"
//         name="Ahsan"
//       />
//       <ClientReview
//         image="/images/c2.jpg"
//         role="React Developer"
//         name="Abdullah"
//       />
//     </Carousel>
//   );
// };

// export default TestimonialSlider;










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
    swipeable={false}
    draggable={false}
    showDots={true}
    responsive={responsive}
    ssr={true} // means to render carousel on server-side.
    infinite={true}
    // autoPlay={this.props.deviceType !== "mobile" ? true : false}
    autoPlaySpeed={1000}
    keyBoardControl={true}
    customTransition="all .5"
    transitionDuration={500}
    containerClass="carousel-container"
    removeArrowOnDeviceType={["tablet", "mobile"]}
    // deviceType={this.props.deviceType}
    dotListClass="custom-dot-list-style"
    itemClass="carousel-item-padding-40-px"
    >
      <ClientReview
        image="https://i0.wp.com/www.crazytips.org/wp-content/uploads/2018/06/PicsArt_06-17-05.03.08.jpg?ssl=1"
        role="Web Developer"
        name="Mukhtar"
      />
      <ClientReview
        image="/images/c2.jpg"
        role="Mern Stack Developer"
        name="Hasan"
      />
      <ClientReview
        image="/images/c1.jpg"
        role="NodeJs Developer"
        name="Ahsan"
      />
      <ClientReview
        image="/images/c2.jpg"
        role="React Developer"
        name="Abdullah"
      />
    </Carousel>
  );
};

export default TestimonialSlider;

