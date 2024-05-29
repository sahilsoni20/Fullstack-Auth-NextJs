import React from "react";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";

const Singup = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen mx-auto max-w-xl">
      <div
        className="w-80 rounded-xl bg-gradient-to-br from-[#502672] to-[#452066] text-slate-300 pt-6 px-4 mb-5 pb-5 shadow-shd"
        style={{ height: "40rem" }}
      >
        <h1 className="mt-4 text-xl font-semibold mb-5">Sign up</h1>
        <form className="flex flex-col text-sm ml-2">
          <label htmlFor="fullName" className="mb-2">
            Full Name{" "}
            <input
              type="text"
              placeholder="Taylor Swift"
              className="p-2 ml-1 my-2 rounded-lg bg-[#541c81] w-full block shadow-ishd"
            />
          </label>
          <label htmlFor="username" className="mb-2">
            Username
            <input
              type="text"
              placeholder="taylorswift"
              className="p-2 ml-1 my-2 rounded-lg bg-[#4a1872] w-full block shadow-ishd"
            />
          </label>
          <label htmlFor="email" className="mb-2">
            Email
            <input
              type="email"
              placeholder="taylorswift@yahoo.com"
              className="p-2 ml-1 my-2 rounded-lg bg-[#4a1872] w-full block shadow-ishd"
            />
          </label>
          <label htmlFor="password" className="mb-2">
            Password
            <input
              type="password"
              className="p-2 ml-1 my-2 rounded-lg bg-[#4a1872] w-full block shadow-ishd"
            />
          </label>
        </form>
        <p className="text-center m-2 text-sm">or login with</p>
        <div className="flex flex-col text-sm px-1">
          <button className="flex items-center p-2 ml-1 my-2 mt-3 rounded-lg bg-[#4a1872] max-w-96 shadow-ishd">
            <FcGoogle className="ml-2 mr-4" size={25} />
            <span>Sign up with Google</span>
          </button>
          <button className="p-2 ml-1 my-2 max-w-96 mt-8 bg-[#7036a0] rounded-lg shadow-ishd">
            Sign up
          </button>
        </div>
        <p className="text-center m-2 text-sm"> Have an account? <Link href="/signin">Sign in</Link> </p>
      </div>
    </div>
  );
};

export default Singup;
