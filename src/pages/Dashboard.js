import React from 'react'
import notification from './assets/musical-bell-outline.png'
import { Link } from 'react-router-dom'
const Dashboard = () => {

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
    <div className='flex px-4 '>
      <div className='flex w-[70%] border-2 h-10 justify-between align-middle items-center'>
         <div className='items-center align-middle'>
          <Link to={'/registration'}>
            <p className='text-lg'>Good {newTime()} User</p>
          </Link> 
         </div>

         <div className='flex items-center gap-4'  >
            <input type='search' placeholder='search' className='w-[250px] h-10 pla rounded-lg outline-none border-slate-400 border-2 placeholder:pl-4 placeholder:py-8'/>

            <div >
              <img src={notification} alt='notification-bell' width={20} height={20}/>
            </div>
         </div> 
      </div>
    </div>
  )
}

export default Dashboard