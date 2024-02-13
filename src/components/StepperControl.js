import React from 'react';

const StepperControl = ({ handleClick, handleSubmit, currentStep, steps }) => {
  const handleNextButtonClick = () => {
    handleSubmit(); // Call the handleSubmit function
    handleClick("next"); // Call the handleClick function with "next" argument
  };

  return (
    <div className='container flex justify-around m-1'> 
      {/* Back button */}
      <button 
        onClick={handleClick}
        className={`bg-[#ffffff] text-[#718096] uppercase py-1 px-2 rounded-xl font-semibold 
        cursor-pointer border-2 border-[#8993a4] hover:bg-[#3e4e62] hover:text-[#ffffff] transition 
        duration-200 ease-in-out ${currentStep === 1 ? 'opacity-50 cursor-not-allowed':''}`}
      >
        Back
      </button>

      {/* Next button */}
      <button 
        onClick={handleNextButtonClick} // Call the new function on button click
        className='bg-[#4CAF50] text-[#ffffff] uppercase py-1 px-2 rounded-xl font-semibold 
        cursor-pointer hover:bg-[#3e4e62] hover:text-[#ffffff] transition 
        duration-200 ease-in-out'
      >
        {currentStep === steps.length -1 ? 'Confirm': 'Next'}
      </button>
    </div>
  );
}

export default StepperControl;
