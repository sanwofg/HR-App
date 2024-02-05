import React from "react";
import logo from "./images/bulls.png";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <div className=" max-h-screen overflow-hidden w-full flex flex-col z-100 py-10 items-center  bg-[black] max-sm:w-full max-sm:h-screen">
      <div className=" ">
        <img src={logo} alt="" className="animate-spi" />
      </div>
      <div className="">
        <h1 className="text-[white] font-bold text-5xl  max-sm:text-center max-sm:text-2xl">
          Hello from HR APP
        </h1>
      </div>
      <div className="flex flex-row justify-between w-[25rem]  max-sm:">
        <Link to={"/login"}>
          <button className="bg-[#0c7c3f] text-[white] font-semibold rounded w-40 h-12 text-2xl cursor-pointer hover:bg-[white] hover:text-[#0c7c3f]">
            Login
          </button>
        </Link>

        <button className="bg-[white] text-[#0c7c3f] font-semibold rounded w-40 h-12 text-2xl cursor-pointer hover:bg-[#0c7c3f] hover:text-[white]">
          Signup
        </button>
      </div>
    </div>
  );
}

export default Landing;
