import React from "react";
import TypingEffect from "./TypingEffect";
import Link from "next/link";
import {
  FaFacebookSquare,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";

const Banner = () => {
  return (
    <section id="banner">
      <div className="container">
        <div className="row">
          <div className="text">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[72px] font-extrabold text-white font-poppins flex justify-center pt-32 sm:pt-40 md:pt-48 lg:pt-56 xl:pt-64 2xl:pt-[300px]">
              ATM Sakayet Hossain
            </h1>
            <h2 className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-[26px] font-semibold font-poppins text-white px-4 sm:px-0">
              <span>I'm</span>
              <span>a</span>
              <span>
                <TypingEffect
                  words={["Web Designer", "Front-End Developer", "Freelancer"]}
                />
              </span>
            </h2>
          </div>
          <div className="icons hidden sm:flex flex-col gap-3 pr-4 sm:pr-8 md:pr-12 pb-6 sm:pb-8 md:pb-10">
            <Link
              href="https://www.facebook.com/ATMSakayetHossain/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookSquare className="text-white text-xl sm:text-2xl hover:scale-[1.1] duration-[.3s]" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/atm-sakayet-hossain-348a9123b/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-white text-xl sm:text-2xl hover:scale-[1.1] duration-[.3s]" />
            </Link>
            <Link
              href="https://github.com/ATM-Sakayet-Hossain"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-white text-xl sm:text-2xl hover:scale-[1.1] duration-[.3s]" />
            </Link>
            <Link
              href="https://www.instagram.com/ATMSakayetHossain/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-white text-xl sm:text-2xl hover:scale-[1.1] duration-[.3s]" />
            </Link>
            <Link
              href="https://www.youtube.com/@ATM-Sakayet-Hossain"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube className="text-white text-xl sm:text-2xl hover:scale-[1.1] duration-[.3s]" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
