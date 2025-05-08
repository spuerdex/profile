export default function About() {
  return (
    <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center rounded-lg ">
      {/* Left: Text */}
      <div className="col-span-1">
        <h2 className="text-2xl font-bold mb-6 text-white">About Me</h2>
        <div className="text-sm text-gray-300 leading-loose space-y-5">
          <p className="text-sm">
            Hello, my name is{" "}
            <span className="text-white font-semibold">Chinnarat Khammasuk</span>.
            I am a passionate web developer who loves building seamless digital
            experiences through thoughtful design and clean code.
          </p>
          <p>
            I work with{" "}
            <span className="text-white font-semibold">
              HTML, CSS, JavaScript, React, and Node.js
            </span>
            , building modern and responsive web applications.
          </p>
          <p>
            I also have experience in{" "}
            <span className="text-white font-medium">
              IT support and network maintenance
            </span>
            , assisting users, maintaining systems, and troubleshooting
            hardware/software issues.
          </p>
          <p>
            I enjoy learning and constantly strive to improve my skills in both
            development and IT infrastructure.
          </p>
        </div>
        {/* <div>
          <button className="bg-white text-black py-2 px-4 rounded-lg hover:bg-gray-200 transition duration-300 ease-in-out transform hover:scale-105">
            Download CV
          </button>
        </div> */}
      </div>

      {/* Right: Image */}
      <div className="col-span-1 flex justify-end mask-l-from-20%">
        <img
          src="projects/022.jpg"
          alt="Chinnarat Khammasuk"
          className="w-120 h-80 rounded-sm object-cover shadow-lg  transition duration-300 ease-in-out transform hover:scale-105"
        />
      </div>
     
    </div>
  );
}
