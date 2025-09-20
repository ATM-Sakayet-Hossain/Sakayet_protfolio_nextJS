import React from "react";
import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
  return (
    <section>
      <div className="container-1">
        <div className="row ">
          <h3 className="text-white opacity-50 text-start text-[15px] pt-[7%] mb-[17px] font-poppins">
            What my clients think about me
          </h3>
          <h2 className="text-[36px] font-bold font-poppins text-white leading-[100%] text-start">
            Testimonials
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
            <TestimonialCard />
            <TestimonialCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
