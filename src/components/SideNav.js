import React, { useState } from 'react'
import Courses from './Assets/courses.png'
import Overview from './Assets/overview.png'
import Home from './Assets/dashbord.png'
import Assignment from './Assets/assignments.png'
// import Book from './book.png'
import Report from './Assets/pie-chart.png'
import Settings from './Assets/settings.png'
import { NavLink } from 'react-router-dom'
import Menu from './Assets/menus.png'


const SideNav = ({children, openNav, close}) => {
    // const [openNav, setOpenNav]=useState(true)

    // const close=()=>{
    //     setOpenNav(!openNav)
    // }

  return (
    <div className='w-full flex justify-between'>

        <div className={`${openNav? 'w-[20%]' : 'w-[5%]'} gap-4 h-[100vh] fixed flex-col bg-[#2F8D47] px-2 py-4 ${ openNav? 'max-md:w-[40%]' : 'max-md:w-[60px]'}`}>
            
            <div className={`bg-white flex justify-end ${ openNav? 'max-md:justify-end' : 'max-md:justify-center'}  ${!openNav? 'max-md:w-11' : 'max-md:w-full'}`}>
                <img onClick={close} src={Menu} width={40} height={40}/> 
            </div>

            <NavLink to={'/dashboard'} color='blue'  className='flex w-full  items-center hover:bg-[black] rounded-lg gap-3 px-3 py-3 max-md:gap-1  '>
                <img src={Home} height={20} width={20}/>
                { openNav && <a  className='text-white text-lg max-md:text-xs'>Dashboard</a>}
            </NavLink >

            <NavLink to={'/overview'} className='flex w-full  items-center hover:bg-[black] rounded-lg gap-3 px-3 py-3 max-md:gap-1 max-md:text-sm '>
                <img src={Overview} height={20} width={20}/>
                {openNav && <a className='text-white text-lg max-md:text-xs'>Overview</a>}
            </NavLink >

            <NavLink to={'/courses'} className='flex w-full  items-center hover:bg-[black] rounded-lg gap-3 px-3 py-3 max-md:gap-1 max-md:text-xs '>
                <img src={Courses} height={20} width={20}/>
                {openNav && <a className='text-white text-lg max-md:text-xs'>Courses</a>}
            </NavLink >

            <NavLink to={'/assignment'} className='flex w-full  items-center hover:bg-[black] rounded-lg gap-3 px-3 py-3 max-md:gap-1 max-md:text-xs '>
                <img src={Assignment} height={20} width={20}/>
                {openNav && <a className='text-white text-lg max-md:text-xs'>Assignment</a>}
            </NavLink >

            <NavLink to={'/reports'} className='flex w-full  items-center hover:bg-[black] rounded-lg gap-3 px-3 py-3 max-md:gap-1 max-md:text-xs '>
                <img src={Report} height={20} width={20}/>
                {openNav && <a className='text-white text-lg max-md:text-xs'>Reports</a>}
            </NavLink >

            <NavLink to={'/settings'} className='flex w-full  items-center hover:bg-[black] rounded-lg gap-3 px-3 py-3 max-md:gap-1 max-md:text-xs '>
                <img src={Settings} height={20} width={20}/>
                {openNav && <a className='text-white text-lg max-md:text-xs'>Settings</a>}
            </NavLink>

        </div>


        <main className={`text-black  h-scren flex-1 ${openNav? 'ml-[20%]' : 'ml-[5%]'}  ${openNav? 'max-md:ml-[41%]' : 'max-md:ml-[63px]'} py-4`}>{children}</main>
    </div>
  )
}

export default SideNav