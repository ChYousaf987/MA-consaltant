import React from "react";
import { FaGlobe, FaUser, FaTicketAlt } from "react-icons/fa";

const blogs = [
  {
    id: 1,
    category: "Study Visa",
    readTime: "3 Min Read",
    title: "Study Visa Requirement",
    description: "Updated guidelines for international students.",
    date: "12 June 2025",
    image: "/blogimage.jpg", // replace with your image
    link: "/blog/study-visa-requirement",
  },
  {
    id: 2,
    category: "Study Visa",
    readTime: "3 Min Read",
    title: "Study Visa Requirement",
    description: "Updated guidelines for international students.",
    date: "12 June 2025",
    image: "/blogimage.jpg",
    link: "/blog/study-visa-requirement",
  },
  {
    id: 3,
    category: "Study Visa",
    readTime: "3 Min Read",
    title: "Study Visa Requirement",
    description: "Updated guidelines for international students.",
    date: "12 June 2025",
    image: "/blogimage.jpg", // replace with your image
    link: "/blog/study-visa-requirement",
  },
  {
    id: 4,
    category: "Study Visa",
    readTime: "3 Min Read",
    title: "Study Visa Requirement",
    description: "Updated guidelines for international students.",
    date: "12 June 2025",
    image: "/blogimage.jpg",
    link: "/blog/study-visa-requirement",
  },
  {
    id: 5,
    category: "Study Visa",
    readTime: "3 Min Read",
    title: "Study Visa Requirement",
    description: "Updated guidelines for international students.",
    date: "12 June 2025",
    image: "/blogimage.jpg", // replace with your image
    link: "/blog/study-visa-requirement",
  },
  {
    id: 6,
    category: "Study Visa",
    readTime: "3 Min Read",
    title: "Study Visa Requirement",
    description: "Updated guidelines for international students.",
    date: "12 June 2025",
    image: "/blogimage.jpg",
    link: "/blog/study-visa-requirement",
  },
  {
    id: 7,
    category: "Study Visa",
    readTime: "3 Min Read",
    title: "Study Visa Requirement",
    description: "Updated guidelines for international students.",
    date: "12 June 2025",
    image: "/blogimage.jpg", // replace with your image
    link: "/blog/study-visa-requirement",
  },
  {
    id: 8,
    category: "Study Visa",
    readTime: "3 Min Read",
    title: "Study Visa Requirement",
    description: "Updated guidelines for international students.",
    date: "12 June 2025",
    image: "/blogimage.jpg",
    link: "/blog/study-visa-requirement",
  },
  // add more blog objects here
];

const LatestBlog = () => {
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

      {/* Cards */}
      <div className="relative z-10 max-w-7xl mx-auto grid mb-10 grid-cols-1 md:grid-cols-4 gap-10 px-6">
        {blogs.map((blog, i) => (
          <div
            key={i}
            className="bg-white border border-gray-700 rounded-xl shadow-lg overflow-hidden p-1 hover:shadow-2xl transition"
          >
            {/* Image */}
            <div className="relative">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 rounded-2xl object-cover"
              />
              {/* <div className="absolute top-2 right-2 bg-white/80 text-sm px-2 py-1 rounded-md font-semibold text-gray-700">
                {blog.readTime}
              </div> */}
            </div>

            {/* Content */}
            <div className="p-4 flex flex-col gap-1">
              <div className="flex justify-between text-gray-800">
                <span className="text-sm">{blog.category}</span>
                <span className="text-sm text-cyan-500"> {blog.readTime}</span>
              </div>
              <h3 className="font-bold text-lg">{blog.title}</h3>
              <p className="text-gray-600 text-sm">{blog.description}</p>
              <span className="text-gray-400 text-xs">Date: {blog.date}</span>
              <a
                href={blog.link}
                className=" text-cyan-500 font-medium flex items-center gap-1 hover:gap-2 transition"
              >
                Read More <span className="text-cyan-400">→</span>
              </a>
            </div>
          </div>
        ))}
      </div>


      {/* Curved Bottom */}
      
      <svg
        className="md:block hidden absolute bottom-0 left-0"
        width="1726"
        height="1198"
        viewBox="0 0 1726 1198"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M-12 968.702V0H1711.5L1726 938.033C1726 1268.25 35.5137 1289.8 -12 968.702Z"
          fill="#F3F3F3"
        />
      </svg>
    </section>
  );
};

export default LatestBlog;
