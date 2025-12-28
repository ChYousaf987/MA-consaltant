import React from "react";

const ContactUs = () => {
  return (
    <div className="relative w-full">
      {/* Background Curves */}
      <div className="absolute top-0 left-0 w-full overflow-hidden">
        {/* Bottom gray curve */}
        <svg
          className="w-full h-auto"
          viewBox="0 0 1697 702"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1697 53.8898C1019.47 -54.8233 870.151 15.6667 0 134.862V515.584C1055.73 687.085 1175.3 779.263 1697 616.171V53.8898Z"
            fill="#C2BEBE"
          />
        </svg>

        {/* Top image curve */}
        <svg
          className="absolute top-5 left-0 w-full h-auto"
          viewBox="0 0 1728 655"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="pattern0"
              patternUnits="userSpaceOnUse"
              width="1728"
              height="655"
            >
              <image
                href="/contact.jpg"
                x="0"
                y="0"
                width="1728"
                height="655"
                preserveAspectRatio="xMidYMid slice"
                transform="translate(1728, 0) scale(-1, 1)"
              />
            </pattern>
          </defs>

          <path
            d="M1728 64.0788C1038.09 -44.5343 886.046 -6.26746 0 112.819V493.191C1075.01 664.534 1196.77 720.951 1728 558.01V64.0788Z"
            fill="#D9D9D9"
          />
          <path
            d="M1728 64.0788C1038.09 -44.5343 886.046 -6.26746 0 112.819V493.191C1075.01 664.534 1196.77 720.951 1728 558.01V64.0788Z"
            fill="url(#pattern0)"
          />
        </svg>
      </div>

      {/* Contact Form Content */}
      <div className="relative z-30 max-w-6xl mx-auto px-6 pt-44 md:py-28 grid md:grid-cols-3 items-center md:items-start gap-10">
        {/* Left Text */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl text-center font-bold text-">
            Let's <span className="text-[#007999]">Connect</span>
          </h2>
          <p className="mt-2 text-gray-700 text-center my-3 text-lg">
            Get in touch with us
          </p>
          <div className="flex flex-col gap-3">
            <input
              type="text"
              placeholder="Full Name"
              className="p-3  border rounded-full border-gray-300 shadow-2xl focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <input
              type="email"
              placeholder="Email"
              className="p-3 rounded-full border border-gray-300 shadow-2xl focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <textarea
              placeholder="Message"
              rows="4"
              className="p-3 rounded-3xl border border-gray-300 shadow-2xl focus:outline-none focus:ring-2 focus:ring-teal-500 resize-none"
            ></textarea>
            <button
              type="submit"
              className="mt-2 text-[#007999] bg-white font-semibold py-3 rounded-full hover:text-white shadow-2xl hover:bg-teal-600 transition"
            >
              Send Message
            </button>
          </div>
        </div>

        {/* Form */}
        {/* <div className="flex-1 bg-white rounded-2xl p-8 shadow-lg w-full max-w-md">
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Full Name"
              className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <input
              type="email"
              placeholder="Email"
              className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <select className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500">
              <option>Choose Service</option>
              <option>Study Visa</option>
              <option>Hajj & Umrah</option>
              <option>Other</option>
            </select>
            <textarea
              placeholder="Message"
              rows="4"
              className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 resize-none"
            ></textarea>
            <button
              type="submit"
              className="mt-2 bg-teal-500 text-white font-semibold py-3 rounded-lg hover:bg-teal-600 transition"
            >
              Send Message
            </button>
          </form>
        </div> */}
      </div>
    </div>
  );
};

export default ContactUs;
