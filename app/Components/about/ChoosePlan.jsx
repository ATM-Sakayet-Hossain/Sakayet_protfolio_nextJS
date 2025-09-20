import React from "react";
import PlanCard from "./PlanCard";

const ChoosePlan = () => {
  return (
    <section>
      <div className="container-1">
        <div className="row ">
          <h3 className="text-white opacity-50 text-start text-[15px] pt-[7%] mb-[17px] font-poppins">
            Get started with my services
          </h3>
          <h2 className="text-[36px] font-bold font-poppins text-white leading-[100%] text-start">
            Choose a Plan
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            <PlanCard image="/images/logo.png" title="Standard" amount="19" btn="Standard" />
            <PlanCard image="" title="Professional" amount="29" btn="Professional" />
            <PlanCard image="" title="Business" amount="39" btn="Business" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChoosePlan;
