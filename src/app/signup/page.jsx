"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { IoEyeOutline } from "react-icons/io5";
import { FaRegEyeSlash } from "react-icons/fa";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";
import LoadingBar from "react-top-loading-bar";

const SingupPage = () => {
  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
    fullname: "",
    email: "",
    password: "",
  });
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [loading, setLoading] = useState(0);

  const onSignup = async () => {
    try {
      setLoading(50);
      const response = await axios.post("/api/users/signup", user);
      console.log("Signup success:", response);
      toast.success("Signup successful!");
      router.push("/signin");
    } catch (error) {
      console.log("Signup unsuccessful:", error.message);
      toast.error(error.response?.data?.error || "Signup failed");
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
      user.fullname.length > 0 &&
      user.username.length > 0 &&
      user.password.length > 0
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  const [password, setPassword] = useState(true);
  const handelClick = () => {
    setPassword(!password);
  };

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
        <h1 className="mt-4 text-xl font-semibold mb-5">Sign up</h1>
        <form className="flex flex-col text-sm ml-2">
          <label htmlFor="fullName" className="mb-2">
            Full Name
            <input
              type="text"
              placeholder="Taylor Swift"
              value={user.fullname}
              onChange={(e) => setUser({ ...user, fullname: e.target.value })}
              className="p-2 ml-1 my-2 rounded-lg bg-[#541c81] w-full block shadow-ishd focus:outline-none"
            />
          </label>
          <label htmlFor="username" className="mb-2">
            Username
            <input
              type="text"
              placeholder="taylorswift"
              value={user.username}
              onChange={(e) => setUser({ ...user, username: e.target.value })}
              className="p-2 ml-1 my-2 rounded-lg bg-[#4a1872] w-full block shadow-ishd focus:outline-none"
            />
          </label>
          <label htmlFor="email" className="mb-2">
            Email
            <input
              type="email"
              placeholder="taylorswift@yahoo.com"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              className="p-2 ml-1 my-2 rounded-lg bg-[#4a1872] w-full block shadow-ishd focus:outline-none"
            />
          </label>
          <label htmlFor="password" className="mb-2">
            Password
            <input
              type={password ? "password" : "text"}
              autoComplete="current-password"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              className="p-2 ml-1 my-2 rounded-lg bg-[#4a1872] w-full block shadow-ishd focus:outline-none"
            />
            <div className=" float-right mr-3 mt-[-2.2rem]">
              {password ? (
                <IoEyeOutline onClick={handelClick} size={20}/>
              ) : (
                <FaRegEyeSlash onClick={handelClick} size={20}/>
              )}
            </div>
          </label>
        </form>
        <div className="flex flex-col text-sm px-1">
          <button className="flex items-center p-2 ml-1 my-2 mt-10 rounded-lg bg-[#4a1872] max-w-96 shadow-ishd">
            <FcGoogle className="ml-2 mr-4" size={25} />
            <span>Sign up with Google</span>
          </button>
          <p className="text-center m-2 text-sm">or sign up with</p>
          <button
            onClick={onSignup}
            className="p-2 ml-1 my-2 max-w-96 bg-[#7036a0] rounded-lg shadow-ishd"
            disabled={buttonDisabled}
          >
            {buttonDisabled ? "No Sign up" : "Sign up"}
          </button>
        </div>
        <p className="text-center m-2 text-sm">
          Have an account? <Link href="/signin">Sign in</Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default SingupPage;
