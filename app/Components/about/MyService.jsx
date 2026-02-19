import React from "react";
import ServiceCard from "./ServiceCard";
import Link from "next/link";

const Myservice = () => {
  const service = [
    {
      image:
        "https://res.cloudinary.com/thewebmaster/image/upload/c_scale,f_auto,q_auto:best,w_516/images/html/html5.png",
      title: "Design Trends",
      Description:
        "Designs now lean toward emotional storytelling using abstract shapes, colors, and layouts. It's less about clarity, more about vibe",
    },
    {
      image: "/images/responsive.png",
      title: "PSD Design",
      Description:
        "High fidelity Photoshop designs tailored for developers ready for pixel perfect implementation",
    },
    {
      image: "/images/responsive.png",
      title: "Customer Support",
      Description:
        "We don't don't just deliver we stay. Our support team ensures smooth onboarding, updates, and issue resolution",
    },
    {
      image: "/images/responsive.png",
      title: "Web Development",
      Description:
        "From front-end finesse to back-end power, we build scalable, secure, and trend aligned websites using modern stacks",
    },
    {
      image: "/images/responsive.png",
      title: "Fully Responsive",
      Description:
        "Every pixel adapts mobile, tablet, desktop. Your site looks stunning and functions flawlessly across all devices",
    },
    {
      image: "/images/responsive.png",
      title: "Branding",
      Description:
        "We shape your brand's identity from logo to tone of voice ensuring it resonates across cultures and platforms",
    },
  ];
  return (
    <section>
      <div className="container-1">
        <div className="row ">
          <h3 className="text-white opacity-50 text-start text-xs sm:text-sm md:text-base lg:text-lg xl:text-[15px] pt-8 sm:pt-12 md:pt-16 lg:pt-20 xl:pt-[7%] mb-4 sm:mb-6 md:mb-8 lg:mb-12 xl:mb-[17px] font-poppins">
            Services i offer to my clients
          </h3>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-[36px] font-bold font-poppins text-white leading-tight sm:leading-tight md:leading-tight lg:leading-tight xl:leading-tight 2xl:leading-[100%] text-start">
            My Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mt-6 sm:mt-8 md:mt-10">
            {service.map((item, index) => (
              <ServiceCard key={index} data={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Myservice;
