import Image from "next/image";
import React from "react";

const ServiceCard = ({ image, title, Description }) => {
  return (
    <div className="bg-[#00000030] p-10 hover:border-2 border-green rounded-2xl">
      <div className="w-20 h-20 p-4 text-white bg-green mb-6">
        <Image
          width={50}
          height={50}
          src={image || "/images/graphic-design.png"}
          alt="icon"
          className="w-full h-full"
        />
      </div>
      <h2 className="text-2xl font-poppins font-normal text-white tracking-[.5px]">
        {title}
      </h2>
      <p className="text-[15px] font-poppins font-normal text-sencond tracking-[.5px]">
        {Description}
      </p>
    </div>
  );
};

export default ServiceCard;
