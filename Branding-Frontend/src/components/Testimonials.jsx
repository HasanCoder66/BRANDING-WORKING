import React from 'react'
import TestimonialCard from './TestimonialCard'

const Testimonials = () => {
  return (
    <div className="mb-[4rem]">
    <div className="mt-[8rem] text-center">
      <h2 className=" text-[#fca311] lg:text-[42px] font-bold md:text-4xl uppercase">
        <span className="text-[#ffffff]">Our </span> Client Says
      </h2>
    </div>
    <TestimonialCard />
  </div>
  )
}

export default Testimonials