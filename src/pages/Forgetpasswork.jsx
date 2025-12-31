import React from "react";
import { Eye } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { GrGoogle } from "react-icons/gr";

const Forgetpasswork = () => {
  return (
    <div className="min-h-screen md:bg-[#000544] flex items-center justify-center md:p-4">
      <div className="w-full max-w-6xl bg-gradient-to-b from-[#057c9b] to-[#7abacb] md:rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
        {/* LEFT SIDE */}
        <div className="p-10 ">
          {/* Logo */}
          <div className="flex flex-col gap-2">
            <img
              src="/logo.png"
              alt="MA Consultant"
              className="w-32 filter brightness-0 invert"
            />
          </div>

          <h2 className="text-3xl capitalize mt-10 text-center font-bold text-white mb-6">
            Forgot Password?
          </h2>

          {/* Illustration */}
          <div className="mx-auto flex justify-center items-end">
            <img src="/forgetpasswork.png" className="w-[70%]" alt="" />
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className=" rounded-t-[45px] flex flex-col items-center justify-center bg-white md:rounded-r-[0px] md:rounded-l-[45px] p-10 text-[#007999] relative">

          <h2 className="text-3xl font-bold mb-6 text-center capitalize">
            Let user request reset easily.
          </h2>

          <p className="mb-6 text-center capitalize">
            Enter your email address and we’ll send you a password reset OTP.
          </p>

          {/* Form */}
            <input
              type="email"
              placeholder="Email"
              className="w-full bg-transparent border-b border-[#007999]/60 pl-2 focus:outline-none py-2 placeholder-[#007999]/70"
            />

            <button className="px-8  bg-[#007999] text-white font-semibold py-3 rounded-full mt-5">
              Reset Password
            </button>
        </div>
      </div>
    </div>
  );
};

export default Forgetpasswork;
