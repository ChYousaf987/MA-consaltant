import React from "react";
import { Eye } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { GrGoogle } from "react-icons/gr";

const Login = () => {
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
            welcome back
          </h2>

          {/* Illustration */}
          <div className="mx-auto flex justify-center items-end">
            <img src="/loginimage.png" className="w-[70%]" alt="" />
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className=" rounded-t-[45px] bg-white md:rounded-r-[0px] md:rounded-l-[45px] p-10 text-[#007999] relative">
          {/* Language */}
          <div className="absolute hidden top-6 right-6 text-sm cursor-pointer">
            English ⌄
          </div>

          <h2 className="text-3xl font-bold mb-6 text-center capitalize">
            sign in to continue
          </h2>

          {/* Social Buttons */}
          <div className="flex gap-4 mb-6">
            <button className="flex-1 px-3 flex items-center justify-center gap-2 border border-[#007999] rounded-full py-2 text-sm hover:bg-[#007999] hover:text-black transition">
              <GrGoogle className="w-5 h-5" />
              Sign up with Google
            </button>
            <button className="flex-1 px-3 flex items-center justify-center gap-2 border border-[#007999] rounded-full py-2 text-sm hover:bg-[#007999] hover:text-black transition">
              <FaFacebookF className="w-5 h-5 " />
              Sign up with Facebook
            </button>
          </div>

          <div className="text-center text-sm mb-4 opacity-80">— Or —</div>

          {/* Form */}
          <form className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full bg-transparent border-b border-[#007999]/60 pl-2 focus:outline-none py-2 placeholder-[#007999]/70"
            />

            <div className="relative">
              <input
                type="password"
                placeholder="Password"
                className="w-full bg-transparent border-b border-[#007999]/60 pl-2 focus:outline-none py-2 placeholder-[#007999]/70"
              />
              <Eye className="absolute right-0 top-3 w-5 h-5 opacity-70 cursor-pointer" />
            </div>

            {/* Forgot Password */}
            <div className="text-right">
              <Link
                to="/forgot-password"
                className="text-sm text-[#007999] hover:underline opacity-80 hover:opacity-100 transition"
              >
                Forgot password?
              </Link>
            </div>

            <button className="w-full bg-[#007999] text-white font-semibold py-3 rounded-full mt-4">
              SIGN UP
            </button>
          </form>

          <p className="text-center text-sm mt-4 opacity-80">
            Already have an account?{" "}
            <Link to="/signup" className="underline cursor-pointer">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
