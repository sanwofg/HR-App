import React from "react";
import backgroundImg from "../Assets/backgroundImg.png";

const inprogress = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full min-h-screen flex flex-col items-center justify-center bg-opacity-75 bg-cover" style={{ backgroundImage: `url(${backgroundImg})` }}>
      {/* Registration in Progress */}
      <p className="text-white text-3xl font-bold mb-8">Registration in Progress</p>

      {/* Progress Bar */}
      <div className="w-3/4 bg-gray-300 h-10 relative rounded-full">
        <div className="bg-green-700 h-full rounded-full"></div>
      </div>

      {/* Loading Text */}
      <p className="text-white text-lg font-semibold mt-4">Loading...</p>

      {/* Return to Dashboard Button */}
      <button className="bg-green-700 text-white py-2 px-4 rounded-full mt-8 hover:bg-green-600">
        Return to Dashboard
      </button>
    </div>
  );
};

export default inprogress;
