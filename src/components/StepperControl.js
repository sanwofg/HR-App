import React from 'react'

const StepperControl = ({handleClick, currentStep, steps}) => {
  return (
    <div className='container flex justify-around m-1'> 

    {/* Back button */}

    <button 
    onClick={() => handleClick("prev")}
    className={`bg-white text-slate-400 uppercase py-1 px-2 rounded-xl font-semibold 
    cursor-pointer border-2 border-slate-300 hover:bg-slate-700 hover:text-white transition 
    duration-200 ease-in-out ${currentStep === 1 ? 'opacity-50 cursor-not-allowed':''}`}
    >Back</button>

    {/*Next button */}
    <button 
    onClick={() => handleClick("next")}
    className='bg-green-500 text-white uppercase py-1 px-2 rounded-xl font-semibold 
    cursor-pointer hover:bg-slate-700 hover:text-white transition 
    duration-200 ease-in-out'>
      {currentStep === steps.length -1 ? 'Confirm': 'Next'}
    </button>


    </div>
  )
}

export default StepperControl