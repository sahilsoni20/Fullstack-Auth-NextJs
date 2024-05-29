import React from "react";

const Card = () => {
  return (
    <div className="flex justify-center px-2 text-base items-center md:h-screen relative bottom-[3rem]">
      <div className="text-xl h-[380px] md:h-[480px] w-full md:w-[470px] bg-white shadow-2xl rounded-3xl">
        <div>
          <img
            src="/image/taylorbg.webp"
            alt="Taylor BG Image"
            className="rounded-t-3xl w-full"
          />
        </div>
        <div className="flex justify-center -mb-12">
          <img
            src="/image/taylor.jpg"
            alt="Taylor Image"
            className="rounded-full relative bottom-[4.2rem] border-[7px] border-white w-24 md:w-36"
          />
        </div>
        <div className="flex flex-col justify-center items-center text-3xl">
          <div className="gap-4 text-violet-400">
            Taylor Swift <span className="font-light text-violet-700">26</span>
          </div>
          <div className="font-light text-lg text-pink-500 tracking-wide">
            London
          </div>
        </div>
        <hr className="bg-black my-6" />
        <button className="flex justify-center items-center p-2 ml-1 my w-full mt-8 bg-[#a36ccf] hover:bg-[#7036a0] rounded-lg shadow-ishd">
          Sign out
        </button>
      </div>
    </div>
  );
};

export default Card;
