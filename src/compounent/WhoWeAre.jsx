import React from "react";

const WhoWeAre = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* BACKGROUND SVG */}
      <svg
        className="hidden md:block absolute bottom-0 left-0 w-full h-auto -z-10"
        viewBox="0 0 1723 985"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 835.903V0H1723V799.876C1070.73 1031.11 694.396 1048.68 0 835.903Z"
          fill="#F3F3F3"
        />
      </svg>

      {/* CONTENT */}
      <div className="relative z-10 py-20 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT – IMAGES */}
        <div className="relative flex items-center">
          <div className="relative">
            <img
              src="/girl.jpg"
              alt="Consultant"
              className="w-72 h-80 object-cover rounded-2xl shadow-lg"
            />

            <div className="absolute -bottom-10 left-10 bg-primary text-white rounded-xl px-5 py-3 shadow-lg">
              <p className="text-2xl font-bold leading-none">680+</p>
              <p className="text-xs uppercase tracking-wide">Business Trust</p>
            </div>
          </div>

          <div className="absolute left-56 top-20">
            <img
              src="/boy.jpg"
              alt="Business Man"
              className="w-72 h-80 object-cover rounded-2xl shadow-lg"
            />
          </div>
        </div>

        {/* RIGHT – CONTENT */}
        <div>
          <div className="flex items-center gap-4 mb-4">
            <h2 className="text-3xl font-bold text-[#0b2c4d]">
              Who We <span className="text-secondary">Are</span>
            </h2>
            <span className="h-[3px] w-14 bg-[#0099cc] rounded-full" />
          </div>

          <p className="text-gray-900 leading-relaxed max-w-lg">
            We are a professional consultancy providing reliable services in
            study visas, Hajj & Umrah, and ticket booking. Our goal is to make
            every process simple, transparent, and stress-free for our clients.
          </p>

          <div className="flex items-center gap-3 mt-6">
            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gray-100 border border-[#0099cc] text-[#0099cc]">
              <svg
                width="27"
                height="27"
                viewBox="0 0 44 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M35.4517 7.27204H29.9976V4.545C29.9976 4.30391 29.9019 4.0727 29.7314 3.90223C29.5609 3.73176 29.3297 3.63599 29.0886 3.63599C28.8475 3.63599 28.6163 3.73176 28.4459 3.90223C28.2754 4.0727 28.1796 4.30391 28.1796 4.545V7.27204H15.4534V4.545C15.4534 4.30391 15.3576 4.0727 15.1872 3.90223C15.0167 3.73176 14.7855 3.63599 14.5444 3.63599C14.3033 3.63599 14.0721 3.73176 13.9016 3.90223C13.7312 4.0727 13.6354 4.30391 13.6354 4.545V7.27204H8.1813C6.97632 7.27349 5.8211 7.7528 4.96904 8.60486C4.11699 9.45691 3.63767 10.6121 3.63623 11.8171V35.4515C3.63767 36.6565 4.11699 37.8117 4.96904 38.6637C5.8211 39.5158 6.97632 39.9951 8.1813 39.9965H35.4517C36.6571 39.9965 37.8132 39.5177 38.6656 38.6653C39.5179 37.813 39.9968 36.6569 39.9968 35.4515V11.8171C39.9968 10.6117 39.5179 9.45563 38.6656 8.60326C37.8132 7.7509 36.6571 7.27204 35.4517 7.27204ZM38.1788 35.4515C38.1788 36.1747 37.8914 36.8684 37.38 37.3798C36.8686 37.8912 36.175 38.1785 35.4517 38.1785H8.1813C7.45804 38.1785 6.76441 37.8912 6.25299 37.3798C5.74157 36.8684 5.45426 36.1747 5.45426 35.4515V19.9982H38.1788V35.4515ZM38.1788 18.1802H5.45426V11.8171C5.45426 10.3118 6.67234 9.09007 8.1813 9.09007H13.6354V11.8171C13.6354 12.0582 13.7312 12.2894 13.9016 12.4599C14.0721 12.6304 14.3033 12.7261 14.5444 12.7261C14.7855 12.7261 15.0167 12.6304 15.1872 12.4599C15.3576 12.2894 15.4534 12.0582 15.4534 11.8171V9.09007H28.1796V11.8171C28.1796 12.0582 28.2754 12.2894 28.4459 12.4599C28.6163 12.6304 28.8475 12.7261 29.0886 12.7261C29.3297 12.7261 29.5609 12.6304 29.7314 12.4599C29.9019 12.2894 29.9976 12.0582 29.9976 11.8171V9.09007H35.4517C36.175 9.09007 36.8686 9.37738 37.38 9.8888C37.8914 10.4002 38.1788 11.0939 38.1788 11.8171V18.1802Z"
                  fill="#007999"
                />
              </svg>
            </div>
            <p className="text-sm font-medium text-gray-700">
              10 Year Of Experience
            </p>
          </div>

          <button className="mt-8 bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-[#007fb0] transition">
            Learn more
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
