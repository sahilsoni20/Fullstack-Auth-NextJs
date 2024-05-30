"use client";
import React, { useEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import axios from "axios";
import toast from "react-hot-toast";
import LoadingBar from "react-top-loading-bar";
import { useRouter } from "next/navigation";

const Signin = () => {
  const router = useRouter();
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [loading, setLoading] = useState(0);

  const onSignin = async () => {
    try {
      setLoading(50);
      const response = await axios.post("/api/users/signin", user)
      console.log("Sign in successful.", response.data);
      toast.success("Signin Successful.");
      router.push("/profile");
    } catch (error) {
      console.log("Signin Failed:", error.message);
      toast.error("Signin Failed. ", error.message);
    } finally {
      setLoading(100);
    }
  };

  useEffect(() => {
    setLoading(loading + 10);
    setTimeout(() => {
      setLoading(loading + 30);
    }, 1000);
    setTimeout(() => {
      setLoading(loading + 1000);
    }, 2000);
  }, []);

  useEffect(() => {
    if (
      user.email.length > 0 &&
      user.username.length > 0 &&
      user.password.length > 0
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  return (
    <div className="flex flex-col justify-center items-center min-h-screen mx-auto max-w-xl">
      <LoadingBar
        color="#d6abfc"
        progress={loading}
        onLoaderFinished={() => setLoading(0)}
      />
      <div
        className="w-80 rounded-xl bg-gradient-to-br from-[#502672] to-[#452066] text-slate-300 pt-6 px-4 mb-5 pb-5 shadow-shd"
        style={{ height: "40rem" }}
      >
        <h1 className="mt-4 text-xl font-semibold mb-8">Sign in</h1>
        <form className="flex flex-col text-sm ml-2">
          <label htmlFor="username" className="mb-2">
            Username
            <input
              type="text"
              placeholder="taylorswift"
              onChange={(e) => setUser({ ...user, username: e.target.value })}
              className="p-2 ml-1 my-2 rounded-lg bg-[#4a1872] w-full block shadow-ishd focus:outline-none"
            />
          </label>
          <label htmlFor="email" className="mb-2">
            Email
            <input
              type="email"
              placeholder="taylorswift@yahoo.com"
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              className="p-2 ml-1 my-2 rounded-lg bg-[#4a1872] w-full block shadow-ishd focus:outline-none"
            />
          </label>
          <label htmlFor="password" className="mb-2">
            Password
            <input
              type="password"
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              className="p-2 ml-1 my-2 rounded-lg bg-[#4a1872] w-full block shadow-ishd focus:outline-none"
            />
          </label>
        </form>
        <div className="flex flex-col text-sm px-1">
          <button className="flex items-center p-2 ml-1 my-2 mt-24 rounded-lg bg-[#4a1872] w-full shadow-ishd">
            <FcGoogle className="ml-2 mr-4" size={25} />
            <span className="ml-6">Sign in with Google</span>
          </button>
          <p className="text-center m-2 text-sm">or sign in with</p>

          <button
            onClick={onSignin}
            className="p-2 ml-1 my-2 w-full mt-3 bg-[#7036a0] rounded-lg shadow-ishd focus:outline-none"
            disabled={buttonDisabled}
          >
            {buttonDisabled ? "No Sign in" : "Sign in"}
          </button>
          <p className="text-center m-2 mb-4 text-sm">
            Dont have an account?
            <Link href="/signup"> Sign up </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signin;
