import React from "react";

const testimonials = Array.from({ length: 5 }).map(() => ({
  name: "Smith Joy",
  text: "Lorem ipsum dolor sit amet consectetur. Eu augue et tortor non ipsum est.",
  date: "Date: 10/12/25",
  image: "https://i.pravatar.cc/100",
}));

const Clint = () => {
  return (
    <section className="relative bg-[#F3F3F3] md:bg-white py-20 overflow-hidden">
      <div className="absolute -left-4 top-[20%] md:top-16 z-10">
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
      <div className="absolute md:hidden -left-4 top-[70%] md:top-16 z-10">
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

      <div className="relative z-10 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 px-6">
        <div>
          <h2 className="hidden md:block  text-4xl font-bold text-primary leading-tight">
            What Our <br />
            <span className=" text-secondary">Clients Say</span>
          </h2>
          <h2 className="md:hidden text-4xl font-bold text-primary leading-tight">
            What Our
            <span className="text-secondary"> Clients Say</span>
          </h2>
          <p className="mt-4 text-gray-600">
            Real feedback from clients who trust us for seamless service
          </p>

          <button className="hidden md:block mt-6 bg-primary text-white px-6 py-2 hover:scale-110  rounded-full text-sm transition-all duration-300">
            View All
          </button>
        </div>

        {testimonials.map((item, i) => (
          <div
            key={i}
            className="bg-white rounded-3xl shadow-2xl p-6 px-4 flex flex-col justify-between 
                       hover:shadow-xl hover:-translate-y-2 transform transition-all duration-300"
          >
            <h4 className="font-semibold text-primary">{item.name}</h4>

            {/* Stars */}
            <div className="flex text-yellow-400 text-sm mt-1">★★★★★</div>

            <p className="text-sm text-gray-600 mt-3 leading-relaxed">
              {item.text}
            </p>

            <div className="flex items-center justify-between mt-6">
              <span className="text-xs text-gray-400">{item.date}</span>
              <img
                src={item.image}
                alt=""
                className="w-12 h-12 rounded-xl object-cover"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Curved Bottom */}
      <svg
        className="absolute bottom-0 left-0 w-full h-auto"
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

export default Clint;
