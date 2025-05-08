import Head from "next/head";
import Footer from "./components/Footer";
import About from "./components/About";
import Skills from "./components/Skill";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <>
      <Head>
        <title>Chinnarat Kh.</title>
        <meta name="description" content="Personal profile landing page" />
      </Head>
      <section className="text-center mt-2 bg-gray-900">
        <header className="w-full bg-black shadow-md fixed top-0 left-0 z-50">
          <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
            <div className="text-xl font-bold text-gray-100">
              <img src="techstack/esc_profile.jpg" alt="Logo" width={30} height={30} className="rounded-full" />
            </div>
            <nav className="space-x-6">
              <a href="#about" className="text-gray-100 hover:text-gray-300">
                About
              </a>
              <a href="#skills" className="text-gray-100 hover:text-gray-300">
                Skills
              </a>
              <a href="#projects" className="text-gray-100 hover:text-gray-300">
                Projects
              </a>
              <a href="#contact" className="text-gray-100 hover:text-gray-300">
                Contact
              </a>
            </nav>
          </div>
        </header>
      </section>

      <section id="about" className="pt-30 pb-10 relative bg-gray-900">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30 z-0 w-auto h-50px mask-b-from-80%"
          style={{ backgroundImage: "url('/techstack/bgabout.jpg')" }}
        ></div>
        <About />
      </section>

      <section id="skills" className="bg-gray-900 ">
        <Skills />
      </section>
      <section id="projects" className="bg-gray-900 relative">
        <Projects />
      </section>
      <section id="contact " className="relative bg-gray-900">
        <Contact />
      </section>
      <section className="text-center">
        <Footer />
      </section>
    </>
  );
}
