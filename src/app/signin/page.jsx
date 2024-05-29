import React from "react";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";

const Singin = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen mx-auto max-w-xl">
      <div
        className="w-80 rounded-xl bg-gradient-to-br from-[#502672] to-[#452066] text-slate-300 pt-8 px-4 mb-5 pb-5 shadow-shd"
        style={{ height: "40rem" }}
      >
        <h1 className="mt-4 text-xl font-semibold mb-8">Sign in</h1>
        <form className="flex flex-col text-sm ml-2">   
          <label htmlFor="email" className="mb-2">
            Email
            <input
              type="email"
              placeholder="taylorswift@yahoo.com"
              className="p-2 ml-1 my-2 mb-4 rounded-lg bg-[#4a1872] w-full block shadow-ishd"
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
        <button className="p-2 ml-1 my-2 w-full mt-14 bg-[#7036a0] rounded-lg shadow-ishd">
            Sing in
          </button>
        <p className="text-center m-2 text-sm">or Sing in with</p>
        <div className="flex flex-col text-sm px-1">
          <button className="flex items-center p-2 ml-1 my-2 mt-3 rounded-lg bg-[#4a1872] max-w-96 shadow-ishd">
            <FcGoogle className="ml-2 mr-4" size={25} />
            <span>Sign in with Google</span>
          </button>
          <p className="text-center m-2 mt-14 mb-4 text-sm">Dont have an account?</p>
          <button className="p-2 mt-0 ml-1 my-2 max-w-96 bg-[#7036a0] rounded-lg shadow-ishd">
            <Link href='/signup'>Sing up</Link> 
          </button>
        </div>
      </div>
    </div>
  );
};

export default Singin;
