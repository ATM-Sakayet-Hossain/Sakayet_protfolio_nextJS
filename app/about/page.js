import React from "react";
import Aboutme from "../Components/about/Aboutme";
import Myservice from "../Components/about/MyService";
import Testimonials from "../Components/about/Testimonials";
import ChoosePlan from "../Components/about/ChoosePlan";

const page = () => {
  return (
    <div className="about">
      <span className="home_animation"></span>
      <Aboutme />
      <Myservice />
      <Testimonials />
      <ChoosePlan />
    </div>
  );
};

export default page;
