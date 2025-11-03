import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-black text-white fixed w-full top-0 left-0 z-50 border-b border-gray-800">
      <div className="flex justify-between items-center px-6 py-4">
        <Link to="/" className="text-2xl font-bold text-red-500">
          AsifFlix
        </Link>

        {/* Hamburger for small screens */}
        <button
          className="lg:hidden text-red-500 focus:outline-none"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

        {/* Desktop Links */}
        <div className="hidden lg:flex space-x-8 text-lg">
          <Link to="/" className="hover:text-red-500 transition">Home</Link>
          <Link to="/projects" className="hover:text-red-500 transition">Projects</Link>
          <Link to="/experience" className="hover:text-red-500 transition">Experience</Link>
          <Link to="/skills" className="hover:text-red-500 transition">Skills</Link>
          <Link to="/education" className="hover:text-red-500 transition">Education</Link>
          <Link to="/about" className="hover:text-red-500 transition">About</Link>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="flex flex-col items-center space-y-4 pb-4 lg:hidden border-t border-gray-800">
          <Link to="/" onClick={() => setOpen(false)}>Home</Link>
          <Link to="/projects" onClick={() => setOpen(false)}>Projects</Link>
          <Link to="/experience" onClick={() => setOpen(false)}>Experience</Link>
          <Link to="/skills" onClick={() => setOpen(false)}>Skills</Link>
          <Link to="/education" onClick={() => setOpen(false)}>Education</Link>
          <Link to="/about" onClick={() => setOpen(false)}>About</Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
