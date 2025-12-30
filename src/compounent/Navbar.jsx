import React, { useEffect, useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll effect for navbar background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) setScrolled(true);
      else setScrolled(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative">
      {/* ================= NAVBAR ================= */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-colors duration-500 ${
          scrolled ? "bg-[#00566e60] shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="md:w-[90%] mx-auto px-3 md:px-10 pt-3 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="logo" className="w-32 md:w-48 " />
          </div>

          {/* Desktop Menu */}
          <div className="hidden cursor-pointer text-white lg:flex font-bold items-center gap-8">
            <Link
              to="/"
              className="font-bold border-b-2 border-white  hover:border-[#00CED1] transition-all duration-300"
            >
              Home
            </Link>
            <Link
              to="/about"
              className=" hover:text-[#00CED1] transition-all duration-300"
            >
              About Us
            </Link>
            <a className=" hover:text-[#00CED1] transition-all duration-300">
              Services
            </a>
            <a className=" hover:text-[#00CED1] transition-all duration-300">
              Blogs
            </a>
            <a className=" hover:text-[#00CED1] transition-all duration-300">
              Contact Us
            </a>
            <Link to="/signup">
              <button className="bg-primary hover:scale-110 transition-all duration-300  px-5 py-2 rounded-full">
                Login
              </button>
            </Link>
          </div>

          {/* Mobile Menu Icon */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-white text-3xl"
          >
            {open ? <HiX /> : <HiMenu />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        <div className="lg:hidden overflow-hidden">
          <div
            className={`absolute text-white top-full left-0 w-full bg-[#00566e96] text-center z-40 px-6 py-6 space-y-4 font-bold transition-all duration-300 ${
              open
                ? "opacity-100 translate-y-0 pointer-events-auto"
                : "opacity-0 -translate-y-4 pointer-events-none"
            }`}
          >
            <Link
              to="/"
              className="block  hover:text-[#00CED1] transition-all duration-300"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block  hover:text-[#00CED1] transition-all duration-300"
            >
              About Us
            </Link>
            <Link
              to="/umrah-service"
              className="block  hover:text-[#00CED1] transition-all duration-300"
            >
              Services
            </Link>
            <a className="block  hover:text-[#00CED1] transition-all duration-300">
              Blogs
            </a>
            <a className="block  hover:text-[#00CED1] transition-all duration-300">
              Contact Us
            </a>
            <Link to="/signup">
              <button className="bg-primary mt-4 hover:scale-110 transition-all duration-300  px-5 py-2 rounded-full">
                Login
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
