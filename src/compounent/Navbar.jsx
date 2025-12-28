import React, { useEffect, useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

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
    <section className="relative bg-[#F3F3F3] h-[80vh] md:h-[90vh]">
      {/* ================= BACKGROUND SHAPES ================= */}
      <div className="absolute right-0 top-0 z-20 pointer-events-none">
        <svg
          width="318"
          height="335"
          viewBox="0 0 1044 1095"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="heroPattern"
              patternUnits="userSpaceOnUse"
              width="1280.36"
              height="1208.65"
              patternTransform="rotate(38.0213 0 150.325)"
            >
              <image
                href="/hero.jpg"
                width="1280.36"
                height="1208.65"
                preserveAspectRatio="xMidYMid slice"
              />
            </pattern>
          </defs>
          <rect
            x="-37.947"
            y="141.366"
            width="1104.36"
            height="1258.65"
            rx="94"
            transform="rotate(-38.0213 -37.947 141.366)"
            fill="url(#heroPattern)"
          />
        </svg>
      </div>

      <div className="absolute right-0 top-0 z-10">
        <svg
          width="328"
          height="345"
          viewBox="0 0 1078 1105"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="-34.8875"
            y="193.65"
            width="1086.43"
            height="1297.08"
            rx="94"
            transform="rotate(-43.454 -34.8875 193.65)"
            fill="#007999"
          />
        </svg>
      </div>

      <div className="hidden md:block absolute right-0 top-0 z-20 pointer-events-none">
        <svg
          width="890"
          height="665"
          viewBox="0 0 1044 1095"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="heroPattern"
              patternUnits="userSpaceOnUse"
              width="1280.36"
              height="1208.65"
              patternTransform="rotate(38.0213 0 150.325)"
            >
              <image
                href="/hero.jpg"
                width="1280.36"
                height="1208.65"
                preserveAspectRatio="xMidYMid slice"
              />
            </pattern>
          </defs>

          <rect
            x="-37.947"
            y="141.366"
            width="1104.36"
            height="1258.65"
            rx="94"
            transform="rotate(-38.0213 -37.947 141.366)"
            fill="url(#heroPattern)"
          />
        </svg>
      </div>

      <div className="hidden md:block absolute right-0 top-0 z-10">
        <svg
          width="908"
          height="675"
          viewBox="0 0 1078 1105"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="-34.8875"
            y="193.65"
            width="1086.43"
            height="1297.08"
            rx="94"
            transform="rotate(-43.454 -34.8875 193.65)"
            fill="#007999"
          />
        </svg>
      </div>

      {/* LEFT CURVE */}
      <div className="hidden md:block absolute -left-10 -top-9 z-0">
        <svg
          width="297"
          height="670"
          viewBox="0 0 297 1009"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              id="paint0"
              gradientUnits="userSpaceOnUse"
              x1="0"
              y1="0"
              x2="0"
              y2="1009"
            >
              <stop offset="0%" stopColor="#007999" stopOpacity="1" />
              <stop offset="80%" stopColor="#52DBFF" stopOpacity="1" />
            </linearGradient>
          </defs>

          <path
            opacity="0.73"
            d="M249.011 479.513C324.122 301.249 321.097 147.391 167.348 21.1202C13.5981 -105.15 28.7848 21.1202 -60 21.1202V1009C-9.40212 996.585 5.88097 977.419 -1.02069 911.379C15.9851 700.767 173.901 657.777 249.011 479.513Z"
            fill="url(#paint0)"
          />
        </svg>
      </div>

      <div className="absolute md:hidden -left-4 top-[20%] md:top-16 z-10">
        <svg
          width="136"
          height="504"
          viewBox="0 0 136 504"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M115.142 251.574C147.788 166.589 146.473 93.2384 79.6487 33.0406C12.824 -27.1572 -70.2358 8.63004 -19.1642 33.0406V504C2.82734 498.081 9.46988 488.944 6.47019 457.461C13.8615 357.054 82.497 336.559 115.142 251.574Z"
            fill="url(#paint0_linear_2_243)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_2_243"
              x1="58.4179"
              y1="6.28602"
              x2="58.4179"
              y2="504"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#007999" />
              <stop offset="1" stopColor="#7CE4FF" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* ================= NAVBAR ================= */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-colors duration-500 ${
          scrolled ? "bg-[#0000006a] shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="md:max-w-7xl mx-auto px-3 md:px-10 pt-3 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="logo" className="w-32 md:w-48 md:ml-40" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex font-bold items-center gap-8">
            <a className="font-bold border-b-2 border-white text-white hover:border-[#00CED1] transition-all duration-300">
              Home
            </a>
            <a className="text-white hover:text-[#00CED1] transition-all duration-300">
              About Us
            </a>
            <a className="text-white hover:text-[#00CED1] transition-all duration-300">
              Services
            </a>
            <a className="text-white hover:text-[#00CED1] transition-all duration-300">
              Blogs
            </a>
            <a className="text-white hover:text-[#00CED1] transition-all duration-300">
              Contact Us
            </a>
            <button className="bg-primary hover:scale-110 transition-all duration-300 text-white px-5 py-2 rounded-full">
              Login
            </button>
          </div>

          {/* Mobile Menu Icon */}
          <button onClick={() => setOpen(!open)} className="lg:hidden text-3xl">
            {open ? <HiX /> : <HiMenu />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        <div className="lg:hidden overflow-hidden">
          <div
            className={`absolute top-full left-0 w-full bg-primary z-40 px-6 py-6 space-y-4 font-bold transition-all duration-300 ${
              open
                ? "opacity-100 translate-y-0 pointer-events-auto"
                : "opacity-0 -translate-y-4 pointer-events-none"
            }`}
          >
            <a className="block text-white hover:text-[#00CED1] transition-all duration-300">
              Home
            </a>
            <a className="block text-white hover:text-[#00CED1] transition-all duration-300">
              About Us
            </a>
            <a className="block text-white hover:text-[#00CED1] transition-all duration-300">
              Services
            </a>
            <a className="block text-white hover:text-[#00CED1] transition-all duration-300">
              Blogs
            </a>
            <a className="block text-white hover:text-[#00CED1] transition-all duration-300">
              Contact Us
            </a>
            <button className="w-full bg-white text-primary py-2 rounded-full hover:scale-105 transition-all duration-300">
              Login
            </button>
          </div>
        </div>
      </nav>

      {/* ================= HERO CONTENT ================= */}
      <div className="pt-[80px] md:pt-[220px] relative z-30 md:max-w-7xl mx-auto ps-2 md:px-10 h-full grid grid-cols-1 lg:grid-cols-2 items-center">
        {/* LEFT CONTENT */}
        <div>
          <div className="-mt-32 -ml-20 mb-20 hidden md:block">
            {[...Array(5)].map((_, row) => (
              <div key={row} className="flex gap-2 mt-3">
                {[...Array(14)].map((_, i) => (
                  <span key={i} className="w-2 h-2 bg-[#BCBBBB] rounded-full" />
                ))}
              </div>
            ))}
          </div>

          <div className="px-3">
            <h1 className="text-2xl w-[55%] md:w-auto md:text-4xl font-bold text-primary mb-5">
              Reliable Services, Simplified
            </h1>

            <p className="max-w-md mb-8">
              Connect with trusted services in your area. Book quickly with a
              simple and secure process
            </p>

            <div className="flex gap-4">
              <button className="bg-primary text-white font-semibold hover:scale-110 transition-all duration-300 px-6 py-3 rounded-full">
                View Services
              </button>
              <button className="border-2 border-[#007999] text-[#007999] hover:scale-110 transition-all duration-300 font-semibold px-6 py-3 rounded-full">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
