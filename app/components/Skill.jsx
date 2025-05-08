const skills = [
  { name: "HTML", icon: "/techstack/html.png" },
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
    <section id="skills" className="pt-20 pb-10 ">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-left mb-10 text-gray-100">
          Skills
        </h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-8 gap-8">
          {skills.map((skill) => (
            <div key={skill.name} className="flex flex-col items-center">
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-16 h-16 mb-2 rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-120 hover:shadow-lg hover:shadow-white"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
