import Image from "next/image";
import React from "react";

const ServiceCard = ({ image, title, Description }) => {
  return (
    <div className="bg-[#00000030] p-4 sm:p-6 md:p-8 lg:p-10 border-2 hover:border-green rounded-2xl transition-all duration-300 hover:transform hover:scale-120">
      <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 p-3 sm:p-4 text-white bg-green mb-4 sm:mb-6">
        <Image
          width={50}
          height={50}
          src={image}
          alt="icon"
          className="w-full h-full"
        />
      </div>
      <h2 className="text-lg sm:text-xl md:text-2xl font-poppins font-normal text-white tracking-[.5px] mb-2 sm:mb-3">
        {title}
      </h2>
      <p className="text-xs sm:text-sm md:text-base lg:text-[15px] font-poppins font-normal text-sencond tracking-[.5px] leading-relaxed">
        {Description}
      </p>
    </div>
  );
};

export default ServiceCard;
