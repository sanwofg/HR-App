import React from 'react'
import notification from './assets/musical-bell-outline.png'
import note from './assets/note-pad.png'
import { Link } from 'react-router-dom'
import book from './assets/book.png'
import users from './assets/users.png' 
import code from './assets/web-coding.png'
import javsscript from './assets/javascript.png'
import python from './assets/python.png'
import { Bar } from "react-chartjs-2";
import GaugeChart from 'react-gauge-chart'


const Dashboard = ({openNav, close}) => {


  const labels = ["Jan", "Feb", "Mar", "Apr", "May"];

const data = {
  labels: labels,
  datasets: [
    {
      label: "Study",
      backgroundColor: "rgb(255, 144, 83)",
      data: [40, 20, 60, 32, 15,],
      borderRadius:4,
      stack: 'Stack 0'

    },

    {
      label: "exam",
      backgroundColor: "rgb(248, 239, 226)",
      data: [60, 40, 68, 32, 15,],
      borderRadius:4,
      stack: 'Stack 0'

    }
  ],
};



  let time = new Date().getHours()
const newTime = ()=>{
  if (time < 12){
    return time = 'Morning'
  }else if(time >11 & time<16){
   return time = 'Afternoon'
  }else if(time >15){
    return time = 'Evening'
  }
}

  return (
    <div className='flex px-4 bg-white h-auto max-sm:flex-col'>
      <div className='flex flex-col w-[70%] max-sm:w-full  align-middle items-center '>

        <div className='flex w-full  h-auto justify-between align-middle items-center'>
          <div className='items-center align-middle'>
            <Link to={'/registration'}>
              <p className='text-lg max-md:mb-4 lg:font-medium max-sm:text-sm'>Good {newTime()} User</p>
            </Link> 
          </div>

          <div className='flex items-center gap-4'  >
            <input type='search' placeholder='search' className={`w-64 h-10 rounded-lg outline-none  bordr-[#2F8D47] border-2 placeholder:pl-4 placeholder:py-8 ${openNav?'max-md:hidden': ''} max-md:w-56  max-md:h-9`}/>

          </div> 
          <div className='border-2 rounded-lg py-2 px-2'>
              <img src={notification} alt='notification-bell' width={15} height={15} className={` ${openNav?'max-md:hidden': ''} `}/>
          </div>
        </div>

        {/* Registered courses  */}

        <div className='grid grid-cols-3 max-sm:items-center max-sm:grid-cols-1 max-lg:grid-cols-2 gap-6 mt-8'>

          <div className='flex flex-col justify-start px-3 py-3 gap-5  rounded-lg shadow w-56 bg-[#EDEDFB] '>
            <div className='rounded-full bg-white w-12 h-12 items-center flex justify-center'>
              <img src={code} alt='programing' width={25} height={25}/>
            </div>

            <div>
              <p className='text-sm'>Basic: HTML and CSS </p>
            </div>

            <div className=' flex rounded-lg justify-center gap-[14px] items-center bg-[#FCF9FF]  py-2'>

                <div className='flex justify-center items-center gap-1 text-xs border-r-2 pr-1 border-[#EDEDFB]'>
                  <div>
                    <img src={book} alt='book' width={15} height={15}/>
                  </div>
                  
                  <div>
                    <p> 24</p>
                  </div>
                </div>

                <div className='flex justify-center items-center gap-1 text-xs border-r-2 pr-1 border-[#EDEDFB]'>
                  <div>
                    <img src={note} alt='note' width={15} height={15}/>
                  </div>
                  
                  <div>
                    <p> 24</p>
                  </div>
                </div>

                <div className='flex justify-center items-center gap-1 text-xs border-r-2 pr-1 border-[#EDEDFB]'>
                  <div>
                    <img src={users} alt='users' width={15} height={15}/>
                  </div>
                  
                  <div>
                    <p>99</p>
                  </div>
                </div>
            </div>
          </div>

          <div className='flex flex-col justify-start px-3 py-3 gap-5  rounded-lg shadow w-56 bg-[#F8EFE2] '>
            <div className='rounded-full bg-white w-12 h-12 items-center flex justify-center'>
              <img src={javsscript} alt='programing' width={29} height={29}/>
            </div>

            <div>
              <p className='text-sm'>JavaScript </p>
            </div>

            <div className=' flex rounded-lg justify-center gap-[14px] items-center bg-[#FAF5EC]  py-2'>

                <div className='flex justify-center items-center gap-1 text-xs border-r-2 pr-1 border-[#EDEDFB]'>
                  <div>
                    <img src={book} alt='book' width={15} height={15}/>
                  </div>
                  
                  <div>
                    <p> 29</p>
                  </div>
                </div>

                <div className='flex justify-center items-center gap-1 text-xs border-r-2 pr-1 border-[#EDEDFB]'>
                  <div>
                    <img src={note} alt='note' width={15} height={15}/>
                  </div>
                  
                  <div>
                    <p> 22</p>
                  </div>
                </div>

                <div className='flex justify-center items-center gap-1 text-xs border-r-2 pr-1 border-[#EDEDFB]'>
                  <div>
                    <img src={users} alt='users' width={15} height={15}/>
                  </div>
                  
                  <div>
                    <p>69</p>
                  </div>
                </div>
            </div>
          </div>

          <div className='flex flex-col justify-start px-3 py-3 gap-5  rounded-lg shadow w-56 bg-[#EFF7E2] '>
            <div className='rounded-full bg-white w-12 h-12 items-center flex justify-center'><img src={python} alt='programing' width={25} height={25}/></div>

            <div>
              <p className='text-sm'>Python </p>
            </div>

            <div className=' flex rounded-lg justify-center gap-[14px] items-center bg-[#F6FBEE]  py-2'>

                <div className='flex justify-center items-center gap-1 text-xs border-r-2 pr-1 border-[#EDEDFB]'>
                  <div>
                    <img src={book} alt='book' width={15} height={15}/>
                  </div>
                  
                  <div>
                    <p> 16</p>
                  </div>
                </div>

                <div className='flex justify-center items-center gap-1 text-xs border-r-2 pr-1 border-[#EDEDFB]'>
                  <div>
                    <img src={note} alt='note' width={15} height={15}/>
                  </div>
                  
                  <div>
                    <p> 36</p>
                  </div>
                </div>

                <div className='flex justify-center items-center gap-1 text-xs border-r-2 pr-1 border-[#EDEDFB]'>
                  <div>
                    <img src={users} alt='users' width={15} height={15}/>
                  </div>
                  
                  <div>
                    <p>50</p>
                  </div>
                </div>
            </div>
          </div>

        </div>
         
         {/* Statistics */}

        <div className={`flex max-md:flex-col gap-4 max-sm:items-center max-sm:grid-cols-1 w-full max-md:ml-[0px] mt-11 ${!openNav? 'md: ml-24' : 'ml-[]0px'}` }>

          <div className={`flex flex-col ${openNav? 'max-sm:hiddenn': ''} w-[410px] h-[220px] max-sm:w-[250px]`}>
            <div>
              <p className='font-semibold'> Hours Spent</p>
            </div>
            <div className={` shadow pb-1 rounded-lg mt-4 `} >
              <Bar  data={data} />
            </div>
          </div>

          <div className=' flex flex-col gap-4 max-sm:w-[250px] '>
               <div> 
                <p className='font-semibold'> Performance</p>
              </div>

              <div className='flex flex-col  shadow rounded-lg py-2 ' >
                <div className='flex justify-between px-4 mb-4 items-center max-sm:gap-4'>
                    <div>
                      <p className='text-sm max-sm:text-xs'>Your Progress</p>
                    </div>
                    <div>
                      <select className='outline-none border-0 bg-[#EFF1F3] text-sm max-sm:text-xs max-sm:px-1 px-2 py-1 rounded-sm'>
                        <option value='monthly'>Monthly</option>
                        <option value='weekly' >Weekly</option>
                        <option value='daily'>Daily</option>
                      </select>
                    </div>
                </div>

                <div>
                  <GaugeChart id="gauge-chart4" 
                    nrOfLevels={16} 
                    arcPadding={0.1} 
                    cornerRadius={8} 
                    percent={0.8} 
                    colors={[ "red","green", ]}
                    needleColor="#345243"
                    hideText={false}
                    textColor="#345243"
                    animDelay="3"
                    animateDuration="4000"
                    needleBaseColor="#FF5F6D"
                    arcWidth={0.24}
                    marginInPercent={0.07}
                  />
                </div>
              </div>

            </div>
        </div>

      </div>
    </div>
  )
}

export default Dashboard