import React from "react";

const AboutMain = () => {
  return (
    <section className="w-full bg-[#F3F3F3]">
      <div className=" mx-auto">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between">
          <div className="absolute left-10 bottom-10 z-50  mb-20">
            {/* Dots */}
            <div className="hidden md:grid grid-cols-12 gap-2 ">
              {[...Array(84)].map((_, i) => (
                <span
                  key={i}
                  className="w-2 h-2 shadow-2xl bg-[#BCBBBB] rounded-full"
                />
              ))}
            </div>
          </div>
          {/* LEFT CONTENT */}
          <div className="max-w-md mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mt-3 text-[#000544]">
              About Us
            </h2>

            <p className="mt-5 text-gray-600 leading-relaxed">
              Reliable consultancy services designed to simplify your journey.
              Clear guidance, trusted support, and a smooth process from start
              to finish.
            </p>

            <div className="flex gap-4 mt-8">
              <button className="px-7 py-3 rounded-xl bg-[#007999] text-white font-medium hover:bg-[#00627a] transition">
                Explore Menu
              </button>
              <button className="px-7 py-3 rounded-xl border border-[#007999] text-[#007999] font-medium hover:bg-[#007999] hover:text-white transition">
                Contact Us
              </button>
            </div>
          </div>

          {/* RIGHT SVG IMAGE BLOCK */}
          <div className="relative ">
            {/* BACK SVG */}
            <svg
              width="802"
              height="626"
              viewBox="0 0 902 926"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 0H902V926H380C170.132 926 0 755.868 0 546V0Z"
                fill="#007999"
              />
            </svg>

            {/* FRONT SVG WITH IMAGE */}
            <svg
              className="absolute top-0 right-0 "
              preserveAspectRatio="none"
              width="700"
              height="635"
              viewBox="0 0 885 926"
            >
              <defs>
                <pattern
                  id="aboutImage"
                  patternUnits="objectBoundingBox"
                  width="1"
                  height="1"
                >
                  <image
                    href="/about.jpg"
                    width="885"
                    height="926"
                    preserveAspectRatio="xMidYMid slice"
                  />
                </pattern>
              </defs>

              <path
                d="M0 0H885V926H380C170.132 926 0 755.868 0 546V0Z"
                fill="url(#aboutImage)"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMain;
