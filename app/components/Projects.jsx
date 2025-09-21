"use client";

import { useState } from "react";

const projects = [
  // ======================
  // 🔹 งาน IT
  // ======================
  {
    title: "Development of Web Application",
    images: ["projects/0001.jpg","/projects/020.jpg","/projects/023.jpg"],
    detail:
      "Designed and developed a web application using JavaScript, React.js, Node.js, and MUI with Tailwind CSS. Focused on responsive design.",
    category: "IT",
  },
  {
    title: "Data Monitoring",
    images: ["/projects/001.jpg", "/projects/007.jpg","/projects/019.jpg"],
    detail:
      "Implemented a real-time data monitoring dashboard for system metrics, ensuring reliability and seamless data presentation.",
    category: "IT",
  },
  {
    title: "Configuration Management System",
    images: ["/projects/012.jpg", "/projects/014.jpg","/projects/015.jpg"],
    detail:
      "Developed a client-server configuration management system with role-based access and rollback functionality.",
    category: "IT",
  },
  {
    title: "Internet System Installation",
    images: ["/projects/017.jpg", "/projects/004.jpg","/projects/009.jpg","/projects/003.jpg"],
    detail:
      "Led setup and maintenance of internet systems for commercial and residential sites, configuring routers, switches, and wireless access points.",
    category: "IT",
  },
  {
    title: "Fiber Optic System Installation",
    images: ["/projects/013.jpg", "/projects/004.jpg","/projects/018.jpg","/projects/002.jpg"],
    detail:
      "Installed and tested fiber optic cabling systems for high-speed internet infrastructure including splicing and troubleshooting.",
    category: "IT",
  },

  // ======================
  // 🔹 งานโสตทัศน์
  // ======================
  {
    title: "Installed and configured CCTV and security systems",
    images: ["/projects/av/01.jpg", "/projects/av/02.jpg","/projects/av/03.jpg"],
    detail:
      "Installed and configured CCTV and security systems for offices, buildings, and public areas, ensuring proper coverage and effective incident monitoring.",
    category: "AV",
  },
  {
    title: "Sound System Setup",
    images: ["/projects/av/05.jpg", "/projects/av/06.jpg","/projects/av/08.jpg","/projects/av/09.jpg"],
    detail:
      "Installed and configured audio systems for conferences, classrooms, and live events, ensuring high-quality sound and minimal feedback.",
    category: "AV",
  },
  {
    title: "Multimedia Presentation Support",
    images: ["/projects/av/11.jpg", "/projects/av/13.jpg","/projects/av/12.jpg","/projects/av/14.jpg"],
    detail:
      "Provided technical support for projectors, video conferencing systems, and streaming setups during academic and corporate events.",
    category: "AV",
  },
  {
    title: "Installed, maintained, and repaired office IT equipment.",
    image: "/projects/av/07.jpg",
    images: ["/projects/av/07.jpg", "/projects/av/16.jpg","/projects/av/17.jpg","/projects/av/15.jpg"],
    detail:
      "Installed, maintained, and troubleshot office IT equipment, including computers, printers, and network devices, ensuring minimal downtime and reliable system performance.",
    category: "AV",
  },

];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [filter, setFilter] = useState("All");

  const openProject = (project) => {
    setSelectedProject(project);
    setCurrentIndex(0); // เริ่มที่รูปแรก
  };

  const closeProject = () => {
    setSelectedProject(null);
    setCurrentIndex(0);
  };

  const nextImage = () => {
    if (!selectedProject) return;
    setCurrentIndex((prev) =>
      prev + 1 < selectedProject.images.length ? prev + 1 : 0
    );
  };

  const prevImage = () => {
    if (!selectedProject) return;
    setCurrentIndex((prev) =>
      prev - 1 >= 0 ? prev - 1 : selectedProject.images.length - 1
    );
  };

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <>
      <section id="projects" className="py-20 relative">
        <div className="relative max-w-6xl mx-auto px-4 z-10">
          <h2 className="text-2xl font-bold text-left mb-6 text-gray-100">
            Work Experience
          </h2>

          {/* ปุ่มเลือกหมวดหมู่ */}
          <div className="flex gap-4 mb-10">
            {["All", "IT", "AV"].map((cat) => (
              <button
                key={cat}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition ${
                  filter === cat
                    ? "bg-blue-500 text-white"
                    : "bg-gray-700 text-gray-200 hover:bg-gray-600"
                }`}
                onClick={() => setFilter(cat)}
              >
                {cat === "All"
                  ? "ทั้งหมด"
                  : cat === "IT"
                  ? "IT Support"
                  : "งานโสตทัศนูปกรณ์"}
              </button>
            ))}
          </div>

          {/* แสดงโปรเจ็กต์ */}
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className="rounded-lg overflow-hidden shadow-lg bg-gray-800 hover:shadow-white hover:scale-105 transition transform duration-200 ease-in-out cursor-pointer"
                onClick={() => openProject(project)}
              >
                <img
                  src={project.images[0]} // แสดงรูปแรกเป็น cover
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-sm font-semibold text-white">
                    {project.title}
                  </h3>
                  <p className="text-xs text-gray-400">
                    {project.category === "IT" ? "💻 IT" : "🎬 โสตฯ"}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal แสดงรายละเอียด */}
      {selectedProject && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50"
          onClick={closeProject}
        >
          <div
            className="absolute inset-0 bg-black bg-opacity-70 backdrop-blur-sm"
            onClick={closeProject}
          ></div>

          <div
            className="relative z-50 p-6 bg-gray-900 rounded-xl shadow-xl max-w-3xl w-full flex flex-col items-center space-y-4"
            onClick={(e) => e.stopPropagation()} // กัน modal ปิดตอนคลิกข้างใน
          >
            {/* รูปภาพพร้อมปุ่มเลื่อน */}
            <div className="relative w-full flex items-center justify-center">
              <img
                src={selectedProject.images[currentIndex]}
                alt="Selected Project"
                className="w-120 max-w-md h-80 rounded object-cover"
              />

              {/* ปุ่มเลื่อนซ้าย/ขวา */}
              <button
                onClick={prevImage}
                className="absolute left-0 px-3 py-2 bg-black bg-opacity-50 text-white rounded-r-lg"
              >
                ◀
              </button>
              <button
                onClick={nextImage}
                className="absolute right-0 px-3 py-2 bg-black bg-opacity-50 text-white rounded-l-lg"
              >
                ▶
              </button>
            </div>

            {/* ข้อมูลรายละเอียด */}
            <div className="bg-gray-800 rounded-lg p-4 w-full">
              <p className="text-white text-lg font-semibold text-left">
                {selectedProject.title}
              </p>
              <p className="text-white text-sm text-start">
                {selectedProject.detail}
              </p>
              <p className="text-gray-400 text-xs mt-2 text-right">
                {currentIndex + 1} / {selectedProject.images.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
