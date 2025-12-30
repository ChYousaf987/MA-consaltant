import React from "react";

const UmrahForm = () => {
  return (
    <section className="relative bg-[#F3F3F3] md:bg-white py-16 md:py-20 overflow-hidden flex justify-center">
      {/* BACKGROUND SVG – DESKTOP ONLY */}
      <svg
        className="hidden md:block absolute bottom-0 left-0 w-full h-auto"
        viewBox="0 0 1726 1810"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M-12 1528.39V0H1711L1725.5 1480C1643 1837.48 462 1974.5 -12 1528.39Z"
          fill="#F3F3F3"
        />
      </svg>
      {/* <svg
        width="1726"
        height="1810"
        viewBox="0 0 1726 1810"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M-12 1528.39V0H1711L1725.5 1480C1643 1837.48 462 1974.5 -12 1528.39Z"
          fill="#F3F3F3"
        />
      </svg> */}

      <div className="relative z-10 w-full max-w-4xl px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-3">
            Services
          </h2>
          <p className="text-sm text-gray-600 max-w-xl mx-auto">
            If you want it more formal, more friendly, or specific to visas &
            travel, I can fine-tune it in seconds.
          </p>
        </div>

        {/* Form Card */}
        <div className="bg border border-gray-300 rounded-2xl p-6 md:p-8 ">
          <form className="space-y-4">
            <Input placeholder="First Name" />
            <Input placeholder="Last Name" />
            <Input placeholder="Email" type="email" />
            <Input placeholder="Phone Number" />

            <Select placeholder="Selected Service" />
            <Select placeholder="Package Type" />

            {/* Date */}
            <input
              type="date"
              className="w-full px-4 py-3 rounded-full border border-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />

            <Select placeholder="Area City" />
            <Select placeholder="Country of Resident" />

            {/* Info Text */}
            <div className="text-xs text-cyan-600 space-y-1 pt-3">
              <p>We’ll contact you shortly after submission.</p>
              <p>No payment required at this stage</p>
            </div>
          </form>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center mt-6">
          <button className="w-full md:w-auto bg-[#007999] hover:scale-110 text-white px-10 py-3 rounded-full font-semibold shadow-md transition-all duration-500">
            Submit Booking
          </button>
        </div>
      </div>
    </section>
  );
};

export default UmrahForm;

/* Reusable Components */
const Input = ({ placeholder, type = "text" }) => (
  <input
    type={type}
    placeholder={placeholder}
    className="w-full px-4 py-3 rounded-full border border-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
  />
);

const Select = ({ placeholder }) => (
  <select className="w-full px-4 py-3 rounded-full border border-gray-400 bg-white focus:outline-none focus:ring-2 focus:ring-cyan-500">
    <option value="">{placeholder}</option>
  </select>
);
