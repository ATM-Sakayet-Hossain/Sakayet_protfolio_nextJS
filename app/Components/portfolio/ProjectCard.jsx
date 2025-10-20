"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

function ProjectCard({ data }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative flex w-full flex-col rounded-xl bg-white shadow-md hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105">
      <Link
        href={data?.link}
        target="_blank"
        rel="noopener noreferrer"
        className="relative h-48 sm:h-56 md:h-64 lg:h-72 overflow-hidden rounded-t-xl shadow-xl"
      >
        {data?.image ? (
          <Image
            src={data.image}
            alt={data.title ?? "Project image"}
            fill
            className="object-cover"
          />
        ) : (
          <div className="absolute inset-0 bg-gray-200" />
        )}
        <div
          className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 opacity-30"
          aria-hidden="true"
        />
      </Link>

      <div className="p-4 sm:p-6">
        <h5 className="mb-2 text-lg sm:text-xl font-semibold">{data?.title}</h5>
        <p className="text-sm sm:text-base font-light text-gray-600 leading-relaxed">
          {data?.description?.length > 140
            ? data.description.slice(0, 140) + "..."
            : data.description}
        </p>
      </div>

      <div className="p-4 sm:p-6 pt-0">
        <button
          onClick={() => setIsOpen(true)}
          className="inline-block rounded-lg bg-blue-500 py-2 sm:py-3 px-4 sm:px-6 text-xs sm:text-sm font-bold uppercase text-white shadow-md hover:shadow-lg transition-all hover:bg-blue-600"
        >
          Read More
        </button>
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#000000b6] bg-opacity-50 p-4">
          <div className="relative w-full max-w-lg rounded-lg bg-white p-4 sm:p-6 shadow-lg max-h-[90vh] overflow-y-auto">
            <h3 className="mb-4 text-lg sm:text-xl font-semibold">
              {data?.title}
            </h3>
            <p className="mb-6 text-sm sm:text-base text-gray-700 leading-relaxed">
              {data?.description}
            </p>
            <button
              onClick={() => setIsOpen(false)}
              className="rounded bg-red-500 px-4 py-2 text-sm sm:text-base text-white hover:bg-red-600 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProjectCard;
