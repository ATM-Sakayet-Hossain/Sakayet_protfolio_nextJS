import React from "react";
import { IoCall, IoLocationSharp, IoMail, IoPerson } from "react-icons/io5";

export default function ContactSection() {
  return (
    <div className=" text-white flex items-center justify-center">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10">
        {/* Left: Contact Form */}
        <div>
          <h2 className="text-2xl font-semibold mb-6">Message Me</h2>
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input
                placeholder="Name"
                className="bg-[#0f0f0f] border border-gray-800 p-3 rounded-md placeholder-gray-500 w-full outline-none"
              />
              <input
                placeholder="Email"
                type="email"
                className="bg-[#0f0f0f] border border-gray-800 p-3 rounded-md placeholder-gray-500 w-full outline-none"
              />
            </div>

            <input
              placeholder="Subject"
              className="bg-[#0f0f0f] border border-gray-800 p-3 rounded-md placeholder-gray-500 w-full outline-none"
            />

            <textarea
              placeholder="Message"
              rows="6"
              className="bg-[#0f0f0f] border border-gray-800 p-3 rounded-md placeholder-gray-500 w-full outline-none"
            />
            <button
              type="submit"
              className="bg-green hover:bg-green-400 text-white px-6 py-2 rounded-full font-medium"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Right: Contact Info */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Contact Info</h2>
          <p className="text-gray-400 mb-6">
            Always available for freelance work if the right project comes along,
            Feel free to contact me!
          </p>

          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <IoPerson className="text-green  text-2xl"/>
              <div>
                <p className="font-semibold">Name</p>
                <p className="text-gray-400">ATM Sakayet Hossain</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <IoLocationSharp className="text-green  text-2xl" />
              <div>
                <p className="font-semibold">Location</p>
                <p className="text-gray-400">
                  Uttara, Dhaka, Bangladesh
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <IoCall className="text-green  text-2xl" />
              <div>
                <p className="font-semibold">Call Me</p>
                <p className="text-gray-400">+880 1511896899</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <IoMail className="text-green  text-2xl" />
              <div>
                <p className="font-semibold">Email Me</p>
                <p className="text-gray-400">mdshakhawat434@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
