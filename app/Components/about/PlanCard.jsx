import Image from "next/image";
import React from "react";

const PlanCard = ({ image, title, amount }) => {
  return (
    <div className="bg-[#00000030] p-10 flex flex-col items-center justify-center">
      <div className="w-20 h-20 p-4 text-white bg-green mb-6">
        <Image width={50} height={50} src={image} alt="icon" className="w-full h-full" />
      </div>
      <h2 className="text-2xl font-poppins font-normal text-white tracking-[.5px]">
        {title}
      </h2>
      <p className="text-[15px] font-poppins font-normal text-sencond tracking-[.5px]">
        ${amount}/month
      </p>
      <ul className="text-[15px] font-poppins font-normal text-sencond tracking-[.5px] mt-4 space-y-2 flex flex-col items-center">
        <li>Mobile App Design</li>
        <li>Responsive Design</li>
        <li>Database Development</li>
        <li>Web Design</li>
        <li>24/7 Support</li>
      </ul>
      <button className="w-fit bg-green text-white font-poppins px-10 py-2 rounded-2xl mt-5 ">
        Get {title}
      </button>
    </div>
  );
};

export default PlanCard;
