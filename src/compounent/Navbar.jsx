import React from "react";

const Navbar = () => {
  return (
    <section className="relative h-[90vh]">
      {/* ================= BACKGROUND SHAPES ================= */}

      {/* IMAGE SHAPE */}
      <div className="absolute right-0 top-0 z-20 pointer-events-none">
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
      <div className="absolute right-0 top-0 z-10">
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
      <div className="absolute -left-10 -top-9 z-0">
        <svg
          width="297"
          height="670"
          viewBox="0 0 297 1009"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.73"
            d="M249.011 479.513C324.122 301.249 321.097 147.391 167.348 21.1202C13.5981 -105.15 28.7848 21.1202 -60 21.1202V1009C-9.40212 996.585 5.88097 977.419 -1.02069 911.379C15.9851 700.767 173.901 657.777 249.011 479.513Z"
            fill="url(#paint0)"
          />
          <defs>
            <linearGradient
              id="paint0"
              x1="118.5"
              y1="-35"
              x2="118.5"
              y2="1009"
            >
              <stop stopColor="#007999" />
              <stop offset="1" stopColor="#52DBFF" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* ================= NAVBAR ================= */}
      <nav className="relative z-30 max-w-7xl mx-auto px-10 pt-3 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="logo" className="w-48 ml-20" />
          {/* <div>
            <h3 className="font-bold text-[#0A1D56]">MA Consultant</h3>
            <p className="text-xs text-gray-500">
              Your Path to Global Opportunities
            </p>
          </div> */}
        </div>

        {/* Menu */}
        <div className="flex items-center gap-8">
          <a className="font-semibold text-white border-b-2 border-white">
            Home
          </a>
          <a className="text-white">About Us</a>
          <a className="text-white">Services</a>
          <a className="text-white">Blogs</a>
          <button className="bg-[#007999] text-white px-5 py-2 rounded-full">
            Contact Us
          </button>
        </div>
      </nav>

      {/* ================= HERO CONTENT ================= */}
      <div className="relative z-30 max-w-7xl mx-auto px-10 h-full grid grid-cols-2 items-center">
        {/* LEFT CONTENT */}
        <div>
          <div className=" -mt-32 -ml-20 mb-20">
            {/* Dots */}
            <div className="flex gap-2  ">
              {[...Array(14)].map((_, i) => (
                <span
                  key={i}
                  className="w-2 h-2 shadow-2xl bg-[#BCBBBB] rounded-full"
                />
              ))}
            </div>
            {/* Dots */}
            <div className="flex gap-2 mt-3 ">
              {[...Array(14)].map((_, i) => (
                <span
                  key={i}
                  className="w-2 h-2 shadow-2xl bg-[#BCBBBB] rounded-full"
                />
              ))}
            </div>
            {/* Dots */}
            <div className="flex gap-2 mt-3 ">
              {[...Array(14)].map((_, i) => (
                <span
                  key={i}
                  className="w-2 h-2 shadow-2xl bg-[#BCBBBB] rounded-full"
                />
              ))}
            </div>
            {/* Dots */}
            <div className="flex gap-2 mt-3 ">
              {[...Array(14)].map((_, i) => (
                <span
                  key={i}
                  className="w-2 h-2 shadow-2xl bg-[#BCBBBB] rounded-full"
                />
              ))}
            </div>
            {/* Dots */}
            <div className="flex gap-2 mt-3 ">
              {[...Array(14)].map((_, i) => (
                <span
                  key={i}
                  className="w-2 h-2 shadow-2xl bg-[#BCBBBB] rounded-full"
                />
              ))}
            </div>
          </div>

          <h1 className="text-4xl font-bold text-[#0A1D56] mb-5">
            Reliable Services, Simplified
          </h1>

          <p className="text-gray-600 max-w-md mb-8">
            Connect with trusted services in your area. Book quickly with a
            simple and secure process
          </p>

          <div className="flex gap-4">
            <button className="bg-[#007999] text-white px-6 py-3 rounded-full">
              View Services
            </button>
            <button className="border border-[#007999] text-[#007999] px-6 py-3 rounded-full">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
