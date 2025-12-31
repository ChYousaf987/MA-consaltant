import React from "react";

const TicketMain = () => {
  return (
    <section className="w-full bg-[#F3F3F3]">
      <div className=" mx-auto">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between">
          <div className="absolute left-10 bottom-10 z-20  mb-20">
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
          <div className="max-w-md p-3 md:text-start text-center mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mt-3 text-[#000544]">
              Ticket <span className="text-secondary"> Booking</span>
            </h2>

            <p className="mt-5 text-gray-600 leading-relaxed">
              Fast and reliable ticket booking for domestic and international
              travel.
            </p>

            <div className="flex justify-center md:justify-start items-center gap-4 mt-8">
              <button className="px-7 py-3 rounded-xl bg-primary text-white font-medium hover:scale-110 transition-all duration-500">
                Get Started
              </button>
              <button className="px-7 py-3 rounded-xl border border-[#007999] text-[#007999] font-medium hover:bg-[#007999] hover:text-white hover:scale-110 transition-all duration-500">
                Contact Us
              </button>
            </div>
          </div>
          <div className="md:hidden relative border-b-[6px] border-[#007999]">
            {/* Image */}
            <img
              src="/madjid.jpg"
              alt="About"
              className="w-full h-full object-cover"
            />

            {/* Overlay Layer */}
            <div className="absolute inset-0 bg-black/40"></div>
          </div>

          {/* RIGHT SVG IMAGE BLOCK */}
          <div className="relative hidden md:block">
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
              className="absolute top-0 right-0"
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
                    href="/ticket.jpg"
                    width="885"
                    height="926"
                    preserveAspectRatio="xMidYMid slice"
                  />
                </pattern>
              </defs>

              {/* IMAGE */}
              <path
                d="M0 0H885V926H380C170.132 926 0 755.868 0 546V0Z"
                fill="url(#aboutImage)"
              />

              {/* OVERLAY LAYER */}
              <path
                d="M0 0H885V926H380C170.132 926 0 755.868 0 546V0Z"
                fill="#000000"
                opacity="0.45"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TicketMain;