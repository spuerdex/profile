"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

const skills = [
  // ======================
  // 🔹 Web / Programming
  // ======================
  { name: "HTML", icon: "/techstack/html.png" },
  { name: "CSS", icon: "/techstack/css.png" },
  { name: "JavaScript", icon: "/techstack/javascript.png" },
  { name: "Next.js", icon: "/techstack/nextjs.png" },
  { name: "Node.js", icon: "/techstack/nodejs.png" },
  { name: "Tailwind CSS", icon: "/techstack/tailwind.png" },
  { name: "MUI", icon: "/techstack/mui.png" },
  { name: "Figma", icon: "/techstack/figma.png" },

  // ======================
  // 🔹 งาน IT
  // ======================
  { name: "IT Support", icon: "/techstack/technical-support.png" },
  { name: "Networking", icon: "/techstack/local-area-network.png" },
  { name: "Server", icon: "/techstack/server.png" },

  // ======================
  // 🔹 งานโสตทัศน์ (AV)
  // ======================
  { name: "CCTV", icon: "/techstack/cctv.png" },
  { name: "Sound System", icon: "/techstack/sound-system.png" },
  { name: "Projector", icon: "/techstack/projector.png" },
];

export default function Skills() {
  return (
    <section id="skills" className="pt-20 pb-10 relative z-10 mask-t-from-50%">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-left mb-10 text-gray-100">
          Skills
        </h2>

        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          loop={true}
          breakpoints={{
            320: { slidesPerView: 2, spaceBetween: 20 },
            640: { slidesPerView: 3, spaceBetween: 30 },
            1024: { slidesPerView: 6, spaceBetween: 40 },
          }}
        >
          {skills.map((skill) => (
            <SwiperSlide key={skill.name}>
              <div className="flex flex-col items-center">
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-16 h-16 mb-2 rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-110 hover:shadow-lg hover:shadow-white"
                />
                <p className="text-gray-300 text-xs">{skill.name}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
