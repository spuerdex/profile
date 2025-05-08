"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

const skills = [
  { name: "HTML", icon: "/techstack/html.png"},
  { name: "CSS", icon: "/techstack/css.png" },
  { name: "JavaScript", icon: "/techstack/javascript.png" },
  { name: "nextjs", icon: "/techstack/nextjs.png" },
  { name: "Node.js", icon: "/techstack/nodejs.png" },
  { name: "Tailwind CSS", icon: "/techstack/tailwind.png" },
  { name: "MUI", icon: "/techstack/mui.png" },
  { name: "figma", icon: "/techstack/figma.png" },
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
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
