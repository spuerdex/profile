"use client";

import { useState } from "react";

const projects = [
  {
    title: "Development of Web Application",
    image: "/projects/0001.jpg",
    detail:
      "Designed and developed a web application using JavaScript, React.js, Node.js, and MUI with Tailwind CSS. Focused on responsive design ",
  },
  {
    title: "Data Monitoring",
    image: "/projects/001.jpg",
    detail:
      "Implemented a real-time data monitoring dashboard that tracked and visualized critical system metrics. Collaborated with IT support and customers to ensure system reliability, fast response to alerts, and seamless data presentation.",
  },
  {
    title: "Configuration Management System",
    image: "/projects/012.jpg",
    detail:
      "Developed a client-server configuration management system to automate the deployment and version control of network devices. Built with robust logging, role-based access, and easy rollback functionalities.",
  },
  {
    title: "Configuration Management System",
    image: "/projects/021.jpg",
    detail:
      "Extended the functionality of the existing configuration management system with enhanced UI/UX and security improvements. Integrated a backup and recovery module and improved system scalability for enterprise usage.",
  },
  {
    title: "Fiber Optic System Installation",
    image: "/projects/013.jpg",
    detail:
      "Installed and tested fiber optic cabling systems for high-speed internet infrastructure. Responsibilities included splicing, signal testing, troubleshooting, and preparing documentation for quality assurance.",
  },
  {
    title: "Internet System Installation",
    image: "/projects/017.jpg",
    detail:
      "Led the setup and maintenance of internet systems for commercial and residential sites. Tasks included configuring routers, switches, and wireless access points, along with post-installation support and documentation.",
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
      <section id="projects" className="py-20 relative">
        {/* <div
          className="absolute inset-0 bg-cover bg-center opacity-20 z-0"
          style={{ backgroundImage: "url('/bg002.jpg')" }}
        ></div> */}

        <div className="relative max-w-6xl mx-auto px-4 z-10">
          <h2 className="text-2xl font-bold text-left mb-10 text-gray-100">
            Work Experience
          </h2>

          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {projects.map((project, index) => (
              <div
                key={index}
                className="rounded-lg overflow-hidden shadow-lg bg-gray-800 hover:shadow-white hover:scale-105 transition transform duration-200 ease-in-out cursor-pointer"
                onClick={() => openImage(project.image)}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-sm font-semibold text-white">
                    {project.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedImage && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50"
          onClick={closeImage}
        >
          {/* พื้นหลังดำโปร่ง */}
          <div
            className="absolute inset-0 bg-black bg-opacity-70 backdrop-blur-sm"
            onClick={closeImage}
          ></div>

          {/* กล่องภาพ + รายละเอียด */}
          <div className="relative z-50 p-6 bg-gray-900 rounded-xl shadow-xl max-w-3xl w-full flex flex-col items-center space-y-4">
            <img
              src={selectedImage}
              alt="Selected Project"
              className="w-120 max-w-md h-120 rounded object-cover"
              onClick={closeImage}
            />
            <div className="bg-gray-800 rounded-lg p-4">
              <p className="text-white text-lg font-semibold text-left">
                {projects.find((p) => p.image === selectedImage)?.title}
              </p>
              <p className="text-white text-sm text-start">
                {projects.find((p) => p.image === selectedImage)?.detail}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
