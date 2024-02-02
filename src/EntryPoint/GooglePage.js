import React from "react";
import logo from "./images/bulls.png";
import google from "./images/google-symbol.png";

function Google() {
  return (
    <div className="h-screen flex flex-col items-center justify-around bg-[black]">
      <div className="">
        <img src={logo} alt="" />
      </div>
      <div className="flex flex-col justify-around h-[18rem] items-center mt-[-6rem] ml-8 max-sm:ml-0">
        <button className="bg-[#0c7c3f] text-[white] font-semibold rounded w-[23rem] h-14 text-2xl cursor-pointer hover:bg-[white] hover:text-[#0c7c3f]">
          Signup with email
        </button>

        <button className="flex flex-row justify-center items-center bg-[white] text-[#0c7c3f] font-semibold gap-12 rounded w-[23rem] h-14 text-2xl cursor-pointer hover:bg-[#0c7c3f] hover:text-[white] content-center">
          {" "}
          <img className="w-[2rem]" src={google}></img>
          Continue with google
        </button>
      </div>
    </div>
  );
}

export default Google;
