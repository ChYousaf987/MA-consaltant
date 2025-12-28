import React from "react";
import { Eye } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { GrGoogle } from "react-icons/gr";

const Signup = () => {
  return (
    <div className="min-h-screen md:bg-[#000544] flex items-center justify-center md:p-4">
      <div className="w-full max-w-6xl bg-white md:rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
        {/* LEFT SIDE */}
        <div className="p-10 ">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src="/logo.png" className="w-40" alt="" />
          </div>

          <h2 className="text-3xl mt-10 text-center font-bold text-[#000544] mb-6">
            Start Your Journey
          </h2>

          {/* Illustration */}
          <div className="mx-auto flex justify-center items-end">
            <img src="/loginimage.png" className="w-[70%]" alt="" />
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="bg-gradient-to-b from-[#007999] to-[#005f66] rounded-t-[45px] md:rounded-r-[0px] md:rounded-l-[45px] p-10 text-white relative">
          {/* Language */}
          <div className="absolute hidden top-6 right-6 text-sm cursor-pointer">
            English ⌄
          </div>

          <h2 className="text-3xl font-bold mb-6">Create An Account</h2>

          {/* Social Buttons */}
          <div className="flex gap-4 mb-6">
            <button className="flex-1 px-3 flex items-center justify-center gap-2 border border-white rounded-full py-2 text-sm hover:bg-white hover:text-black transition">
              <GrGoogle className="w-5 h-5" />
              Sign up with Google
            </button>
            <button className="flex-1 px-3 flex items-center justify-center gap-2 border border-white rounded-full py-2 text-sm hover:bg-white hover:text-black transition">
              <FaFacebookF className="w-5 h-5 " />
              Sign up with Facebook
            </button>
          </div>

          <div className="text-center text-sm mb-4 opacity-80">— Or —</div>

          {/* Form */}
          <form className="space-y-4">
            <input
              type="text"
              placeholder="First Name"
              className="w-full bg-transparent border-b border-white/60 py-2 pl-2 placeholder-white/70 focus:outline-none"
            />

            <input
              type="text"
              placeholder="Last Name"
              className="w-full bg-transparent border-b border-white/60 pl-2 focus:outline-none py-2 placeholder-white/70"
            />

            <input
              type="email"
              placeholder="Email"
              className="w-full bg-transparent border-b border-white/60 pl-2 focus:outline-none py-2 placeholder-white/70"
            />

            <div className="relative">
              <input
                type="password"
                placeholder="Password"
                className="w-full bg-transparent border-b border-white/60 pl-2 focus:outline-none py-2 placeholder-white/70"
              />
              <Eye className="absolute right-0 top-3 w-5 h-5 opacity-70" />
            </div>

            <div className="relative">
              <input
                type="password"
                placeholder="Confirm Password"
                className="w-full bg-transparent border-b border-white/60 pl-2 focus:outline-none py-2 placeholder-white/70"
              />
              <Eye className="absolute right-0 top-3 w-5 h-5 opacity-70" />
            </div>

            <button className="w-full bg-white text-[#007999] font-semibold py-3 rounded-full mt-6">
              SIGN UP
            </button>
          </form>

          <p className="text-center text-sm mt-4 opacity-80">
            Already have an account?{" "}
            <Link to="/login" className="underline cursor-pointer">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
