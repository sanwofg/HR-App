import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const EmailAuthenticator = () => {
    const[success, setSuccess]=useState('checking')
  
  return (
    <div className='flex h-screen  bg-[white] bg-opacity-10 '>
      {success === "successful"  && <div  className='flex flex-col m-auto w-2/6  max-md:px-6 px-14 py-10 shadow-xl bg-white rounded-lg max-lg:w-2/3 max-sm:m-auto justify-center'>
            <div className='items-center m-auto mb-2 mt-0 animate-bounce'>
              {/* <img src={checkmark} height={100} width={100} alt='Email-icon' className='max-md:w-14 max-md:h-14'/> */}
            </div>
            <div>
                <p className='text-center text-2xl font-semibold mb-7 max-md:text-xl'> Verification Successful</p>

                <Link to={'/n'} >
                    <p className='text-xs text-center'>
                        Your email has successfully been verified <span className='text-[#00A76F] font-medium hover:underline transition hover:cursor-pointer'>proceed to login</span> 
                    </p>
                </Link>
            </div>
      </div>}

      {
        success === 'checking' && <div className='flex gap-3 mx-auto items-center'>
            <p className='text-sm md:text-lg'>we're verifying your email</p>
            <div className='border-2 w-10 h-10 m-auto border-dashed border-[#00A76F] rounded-full animate-spin'> </div>

        </div>
      }

      { !success && <div  className='flex flex-col m-auto w-2/6  max-md:px-6 px-14 py-10 shadow-xl bg-white rounded-lg max-lg:w-2/3 max-sm:m-auto justify-center'>
            <div className='items-center m-auto mb-8 mt-0 animate-ping'>
              {/* <img src={failed} height={50} width={50} alt='Email-icon' className='max-md:w-14 max-md:h-14'/> */}
            </div>
            <div>
                <p className='text-center text-2xl font-semibold mb-7 max-md:text-xl'> Verification Failed</p>
                    <p className='text-xs text-center'>
                        Your email verification was not Successful <span className='text-[#00A76F] font-medium hover:underline transition hover:cursor-pointer'>click here to retry</span> 
                    </p>
                
            </div>
      </div>}
  </div>
  )
}

export default EmailAuthenticator