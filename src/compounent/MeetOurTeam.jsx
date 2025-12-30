import React, { useState } from "react";

const MeetOurTeam = () => {
  const images = ["/girl1.jpg", "/boy1.jpg", "/girl.jpg", "/boy.jpg"];

  const [active, setActive] = useState(0);
  const [animating, setAnimating] = useState(false);

  const nextIndex = (active + 1) % images.length;

  const swapImage = (index) => {
    if (animating || index === active) return;

    setAnimating(true);
    setTimeout(() => {
      setActive(index);
      setAnimating(false);
    }, 300);
  };

  return (
    <section className="relative mb-9 bg-white py-16 md:py-24 overflow-">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* LEFT – IMAGES */}
        <div className="relative flex flex-col md:flex-row justify-center items-end md:items-center">
          {/* LARGE IMAGE */}
          <div
            className={`relative z-10 transition-all duration-500 ease-in-out
              ${animating ? "opacity-0 scale-95" : "opacity-100 scale-100"}
            `}
          >
            <img
              src={images[active]}
              alt="Large"
              className="
                w-[240px] h-[270px]
                md:w-[280px] md:h-[330px]
                object-cover rounded-3xl shadow-xl
              "
            />
          </div>

          {/* SMALL IMAGE */}
          <div
            onClick={() => swapImage(nextIndex)}
            className="
              absolute -left-2 -bottom-24
              cursor-pointer transition-all duration-500
              hover:scale-105
            "
          >
            <img
              src={images[nextIndex]}
              alt="Small"
              className="
                w-[150px] h-[190px]
                md:w-[180px] md:h-[220px]
                object-cover rounded-2xl shadow-lg
              "
            />
          </div>

          {/* DOTS */}
          <div className="mt-6 absolute -bottom-28 mr-14 md:mr-0 flex gap-3">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => swapImage(i)}
                className={`w-3 h-3 rounded-full transition-all duration-300
                  ${
                    i === active
                      ? "bg-cyan-500 scale-125"
                      : "bg-cyan-300 hover:bg-cyan-400"
                  }
                `}
              />
            ))}
          </div>
        </div>

        {/* RIGHT – CONTENT */}
        <div className="text-center mt-20 md:mt-0 md:text-left">
          {/* Heading */}
          <div className="flex justify-center md:justify-start items-center gap-4 mb-4">
            <h2 className="text-3xl font-bold text-[#0b2c4d]">
              Meet Our <span className="text-cyan-500">Team</span>
            </h2>
            <span className="h-[3px] w-16 bg-cyan-500 rounded-full hidden md:block" />
          </div>

          {/* Description */}
          <p className="text-gray-600 leading-relaxed max-w-lg mx-auto md:mx-0 mb-8">
            Our team of experienced professionals is dedicated to providing
            clear guidance, reliable support, and personalized solutions at
            every step of your journey.
          </p>

          {/* Button */}
          <button className="bg-primary text-white px-8 py-3 rounded-full font-semibold shadow-md hover:scale-110 transition-all duration-500">
            Discover Team
          </button>

          {/* Decorative Dots – DESKTOP ONLY */}
          <div className="hidden md:block absolute right-32 bottom-0 z-50 mb-20">
            <div className="grid grid-cols-12 gap-2">
              {[...Array(60)].map((_, i) => (
                <span
                  key={i}
                  className="w-2 h-2 shadow-2xl bg-[#BCBBBB] rounded-full"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetOurTeam;
