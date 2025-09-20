import React from "react";
import ServiceCard from "./ServiceCard";

const Myservice = () => {
  return (
    <section>
      <div className="container-1">
        <div className="row ">
          <h3 className="text-white opacity-50 text-start text-[15px] pt-[7%] mb-[17px] font-poppins">
            Services i offer to my clients
          </h3>
          <h2 className="text-[36px] font-bold font-poppins text-white leading-[100%] text-start">
            My Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            <ServiceCard
              image="https://res.cloudinary.com/thewebmaster/image/upload/c_scale,f_auto,q_auto:best,w_516/images/html/html5.png"
              title="Design Trends"
              Description="Designs now lean toward emotional storytelling using abstract shapes, colors, and layouts. It’s less about clarity, more about vibe"
            />
            <ServiceCard image="" title="PSD Design" Description="High fidelity Photoshop designs tailored for developers ready for pixel perfect implementation" />
            <ServiceCard image="" title="Customer Support" Description="We don’t just deliver we stay. Our support team ensures smooth onboarding, updates, and issue resolution" />
            <ServiceCard image="" title="Web Development" Description="From front-end finesse to back-end power, we build scalable, secure, and trend aligned websites using modern stacks" />
            <ServiceCard image="/images/responsive.png" title="Fully Responsive" Description="Every pixel adapts mobile, tablet, desktop. Your site looks stunning and functions flawlessly across all devices" />
            <ServiceCard image="" title="Branding" Description="We shape your brand’s identity from logo to tone of voice ensuring it resonates across cultures and platforms" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Myservice;
