import Image from "next/image";

export default function Footer() {
  return (
    <footer className="row-start-3 flex flex-col sm:flex-row gap-4 items-center justify-between px-6 py-2 bg-black text-gray-300">
      {/* Branding / Logo */}
      <div className="flex items-center gap-2">
        <img src="techstack/esc_profile.jpg" alt="Logo" width={30} height={30} className="rounded-full"/>
       
      </div>

      {/* Copyright */}
      <p className="text-sm text-center sm:text-left">
        &copy; {new Date().getFullYear()} Chinnarat Khammasuk. All rights
        reserved.
      </p>

      {/* Social Links */}
      <div className="flex gap-4 text-sm">
        
        <a
          href="https://www.facebook.com/spuerdex"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white"
        >
          Facebook
        </a>
        <a href="mailto:spuerdex@gmail.com" className="hover:text-white">
          Email
        </a>
      </div>
    </footer>
  );
}
