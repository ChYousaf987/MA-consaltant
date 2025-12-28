import React from "react";
import { FaGlobe, FaUser, FaTicketAlt } from "react-icons/fa";

const services = [
  {
    title: "Study Visa",
    description:
      "Expert guidance to help you secure your study visa with confidence.A clear process, trusted support, and timely assistance",
    icon: (
      <svg
        width="64"
        height="64"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M32 56C31.5512 56.0008 31.1029 55.9714 30.658 55.912C26.549 49.3252 24.2733 41.7606 24.066 34H59.9C59.948 33.338 60 32.674 60 32C60 26.4621 58.3578 21.0486 55.2812 16.444C52.2045 11.8395 47.8315 8.25064 42.7151 6.13139C37.5988 4.01213 31.969 3.45764 26.5375 4.53802C21.106 5.61841 16.1169 8.28515 12.201 12.201C8.28515 16.1169 5.61841 21.106 4.53802 26.5375C3.45764 31.969 4.01213 37.5988 6.13139 42.7151C8.25064 47.8315 11.8395 52.2045 16.444 55.2812C21.0486 58.3578 26.4621 60 32 60V56ZM55.9 30H43.926C43.7127 22.6404 41.8299 15.4255 38.42 8.90001C43.1372 10.2158 47.3395 12.9419 50.4637 16.7131C53.5879 20.4844 55.4847 25.1204 55.9 30ZM33.34 8.08801C37.4497 14.6747 39.7261 22.2392 39.934 30H24.066C24.2739 22.2392 26.5503 14.6747 30.66 8.08801C31.5509 7.97208 32.4531 7.97208 33.344 8.08801M25.582 8.89801C22.1711 15.4239 20.2877 22.6396 20.074 30H8.10001C8.51528 25.1204 10.4121 20.4844 13.5363 16.7131C16.6606 12.9419 20.8629 10.2158 25.58 8.90001M8.10001 34H20.074C20.2874 41.3596 22.1701 48.5745 25.58 55.1C20.8629 53.7843 16.6606 51.0581 13.5363 47.2869C10.4121 43.5157 8.51528 38.8796 8.10001 34Z"
          fill="#007999"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M50 50L60 54V50L50 45V40C50 39.4696 49.7893 38.9609 49.4142 38.5858C49.0391 38.2107 48.5304 38 48 38C47.4696 38 46.9609 38.2107 46.5858 38.5858C46.2107 38.9609 46 39.4696 46 40V45L36 50V54L46 50V57L42 60V62L48 60L54 62V60L50 57V50Z"
          fill="#007999"
        />
      </svg>
    ),
  },
  {
    title: "Haj & Umbra",
    description:
      "Reliable Hajj and Umrah visa assistance with trusted guidance throughout your journey Trusted Hajj & Umrah visa for a smooth.",
    icon: (
      <svg
        width="64"
        height="64"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M25.3333 30.6667L16.24 35.3201C13.7227 36.6107 11.8133 38.8401 11.0587 41.5654C9.78667 46.1547 8 53.5174 8 58.6667M38.6667 30.6667L47.76 35.3201C50.2773 36.6107 52.1867 38.8401 52.944 41.5654C54.2133 46.1547 56 53.5174 56 58.6667M18.6667 58.6667C18.6667 55.5921 20 45.3334 21.336 42.6667"
          stroke="#007999"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          d="M21.3333 45.224C25.1627 45.8534 34.256 44.0907 40 32M32 53.3334C32 53.3334 45.3333 48 48 36M53.3333 44C52.12 49.8854 49.3333 56 45.3333 58.6667M41.3333 24.1547L42.456 18.408C43.776 11.6427 38.728 5.33337 32 5.33337C25.272 5.33337 20.224 11.6427 21.544 18.408L22.664 24.1547C23.5573 28.7147 27.4667 32 32 32C36.5387 32 40.4453 28.7174 41.3333 24.1547Z"
          stroke="#007999"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          d="M21.3333 16L29.4133 13.696C31.1033 13.2086 32.8967 13.2086 34.5866 13.696L42.6666 16"
          stroke="#007999"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Ticket Booking",
    description:
      "Hassle-free flight ticket booking at competitive rates. Simple process, secure booking, instant support.",
    icon: (
      <svg
        width="64"
        height="64"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M52 12C52 10.9391 51.5786 9.92172 50.8284 9.17157C50.0783 8.42143 49.0609 8 48 8H16C14.9391 8 13.9217 8.42143 13.1716 9.17157C12.4214 9.92172 12 10.9391 12 12V52C12 53.0609 12.4214 54.0783 13.1716 54.8284C13.9217 55.5786 14.9391 56 16 56H32V52H16V12H48V24H52V12Z"
          fill="#007999"
        />
        <path d="M20 36H32V40H20V36ZM20 28H44V32H20V28Z" fill="#007999" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M44 20V24H20V20H44ZM50 46L60 50V46L50 41V36C50 35.4696 49.7893 34.9609 49.4142 34.5858C49.0391 34.2107 48.5304 34 48 34C47.4696 34 46.9609 34.2107 46.5858 34.5858C46.2107 34.9609 46 35.4696 46 36V41L36 46V50L46 46V53L42 56V58L48 56L54 58V56L50 53V46Z"
          fill="#007999"
        />
      </svg>
    ),
  },
];

const ServiceOffer = () => {
  return (
    <section className="relative bg-[#F3F3F3] md:bg-white py-20 overflow-hidden">
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
      <div className="absolute md:hidden -right-4 top-[50%] md:top-16 z-10">
        <svg
          width="136"
          height="504"
          viewBox="0 0 136 504"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="transform scale-x-[-1]" // <-- mirror horizontally
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

      {/* Header */}
      <div className="text-center mb-14 relative z-10">
        <h2 className="text-4xl font-bold text-primary">
          Service <span className="text-secondary">We Offer</span>
        </h2>
        <p className="mt-3 max-w-xl mx-auto">
          Reliable services tailored to your needs. Simple booking, quick
          confirmation.
        </p>
      </div>

      <div className="absolute left-32 top-20 z-50  mb-20">
        {/* Dots */}

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

      {/* Cards */}
      <div className="relative z-10 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-24 px-6">
        {services.map((service, i) => (
          <div
            key={i}
            className="bg-white rounded-3xl shadow-2xl p-6 px-4 flex flex-col justify-between 
                       hover:shadow-xl hover:-translate-y-2 transform transition-all duration-300"
          >
            <div>
              <h3 className="text-2xl text-center font-semibold text-primary">
                {service.title.split(" ")[0]}{" "}
                <span className="text-secondary">
                  {service.title.split(" ")[1]}
                </span>
                <span className="text-secondary">
                  {service.title.split(" ")[2]}
                </span>
              </h3>

              <p className="text-[#000000] mt-3 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>

            <div className="flex items-center justify-between mt-6">
              <button className="bg-primary text-white text-sm px-4 py-2 rounded-full hover:opacity-90 hover:scale-105 transform transition-all duration-300">
                Book Service
              </button>

              <div className="w-12 h-12 p-2 rounded-xl bg-gray-300 shadow-2xl flex items-center justify-center text-secondary hover:scale-110 transform transition-all duration-300">
                {service.icon}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination dots */}
      <div className="flex justify-center mt-10 gap-2 relative z-10">
        <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
        <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
        <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
        <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
      </div>

      {/* Curved Bottom */}
      <svg
        className="md:block hidden absolute bottom-0 left-0 w-full h-auto"
        viewBox="0 0 1723 985"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 835.903V0H1723V799.876C1070.73 1031.11 694.396 1048.68 0 835.903Z"
          fill="#F3F3F3"
        />
      </svg>
    </section>
  );
};

export default ServiceOffer;
