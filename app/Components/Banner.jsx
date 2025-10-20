import React from 'react'
import TypingEffect from './TypingEffect'
import Link from 'next/link'
import { FaFacebookSquare, FaGithub, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa'

const Banner = () => {
  return (
    <section id="banner">
        <div className="container">
          <div className="row">
            <div className="text">
              <h1 className="text-[72px] font-extrabold text-white font-poppins flex justify-center pt-[300px]">
                ATM Sakayet Hossain
              </h1>
              <h2 className="flex items-center justify-center gap-4 text-[26px] font-semibold font-poppins text-white">
                I'm <span>a</span>
                <span>
                  <TypingEffect
                    words={["Web Designer", "Front-End Developer", "Freelancer"]}
                  />
                </span>
              </h2>
            </div>
            <div className="icons invisible md:visible flex flex-col gap-3 pr-12 pb-10">
              <Link
                href="https://www.facebook.com/ATMSakayetHossain/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookSquare className="text-white text-2xl hover:scale-[1.1] duration-[.3s]" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/atm-sakayet-hossain-348a9123b/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="text-white text-2xl hover:scale-[1.1] duration-[.3s]" />
              </Link>
              <Link
                href="https://github.com/ATM-Sakayet-Hossain"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="text-white text-2xl hover:scale-[1.1] duration-[.3s]" />
              </Link>
              <Link
                href="https://www.instagram.com/ATMSakayetHossain/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="text-white text-2xl hover:scale-[1.1] duration-[.3s]" />
              </Link>
              <Link
                href="https://www.youtube.com/@ATM-Sakayet-Hossain"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube className="text-white text-2xl hover:scale-[1.1] duration-[.3s]" />
              </Link>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Banner