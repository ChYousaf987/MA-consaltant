import React from "react";

const Help = () => {
  return (
    <div className="relative w-full bg-[#F3F3F3] md:bg-white h-[30vh] md:h-[90vh] md:mb-8">
      {/* SVG 1 - Bottom */}
      <svg
        className="hidden md:block absolute bottom-0 left-0 w-full h-[27vh] md:h-auto z-10"
        viewBox="0 0 1728 690"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          d="M0 18.3838C704.1 -42.8323 840.315 54.0046 1726.6 232.089L1727.19 587.51C629.913 684.983 525.919 766.246 0.916476 568.595L0 18.3838Z"
          fill="#00AAD7"
        />
      </svg>

      {/* SVG 2 - Middle */}
      <svg
        className="hidden md:block absolute -bottom-4 left-0 w-full h-auto z-20"
        viewBox="0 0 1726 698"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          d="M0 53.6371C689.109 -54.5663 840.979 15.5932 1726 134.23V513.167C652.231 683.864 530.617 775.61 0 613.283V53.6371Z"
          fill="#008EB3"
        />
      </svg>

      {/* SVG 3 - Top */}
      <svg
        className="hidden md:block absolute bottom-0 left-0 w-full h-auto z-30"
        viewBox="0 0 1722 652"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          d="M0 63.7849C687.512 -44.3301 839.03 -6.23871 1722 112.301V490.929C650.719 661.486 529.387 717.644 0 555.45V63.7849Z"
          fill="#00576E"
        />
      </svg>
      <div className="hidden md:block absolute right-10 bottom-32 z-40  mb-20">
        {/* Dots */}
        <div className="grid grid-cols-12 gap-2 ">
          {[...Array(84)].map((_, i) => (
            <span
              key={i}
              className="w-2 h-2 shadow-2xl bg-[#BCBBBB] rounded-full"
            />
          ))}
        </div>
      </div>

      {/* CONTENT */}
      <div className="relative z-40 max-w-6xl mx-auto h-full hidden md:grid grid-cols-1 md:grid-cols-2 items-center justify-between px-10">
        {/* LEFT TEXT */}
        <div className="text-white max-w-lg mt-10 px-10">
          <h2 className="text-4xl font-bold mb-4">
            We’re here <span className="text-cyan-300">To Help</span>
          </h2>
          <p className="text-xl opacity-90 mb-6">
            If you want it more formal, more friendly, or specific to visas &
            travel, I can fine-tune it in seconds.
          </p>
          <p className="font-semibold">Ammad Ishfaq — CEO</p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="mb-48">
          <svg
            width="520"
            height="420"
            viewBox="0 0 515 487"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <clipPath id="blob">
                <path d="M510 236C512 310 439 356 381 400C325 443 264 488 195 476C122 463 67 406 34 340C1 273 -9 195 24 127C56 60 122 11 196 1C264 -8 320 38 375 79C434 122 510 163 510 236Z" />
              </clipPath>
            </defs>
            <image
              href="/help.jpg"
              width="515"
              height="487"
              clipPath="url(#blob)"
              preserveAspectRatio="xMidYMid slice"
            />
          </svg>
        </div>
      </div>

      <div className="md:hidden my-8">
        {/* Top SVG */}
        <svg
          className="absolute left-0 w-full h-[27vh] md:h-auto z-10"
          viewBox="0 0 1728 690"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M0 18.3838C704.1 -42.8323 840.315 54.0046 1726.6 232.089L1727.19 587.51C629.913 684.983 525.919 766.246 0.916476 568.595L0 18.3838Z"
            fill="#00AAD7"
          />
        </svg>

        {/* SVG 2 - Middle */}
        <svg
          className=" absolute left-0 w-full h-[27vh] md:h-auto z-20"
          viewBox="0 0 1726 698"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M0 53.6371C689.109 -54.5663 840.979 15.5932 1726 134.23V513.167C652.231 683.864 530.617 775.61 0 613.283V53.6371Z"
            fill="#008EB3"
          />
        </svg>

        <div className="absolute left-0 w-full z-30 relative md:hidden">
          {/* SVG */}
          <svg
            className="w-full h-[26vh] mt-1"
            viewBox="0 0 1722 652"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <path
              d="M0 63.7849C687.512 -44.3301 839.03 -6.23871 1722 112.301V490.929C650.719 661.486 529.387 717.644 0 555.45V63.7849Z"
              fill="#00576E"
            />
          </svg>

          {/* TEXT — PERFECT CENTER */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <h2 className="text-2xl font-bold mb-2 text-white">
              We’re here <span className="text-cyan-300">To Help</span>
            </h2>

            <p className="text-base opacity-90 mb-2 text-white max-w-md">
              If you want it more formal, more friendly, or specific to visas &
              travel, I can fine-tune it in seconds.
            </p>

            <p className="font-semibold text-white">Ammad Ishfaq — CEO</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;
