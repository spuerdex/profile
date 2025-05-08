export default function Contact() {
  return (
    <>
      <section id="contact" className="py-10  text-gray-200 relative z-10">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 z-0 mask-t-from-50%"
          style={{ backgroundImage: "url('/techstack/bgkey.jpg')" }}
        ></div>
        <div className=" relative max-w-6xl mx-auto px-4 z-10">
          <h2 className="text-3xl font-bold mb-6">Contact</h2>

          {/* Contact Info */}
          <div className="grid md:grid-cols-3 gap-8 mb-5">
            <div className="space-y-3 text-sm">
              <p className="flex items-center gap-2">
                📧 Email:{" "}
                <a
                  href="mailto:spuerdex@gmail.com"
                  className="text-gray-300 hover:underline"
                >
                  spuerdex@gmail.com
                </a>
              </p>
              <p className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-green-500"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M2.01 12C2.01 6.48 6.49 2 12.01 2s10 4.48 10 10-4.48 10-10 10a9.93 9.93 0 0 1-5.24-1.48l-4.48 1.19 1.19-4.49A9.93 9.93 0 0 1 2.01 12zm11.5 1.25c.06.31.1.62.12.93.01.17.01.34.01.5 0 1.71-.88 3.25-2.26 4.2l-.26.18-.23-.17c-1.38-.95-2.26-2.5-2.26-4.21 0-.16 0-.33.01-.5.02-.31.06-.62.12-.93.19-.99.77-1.81 1.54-2.36a4.15 4.15 0 0 1 2.42-.74c.86 0 1.66.26 2.33.74.77.55 1.35 1.37 1.54 2.36z" />
                </svg>
                Line: <span className="text-gray-300">bigchin01</span>
              </p>
              <p className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-blue-500"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 5 3.66 9.13 8.44 9.88v-6.99H7.9v-2.89h2.54V9.41c0-2.51 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.46h-1.25c-1.23 0-1.61.77-1.61 1.56v1.88h2.74l-.44 2.89h-2.3v6.99C18.34 21.13 22 17 22 12z" />
                </svg>
                Facebook:{" "}
                <a
                  href="https://www.facebook.com/spuerdex"
                  className="text-blue-500 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  facebook.com/spuerdex
                </a>
              </p>

              <p>
                📞 Tel: <span className="text-gray-300">091-802-9939</span>
              </p>
            </div>

            {/* Personal Info */}
            <div className="space-y-2 text-sm">
              <p>👤 Name: Chinnarat Khammasuk</p>
              <p>🎂 Age: 30</p>
              <p>🏠 Address: Chiang Rai, Thailand</p>
              <p>💼 Work: IT Support & Programmer</p>
            </div>

            {/* Work Timeline */}
            <div className=" relative space-y-4 text-sm">
              <div className="relative border-l border-gray-700 pl-4">
                <div className="mb-6">
                  <div className="absolute -left-1.5 w-3 h-3 bg-green-500 rounded-full border border-white"></div>
                  <p className="text-gray-400 font-medium">2023 - 2025</p>
                  <p className="text-gray-300">IT Support & Programmer</p>
                  <p className="text-gray-500">
                    X-innovations technology Co.,Ltd., Thailand
                  </p>
                </div>

                <div className="mb-6">
                  <div className="absolute -left-1.5 w-3 h-3 bg-yellow-500 rounded-full border border-white"></div>
                  <p className="text-gray-400 font-medium">2020 - 2023</p>
                  <p className="text-gray-300">IT Technician & Network</p>
                  <p className="text-gray-500">
                    TechnicMicrosoft Engineering Network Co.,Ltd., Thailand
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div className="relative rounded-lg overflow-hidden text-sm leading-relaxed">
            {/* Background image layer */}

            {/* Content layer */}
            <div className="relative z-10 p-4 bg-gray-900 border border-gray-600 rounded-lg">
              <h3 className="text-lg font-semibold mb-2 text-white">
                Work Experience
              </h3>
              <ul className="pl-5 text-white space-y-1">
                <li>
                  Designed UX/UI and developed interfaces to enhance user
                  experience.
                </li>
                <li>
                  Developed websites using technologies such as CSS, Tailwind
                  CSS, Material UI (MUI), and JavaScript.
                </li>
                <li>
                  Managed and monitored internal network systems, including
                  troubleshooting and providing user support.
                </li>
                <li>
                  Installed and maintained CCTV, LAN, WAN, and WLAN network
                  systems.
                </li>
                <li>
                  Installation and configuration for Wi-Fi access points like
                  Cisco, Aruba, TP-Link, Unifi.
                </li>
                <li>
                  Coordinated effectively with both internal and external teams.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
