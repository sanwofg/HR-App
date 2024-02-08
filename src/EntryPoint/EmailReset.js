import React from "react";

function EmailReset() {
  return (
    <div className="w-[25rem] h-[26rem] bg-[white] shadow-2xl flex flex-col justify-around items-center absolute py-5 rounded-[10px] backdrop-blur-3xl backdrop-brightness-150">
      <h1 className="text-2xl text-primary font-semibold font-asset">
        NAIJA 01
      </h1>
      <div className="flex flex-col justify-between gap-8 items-center">
        <p className="text-xl text-[#565872]">Enter your registered email</p>
        <form className=" w-80 h-20 flex flex-col justify-between gap-8">
          <input
            className="h-12 px-3 py-2 bg-white border-2 border-[#0c7c3f] shadow-sm placeholder-slate-400 focus:outline-none placeholder:italic placeholder:text-base placeholder:text-[#565872]  focus:border-[#0c7c3f] focus:ring-[#0c7c3f] block w-80 rounded sm:text-sm focus:ring-1 max-sm:w-60 max-sm:ml-10"
            name="email"
            type="email"
            placeholder="Email"
          />
        </form>
      </div>
      <div className="pb-8">
        <button className="bg-[#0c7c3f] text-[white] h-12 w-[20rem] text-md font-medium rounded font-asset cursor-pointer hover:bg-[#38454F] max-sm:w-60">
          Send
        </button>
      </div>
    </div>
  );
}

export default EmailReset;
