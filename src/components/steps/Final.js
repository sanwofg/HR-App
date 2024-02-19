// 

import React, { useContext } from 'react';
import { StepperContext } from '../../contexts/StepperContext';
import image from "../Assets/mark.png";

export default function Final() {
  const { userData } = useContext(StepperContext);

  // Check if all form fields are filled
  const isFormFilled = Object.values(userData).every(value => !!value);

  if (!isFormFilled) {
    return null; // Don't render the Final component if the form is not filled
  }

  return (
    <div className='container md:mt-10'>
      <div className='flex flex-col items-center'>
        <div className='text-green-400'>
          <img src={image} className='w-24 h-24' alt="Mark" />
        </div>

        <div className='mt-3 text-lg font-semibold uppercase text-green-500'>
          Congratulations!
        </div>
        
        <div className='text-lg font-semibold text-gray-500 max-sm:text-xs'>
          Your registration was successful!
        </div>

        <a className='max-sm:mt-2 mt-2' href='/dashboard'>
          <button className='h-10 px-5 max-sm:text-xs text-green-700 transition-colors duration-150 border border-gray-300 rounded-lg focus:shadow-outline hover:bg-green-500 hover:text-green-100'>
            Close
           </button>
        </a>
        
      </div>
    </div>
  );
}
