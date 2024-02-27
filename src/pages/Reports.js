import React from 'react'
import Samuel from './assets/samuel.png'

const Reports = () => {
  return (
    <div className='w-[99%] px-1 flex flex-col py-0'>
      <section className='flex gap-4 items-end bg-primary bg-opacity-20 h-64 max-md:h-48 px-4 rounded-sm pb-3'>
        <div className=''>
          <img src={Samuel} alt='Profile picture of a staff' className='rounded-full bg-[white] w-48 h-48 object-contain max-sm:w-32 max-sm:h-32'/>
        </div>
        <div className='pb-2 text-lg max-sm:text-sm'>
          <p className='font-bold text-2xl max-sm:text-lg'>Anuna samuel</p>
          <p>Tech & Communication</p>
        </div>
      </section>

      <section className='flex max-sm:flex-col gap-4 mt-10'>
        <div className='flex gap-4 flex-col w-[70%] max-sm:text-xs max-sm:w-[100%] bg-[#ffffff] rounded-sm shadow px-4 py-2'>
          <div>
            <p className='font-bold text-lg'>Work and Contact Information</p>
          </div>
          <div className='grid grid-cols-2 gap-5'>
            <div>
              <p className='font-semibold'>Company</p>
              <p>Bullseye DMP</p>
            </div>
            <div>
              <p className='font-semibold'>Department</p>
              <p>Tech and Communications</p>
            </div>
            <div>
              <p className='font-semibold'>Position</p>
              <p>Staff</p>
            </div>
            <div>
              <p className='font-semibold'>Location</p>
              <p>Ilupeju, Lagos.</p>
            </div>
            <div>
              <p className='font-semibold'>Hire Date</p>
              <p>November 2023</p>
            </div>
            <div>
              <p className='font-semibold'>Email</p>
              <p>anuna.s@bullseyemanpower.com</p>
            </div>
            <div>
              <p className='font-semibold'>Phone</p>
              <p>07084151451</p>
            </div>
            <div>
              <p className='font-semibold'>Salary</p>
              <p>#80,000</p>
            </div>
            
          </div>
        </div>

        <div className='flex flex-col gap-4 w-[30%] max-sm:text-xs max-sm:w-[100%] shadow px-4 py-2'>
          <div>
            <p className='font-bold text-lg'>About</p>
          </div>
          <div className='grid grid-cols-1 gap-5'>
            <div>
              <p className='font-semibold'>Education</p>
              <p>BSC Computer Science</p>
            </div>

            <div>
              <p className='font-semibold'>DOB</p>
              <p>12-01-1990</p>
            </div>
            <div>
              <p className='font-semibold'>Gender</p>
              <p>Male</p>
            </div>
            <div>
              <p className='font-semibold'>Address</p>
              <p>Ikorodu, Lagos State.</p>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  )
}

export default Reports