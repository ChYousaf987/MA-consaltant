import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <section className="relative bg-[#F3F3F3] h-[80vh] md:h-[90vh]">
      {/* ================= BACKGROUND SHAPES ================= */}
      <div className="absolute right-0 top-0 z-20 pointer-events-none">
        {" "}
        <svg
          width="318"
          height="335"
          viewBox="0 0 1044 1095"
          xmlns="http://www.w3.org/2000/svg"
        >
          {" "}
          <defs>
            {" "}
            <pattern
              id="heroPattern"
              patternUnits="userSpaceOnUse"
              width="1280.36"
              height="1208.65"
              patternTransform="rotate(38.0213 0 150.325)"
            >
              {" "}
              <image
                href="/hero.jpg"
                width="1280.36"
                height="1208.65"
                preserveAspectRatio="xMidYMid slice"
              />{" "}
            </pattern>{" "}
          </defs>{" "}
          <rect
            x="-37.947"
            y="141.366"
            width="1104.36"
            height="1258.65"
            rx="94"
            transform="rotate(-38.0213 -37.947 141.366)"
            fill="url(#heroPattern)"
          />{" "}
        </svg>{" "}
      </div>{" "}
      {/* BLUE BACK SHAPE */}{" "}
      <div className="absolute right-0 top-0 z-10">
        {" "}
        <svg
          width="328"
          height="345"
          viewBox="0 0 1078 1105"
          xmlns="http://www.w3.org/2000/svg"
        >
          {" "}
          <rect
            x="-34.8875"
            y="193.65"
            width="1086.43"
            height="1297.08"
            rx="94"
            transform="rotate(-43.454 -34.8875 193.65)"
            fill="#007999"
          />{" "}
        </svg>{" "}
      </div>
      {/* IMAGE SHAPE */}
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
      {/* BLUE BACK SHAPE */}
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
              {/* TOP */}
              <stop offset="0%" stopColor="#007999" stopOpacity="1" />

              {/* BOTTOM */}
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
              <stop stop-color="#007999" />
              <stop offset="1" stop-color="#7CE4FF" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      {/* ================= NAVBAR ================= */}
      <nav className="relative z-30 md:max-w-7xl mx-auto px-3 md:px-10 pt-3 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="logo" className="w-32 md:w-48 md:ml-20" />
        </div>

        {/* Desktop Menu (unchanged) */}
        <div className="hidden lg:flex font-bold items-center gap-8">
          <a className="font-bold text-white border-b-2 border-white">Home</a>
          <a className="text-white">About Us</a>
          <a className="text-white">Services</a>
          <a className="text-white">Blogs</a>
          <a className="text-white">Contact Us</a>
          <button className="bg-primary hover:scale-110 transition-all duration-300 text-white px-5 py-2 rounded-full">
            Login
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-white text-3xl"
        >
          {open ? <HiX /> : <HiMenu />}
        </button>
      </nav>
      {/* Mobile Dropdown Menu */}
      {open && (
        <div className="lg:hidden absolute top-[80px] left-0 w-full bg-primary z-40 px-10 py-6 space-y-4 font-bold transition-all duration-300">
          <a className="block text-white">Home</a>
          <a className="block text-white">About Us</a>
          <a className="block text-white">Services</a>
          <a className="block text-white">Blogs</a>
          <a className="block text-white">Contact Us</a>
          <button className="w-full bg-white text-primary py-2 rounded-full">
            Login
          </button>
        </div>
      )}
      {/* ================= HERO CONTENT ================= */}
      <div className="relative z-30 md:max-w-7xl mx-auto ps-2 md:px-10 h-full grid grid-cols-1 lg:grid-cols-2 items-center">
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
