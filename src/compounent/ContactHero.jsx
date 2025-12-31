import React, { useEffect, useRef, useState } from "react";
import { HiMenu, HiX, HiChevronDown } from "react-icons/hi";
import { NavLink, Link, useLocation } from "react-router-dom";

const services = [
  { name: "Haj & Umrah", path: "/umrah-service" },
  { name: "Study Visa", path: "/studyvisa" },
  { name: "Ticket Booking", path: "/ticketvisa" },
];
const ContactHero = () => {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Separate refs for desktop and mobile dropdowns
  const desktopServicesRef = useRef(null);
  const mobileServicesRef = useRef(null);

  const navLinkClass = ({ isActive }) =>
    `pb-1 transition-all duration-300 ${
      isActive
        ? "border-b-2 border-[#00CED1]"
        : "border-b-2 border-transparent hover:border-[#00CED1]"
    }`;

  // Close menus on route change
  useEffect(() => {
    setOpen(false);
    setServicesOpen(false);
  }, [location.pathname]);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Outside click for desktop services dropdown
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        desktopServicesRef.current &&
        !desktopServicesRef.current.contains(e.target)
      ) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <nav
        className={`sticky bg-[#00566e60] top-0 left-0 w-full z-50 transition-all duration-500 `}
      >
        <div className="md:w-[90%] mx-auto px-4 md:px-10 py-3 flex justify-between items-center">
          {/* Logo */}
          <Link to="/">
            <img src="/logo.png" alt="logo" className="w-32 md:w-48" />
          </Link>

          {/* ================= DESKTOP ================= */}
          <div className="hidden lg:flex items-center gap-8 text-white font-bold">
            <NavLink to="/" className={navLinkClass}>
              Home
            </NavLink>

            <NavLink to="/about" className={navLinkClass}>
              About Us
            </NavLink>

            {/* DESKTOP SERVICES */}
            <div className="relative" ref={desktopServicesRef}>
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex items-center gap-1 pb-1 hover:text-[#00CED1]"
              >
                Services
                <HiChevronDown
                  className={`transition-transform ${
                    servicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`absolute left-0 top-full mt-3 w-52 bg-[#00566e] rounded-xl shadow-xl transition-all duration-300 ${
                  servicesOpen
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-2 pointer-events-none"
                }`}
              >
                {services.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.path}
                    className={({ isActive }) =>
                      `block px-5 py-3 transition ${
                        isActive
                          ? "bg-[#00CED1] text-black"
                          : "hover:bg-[#00CED1] hover:text-black"
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>
            </div>

            <NavLink to="/blogs" className={navLinkClass}>
              Blogs
            </NavLink>

            <NavLink to="/contactus" className={navLinkClass}>
              Contact Us
            </NavLink>

            <Link to="/signup">
              <button className="bg-primary px-6 py-2 rounded-full hover:scale-110 transition">
                Login
              </button>
            </Link>
          </div>

          {/* ================= MOBILE ICON ================= */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-white text-3xl"
          >
            {open ? <HiX /> : <HiMenu />}
          </button>
        </div>

        {/* ================= MOBILE MENU ================= */}
        <div
          className={`lg:hidden bg-[#00566e] text-white transition-all duration-300 overflow-hidden ${
            open ? "max-h-[1000px] opacity-100 py-4" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col gap-4 px-6">
            <NavLink to="/" className="block py-2 border-b border-white">
              Home
            </NavLink>
            <NavLink to="/about" className="block py-2 border-b border-white">
              About Us
            </NavLink>

            {/* MOBILE SERVICES */}
            <div className="relative" ref={mobileServicesRef}>
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex justify-between items-center w-full py-2 border-b border-white"
              >
                Services
                <HiChevronDown
                  className={`transition-transform ${
                    servicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`flex flex-col pl-4 mt-2 bg-[#00485c] rounded-lg overflow-hidden transition-all duration-300 ${
                  servicesOpen
                    ? "max-h-[500px] opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                {services.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.path}
                    className={({ isActive }) =>
                      `block py-2 px-3 transition ${
                        isActive
                          ? "bg-[#00CED1] text-black"
                          : "hover:bg-[#00CED1] hover:text-black"
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>
            </div>

            <NavLink to="/blogs" className="block py-2 border-b border-white">
              Blogs
            </NavLink>
            <NavLink to="/contactus" className="block py-2 border-b border-white">
              Contact Us
            </NavLink>

            <Link to="/signup">
              <button className="bg-primary mt-2 px-6 py-2 rounded-full hover:scale-110 transition">
                Login
              </button>
            </Link>
          </div>
        </div>
      </nav>
      <section className="relative w-full h-[60vh] md:h-[80vh]  bg-gray-700 overflow-hidden">
        {/* Google Map */}
        <iframe
          title="Google Map "
          src="https://www.google.com/maps?q=Rawalpindi,Pakistan&output=embed"
          className="  inset-0 w-full h-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </>
  );
};

export default ContactHero;
