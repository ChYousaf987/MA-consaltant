import React from "react";

const Trusted = () => {
  return (
    <section className="relative w-full flex items-center min-h-[70vh] md:min-h-[90vh] mb-32 md:mt-10">
      {/* Background Image */}
      <img
        src="/aboutsection.jpg"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Teal Diagonal Shape – DESKTOP ONLY */}
      <svg
        viewBox="0 0 1000 1000"
        preserveAspectRatio="none"
        width="1400"
        className="hidden md:block absolute inset-0 h-full"
      >
        <path d="M0,0 L600,0 L350,1000 L0,1000 Z" fill="#007999" />
      </svg>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/10"></div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex flex-col items-center justify-center">
        {/* Heading */}
        <div className="text-center mb-10 my-8 md:mb-10">
          <h2 className="text-2xl md:text-4xl font-bold text-white leading-tight">
            Your Trusted Path to Global Travel
          </h2>
          <p className="text-white mt-4 text-sm md:text-base">
            Transparent guidance, expert support, and a smooth process for your
            global travel and visa journey.
          </p>
        </div>
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-center">
          {/* Video */}
          <div className="flex justify-center md:justify-start">
            <div className="relative w-[240px] md:w-[280px] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/video.jpg"
                alt="Video"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <svg width="40" height="40" viewBox="0 0 88 88">
                  <path
                    d="M44 0C68.3 0 88 19.7 88 44S68.3 88 44 88 0 68.3 0 44 19.7 0 44 0ZM32.5 63.9L67 44 32.5 24.1v39.8Z"
                    fill="#D9D9D9"
                  />
                </svg>
              </div>
            </div>
          </div>
          {/* Cards */}
          <div className="flex flex-col sm:flex-row gap-9">
            
            <div className="bg-white relative rounded-2xl p-6 shadow-xl">
              
              <div className="absolute -top-6 left-10 w-12 h-12 mb-4 rounded-xl bg-gray-300 flex items-center justify-center">
                
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 55 55"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  
                  <path
                    d="M2 17.1653C2.27733 11.5653 3.10667 8.072 5.592 5.592C8.072 3.10667 11.5653 2.27733 17.1653 2M52.6667 17.1653C52.3893 11.5653 51.56 8.072 49.0747 5.592C46.5947 3.10667 43.1013 2.27733 37.5013 2M37.5013 52.6667C43.1013 52.3893 46.5947 51.56 49.0747 49.0747C51.56 46.5947 52.3893 43.1013 52.6667 37.5013M17.1653 52.6667C11.5653 52.3893 8.072 51.56 5.592 49.0747C3.10667 46.5947 2.27733 43.1013 2 37.5013"
                    stroke="#007999"
                    stroke-width="4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M47.6933 25.5147C48.3413 26.3253 48.6667 26.7333 48.6667 27.3333C48.6667 27.9333 48.3413 28.3413 47.6933 29.152C44.7787 32.8 37.336 40.6667 27.3333 40.6667C17.3307 40.6667 9.888 32.8 6.97333 29.152C6.32533 28.3413 6 27.9333 6 27.3333C6 26.7333 6.32533 26.3253 6.97333 25.5147C9.888 21.8667 17.3307 14 27.3333 14C37.336 14 44.7787 21.8667 47.6933 25.5147Z"
                    stroke="#007999"
                    stroke-width="4"
                  />
                  <path
                    d="M32.6667 27.3333C32.6667 25.9188 32.1048 24.5623 31.1046 23.5621C30.1044 22.5619 28.7478 22 27.3333 22C25.9188 22 24.5623 22.5619 23.5621 23.5621C22.5619 24.5623 22 25.9188 22 27.3333C22 28.7478 22.5619 30.1044 23.5621 31.1046C24.5623 32.1048 25.9188 32.6667 27.3333 32.6667C28.7478 32.6667 30.1044 32.1048 31.1046 31.1046C32.1048 30.1044 32.6667 28.7478 32.6667 27.3333Z"
                    stroke="#007999"
                    stroke-width="4"
                  />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-800 my-2">
                
                Our <span className="text-secondary">Vision</span>
              </h4>
              <p className="text-gray-600 text-sm">
                
                To be a trusted consultancy known for honesty, clarity, and
                excellence across global travel services.
              </p>
            </div>
            <div className="bg-white relative rounded-2xl p-6 shadow-xl">
              
              <div className="absolute -top-6 left-10 w-12 h-12 mb-4 rounded-xl bg-gray-300 flex items-center justify-center">
                
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 64 64"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  
                  <path
                    d="M18.6668 23.9999C19.8925 23.9999 21.1062 23.7585 22.2385 23.2895C23.3709 22.8204 24.3998 22.1329 25.2665 21.2662C26.1332 20.3996 26.8207 19.3707 27.2897 18.2383C27.7588 17.1059 28.0002 15.8923 28.0002 14.6666C28.0002 13.4409 27.7588 12.2272 27.2897 11.0949C26.8207 9.9625 26.1332 8.9336 25.2665 8.06692C24.3998 7.20024 23.3709 6.51275 22.2385 6.04371C21.1062 5.57467 19.8925 5.33325 18.6668 5.33325C16.1915 5.33325 13.8175 6.31658 12.0672 8.06692C10.3168 9.81726 9.3335 12.1912 9.3335 14.6666C9.3335 17.1419 10.3168 19.5159 12.0672 21.2662C13.8175 23.0166 16.1915 23.9999 18.6668 23.9999ZM45.3335 23.9999C46.5592 23.9999 47.7728 23.7585 48.9052 23.2895C50.0376 22.8204 51.0665 22.1329 51.9332 21.2662C52.7998 20.3996 53.4873 19.3707 53.9564 18.2383C54.4254 17.1059 54.6668 15.8923 54.6668 14.6666C54.6668 13.4409 54.4254 12.2272 53.9564 11.0949C53.4873 9.9625 52.7998 8.9336 51.9332 8.06692C51.0665 7.20024 50.0376 6.51275 48.9052 6.04371C47.7728 5.57467 46.5592 5.33325 45.3335 5.33325C42.8581 5.33325 40.4842 6.31658 38.7338 8.06692C36.9835 9.81726 36.0002 12.1912 36.0002 14.6666C36.0002 17.1419 36.9835 19.5159 38.7338 21.2662C40.4842 23.0166 42.8581 23.9999 45.3335 23.9999Z"
                    stroke="#007999"
                    stroke-width="5.33333"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M5.3335 58.6666V46.6666C5.3335 39.3026 10.3602 33.3333 16.5615 33.3333H23.2988C28.7455 33.3333 32.0002 38.7026 32.0002 38.7026"
                    stroke="#007999"
                    stroke-width="5.33333"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M58.667 58.6666V46.6666C58.667 39.3026 53.5803 33.3333 47.3057 33.3333H40.4883C35.207 33.3333 31.9897 38.7026 32.0003 38.7026M14.667 53.3333H50.667"
                    stroke="#007999"
                    stroke-width="5.33333"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M45.7267 48.344L47.38 50.0067L50.6867 53.3333L47.38 56.748L45.7267 58.456M19.1067 48.3093L17.4267 49.9813L14.0693 53.324L17.4267 56.7213L19.1067 58.4213"
                    stroke="#007999"
                    stroke-width="5.33333"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-800 my-2">
                
                Our <span className="text-secondary">Mission</span>
              </h4>
              <p className="text-gray-600 text-sm">
                
                To simplify visas and travel through transparent, reliable, and
                efficient consultancy solutions.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* STATS BAR */}
      <div
        className="
          absolute 
          -bottom-24 md:-bottom-14 
          left-1/2 -translate-x-1/2 md:translate-x-0
          md:left-auto md:right-20
          w-[95%] md:w-[60%]
          bg-[#007999] rounded-2xl 
          py-5 md:py-6 px-6 md:px-10
          grid grid-cols-3 text-white text-center
        "
        style={{
          boxShadow: "0 -18px 35px rgba(0,0,0,0.35)",
        }}
      >
        <div>
          <p className="text-xl md:text-3xl font-bold">1,340+</p>
          <p className="text-xs md:text-sm opacity-80">Student Visas</p>
        </div>
        <div>
          <p className="text-xl md:text-3xl font-bold">97%</p>
          <p className="text-xs md:text-sm opacity-80">Success Rate</p>
        </div>
        <div>
          <p className="text-xl md:text-3xl font-bold">10+</p>
          <p className="text-xs md:text-sm opacity-80">Years Experience</p>
        </div>
      </div>
    </section>
  );
};

export default Trusted;
