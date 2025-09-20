import React from "react";
import { IoMdQuote } from "react-icons/io";

const TestimonialCard = () => {
  return (
    <div className="bg-[#00000030] p-10">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4 mb-4">
          <img
            src="/images/client-1.jpg"
            alt="icon"
            className="w-15 h-15 rounded-full"
          />
          <div>
            <h2 className="text-white">Maria Wilson</h2>
            <span className="text-white">Envato Customer</span>
          </div>
        </div>
        <IoMdQuote className="text-green text-5xl" />
      </div>
      <p className="text-[15px] font-poppins font-normal text-sencond tracking-[.5px]">
        Emma did an excellent creative job, addressing our request quickly, and
        also providing her own graphic insight, being open to feedback and
        changes or edits when they arose. She worked with us the entire way.
        Highly recommended.
      </p>
    </div>
  );
};

export default TestimonialCard;
