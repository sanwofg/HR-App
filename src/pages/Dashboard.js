import React from 'react'
import notification from './assets/musical-bell-outline.png'
import note from './assets/note-pad.png'
import { Link } from 'react-router-dom'
import book from './assets/book.png'
import users from './assets/users.png' 
import profileEdit from './assets/profile-edit.png' 
import Samuel from './assets/samuel.png' 
import code from './assets/web-coding.png'
import javsscript from './assets/javascript.png'
import python from './assets/python.png'
import Chart from 'chart.js/auto';
import {CategoryScale} from 'chart.js';
import { Bar } from "react-chartjs-2";
import GaugeChart from 'react-gauge-chart'
import Calendar from 'react-calendar'
import { useState } from 'react'
import 'react-calendar/dist/Calendar.css';


const Dashboard = ({openNav, close}) => {
  
  const [activatePlan, setActivatePlan] = useState(true);
  const [checkAll, setCheckAll] = useState(false);
  const [checkSingle, setCheckSingle] = useState({});
 
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


const handleCheckAll = () => {
  setCheckAll(!checkAll);
};

const handleCheckSingle = (id) => {
  setCheckSingle(prevState => ({
      ...prevState,
      [id]: !prevState[id]
  }));
  if (checkAll) {
      setCheckAll(false);
  }
};
  return (
    <div className='flex px-4 bg-white h-auto lg:gap-64 max-sm:flex-col'>
      <div className='flex flex-col w-[70%] max-sm:w-full  align-middle items-center '>

        <div className='flex w-full  h-auto justify-between align-middle items-center'>
          <div className='items-center align-middle'>
            <Link to={'/registration'}>
              <p className='text-lg max-md:mb-4 lg:font-medium max-sm:text-sm text-center'>Good {newTime()} User</p>
            </Link> 
          </div>

          <div className='flex items-center gap-4'  >
            <input type='search' placeholder='search' className={`w-64 h-10 rounded-lg outline-none  bordr-[#2F8D47] border-2 border-[#2F8D47] pl-3 placeholder:pl-1 placeholder:py-8 ${openNav?'max-md:hidden': ''} max-md:w-32  max-md:h-7`}/>

          </div> 
          <div className='border-2 border-[#2F8D47] rounded-lg py-2 px-2 max-md:p-1'>
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

        <div className={`flex max-md:flex-col gap-4 max-sm:items-center max-sm:grid-cols-1 ${openNav? '' : "px-12"} ${!openNav? '': 'p'}  mt-11 w-full ` }>


                        {/* Bar chat */}
          <div className={`flex flex-col ${openNav? 'max-sm:hiddenn': ''} w-[410px]  max-sm:w-[250px]`}>
            <div>
              <p className='font-semibold'> Hours Spent</p>
            </div>
            <div className={` shadow h-auto pb-1 rounded-lg mt-4 `} >
              <Bar data={data} />
            </div>
          </div>


                        {/* Performance Guage */}
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

      <div className='flex flex-col gap-7 w-full'>
        <div className='flex flex-col gap-6'>

          <div className='flex justify-between'> 
            <p className='text-lg font-bold '>Profile</p>

            <div className='p-2 border-2 rounded-lg border-[#E7EAE9]' >
              <img src={profileEdit} alt='edit-icon' width={20} height={20}/>
            </div>
          </div>

          <div className='items-center flex flex-col  gap-4 justify-center'>
              <img src={Samuel}  width={180} height={180} className='rounded-full '/>
              <p className='text-xl font-bold'>Samuel Chigoziri Anuna</p>
              <p className='text-md '>Software Developer</p>
          </div>

        </div>

        {/* calendar */}

        <div className='flex justify-center items-center mt-5'>
            <Calendar />
        </div>
        {/* todo */}
        <div className='flex flex-col gap-5'>
          <p className='text-xl font-bold'>To Do List</p>
          <div className='flex flex-col'>

            <div className='flex flex-row gap-2 mb-5 items-start'>
              <input type='checkbox' onChange={handleCheckAll} checked={checkAll} className=' accent-primary'/> 
              <div className='flex flex-col -mt-1 items-start'>
                <p className='text-sm font-semibold p-0 m-0'>Create forms for HR App</p>
                <p className='text sm border-[#E9E9E9] border-b-[2px] pb-2 mb-2'>Programing <span className=' ml-2 pl-3 border-l-[2px] border-[#E9E9E9] text-[#FE764B]'>8:00am</span></p>

                <div className=' flex- flex-col gap-2'>
                  <div>
                    <input type='checkbox' onChange={() => handleCheckSingle(1)} checked={checkAll || checkSingle[1]} className=' accent-primary'/>
                    <label className='ml-2'>Integrate API</label>
                  </div>

                  <div>
                    <input  type='checkbox' onChange={() => handleCheckSingle(4)} checked={checkAll || checkSingle[3]} className=' accent-primary'/>
                    <label className='ml-2'>Slicing Homescreen</label>
                  </div>
                  

                </div>
              </div>
            </div>

            <div className='flex flex-row gap-2 mb-5 items-start'>
                <input type='checkbox' className=' accent-primary'/>

                <div className='flex flex-col -mt-1 items-start'>
                  <p className='text-sm font-semibold p-0 m-0'>Research Objective User</p>
                  <p className='text sm  pb-2 mb-2'>Product Design<span className=' ml-2 pl-3 border-l-[2px] border-[#E9E9E9] text-[#FE764B]'>2:40Pm</span></p>
                </div>
            </div>

            <div className='flex flex-row gap-2 mb-5 items-start'>
                <input type='checkbox' className=' accent-primary'/>

                <div className='flex flex-col -mt-1 items-start'>
                  <p className='text-sm font-semibold p-0 m-0'>Report Analysis P2P Business</p>
                  <p className='text sm  pb-2 mb-2'>Business<span className=' ml-2 pl-3 border-l-[2px] border-[#E9E9E9] text-[#FE764B]'>4:50Pm</span></p>
                </div>
            </div>
            

          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard