"use client";

import { useState } from "react";
const projects = [
  {
    title: "Devolopment of Web Application",
    image: "/projects/0001.jpg",
  },
  {
    title: "Data Monitoring",
    image: "/projects/001.jpg",
  },
  {
    title: "Configuration Management System",
    image: "/projects/002.jpg",
  },
  {
    title: "Configuration Management System",
    image: "/projects/005.jpg",
  },
  {
    title: "Fiber optic system installation",
    image: "/projects/004.jpg",
  },
  {
    title: "Internet system installation",
    image: "/projects/006.jpg",
  },
];

export default function Projects() {
  const [selectedImage, setSelectedImage] = useState(null);

  const openImage = (image) => {
    setSelectedImage(image);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <section id="projects" className="py-15 ">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-left mb-10 text-gray-100">
            Work Experience
          </h2>
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {projects.map((project, index) => (
              <div
                key={index}
                className="rounded-lg overflow-hidden shadow-sm hover:shadow-sm hover:shadow-white transition cursor-pointer transform hover:scale-105 duration-100 ease-in-out"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-58 object-cover"
                  onClick={() => openImage(project.image)}
                />
                <div className="p-4 bg-gray-900">
                  <h3 className="text-sm font-semibold text-gray-200">
                    {project.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedImage && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div
            className="bg-black opacity-80 fixed inset-0"
            onClick={closeImage}
          ></div>

          <img
            src={selectedImage}
            alt="Selected Image"
            className="max-w- max-h-full z-50"
            onClick={closeImage}
          />
        </div>
      )}
    </>
  );
}
