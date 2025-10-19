import Link from "next/link";
import React from "react";
import { IoMdClose } from "react-icons/io";
import Divider from "../Components/Divider";
import ProjectCard from "../Components/portfolio/ProjectCard";

const page = () => {
  const projects = [
    {
      title: "Hospital Management System",
      description:
        "Hospital Management System is a complete web based platform designed to manage all hospital operations including patient registration, doctor scheduling, billing, pharmacy, diagnostics, and reporting in one place. The system helps hospitals automate daily tasks, reduce paperwork, and ensure secure access through a clean and responsive user interface built with modern web technologies.",
      image: "/images/project/Hospital.png",
      link: "https://sakkhor-hospital.vercel.app/",
    },
    {
      title: "E-commerce Platform",
      description: "This is a brief description of Project Two.",
      image: "/images/project2.jpg",
      link: "/projects/project-two",
    },
    {
      title: "Project Three",
      description: "This is a brief description of Project Two.",
      image: "/images/project2.jpg",
      link: "/projects/project-two",
    },
    {
      title: "Project Four",
      description: "This is a brief description of Project Two.",
      image: "/images/project2.jpg",
      link: "/projects/project-two",
    },
    {
      title: "Project Five",
      description: "This is a brief description of Project Two.",
      image: "/images/project2.jpg",
      link: "/projects/project-two",
    },
    {
      title: "Project Six",
      description: "This is a brief description of Project Two.",
      image: "/images/project2.jpg",
      link: "/projects/project-two",
    },
    // Add more projects as needed
  ];

  return (
    <section>
      <div className="about">
        <span className="home_animation"></span>
        <div className="container-1">
          <div className="row ">
            <div className="close_button flex justify-end pt-6 text-3xl text-white fixed right-16 top-2">
              <Link href="/">
                <IoMdClose />
              </Link>
            </div>
            <h3 className="text-white opacity-50 text-center text-[15px] pt-[7%] mb-[17px] font-poppins">
              Showcasing some of my best work
            </h3>
            <h2 className="text-[46px] font-bold font-poppins text-white leading-[100%] text-center mb-8">
              Portfolio
            </h2>
            <Divider />
          </div>
          <div className="grid grid-cols-3 gap-4">
            {projects.map((projects, index) => (
              <ProjectCard data={projects} key={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
