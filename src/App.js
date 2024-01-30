import React from 'react';
import logo from './bdmp.png';
import './App.css';
import Signup from './components/Signup';
import SideNav from './components/SideNav';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard'
import Assignment from './pages/Assignment'
import Courses from './pages/Courses'
import Overview from './pages/Overview'
import Settings from './pages/Settings';
import Reports from './pages/Reports';
import SignupPage from './EntryPoint/SignupPage'
import LoginPage from './EntryPoint/LoginPage'
import LandingPage from './EntryPoint/LandingPage'
import GooglePage from './EntryPoint/GooglePage'
import RegistrationForm from './components/RegistrationForm'
function App() {

   const [openNav, setOpenNav]=useState(true)
   const open =()=>{
      setOpenNav(!openNav)
   }
   const close =()=>{
      setOpenNav(false)
   }
 return (
 <div  className=''>
   <BrowserRouter>
      <Routes>
         <Route path='/' element={<LandingPage/>}/>
         <Route path='/signup' element={<SignupPage/>}/>
         <Route path='/login' element={<LoginPage/>}/>
         <Route path='/google-signup' element={<GooglePage/>}/>
         <Route path='/registration' element={<RegistrationForm/>}/>
      </Routes>
      <SideNav toggle={open} nav={openNav} close={close}> 
         <Routes>
            <Route path='/dashboard' element={<Dashboard/>}/>
            <Route path='/assignment' element={<Assignment/>}/>
            <Route path='/courses' element={<Courses/>}/>
            <Route path='/reports' element={<Reports/>}/>
            <Route path='/overview' element={<Overview/>}/>
            <Route path='/settings' element={<Settings/>}/>
         </Routes>
      </SideNav>
   </BrowserRouter>
 {/* <img src={logo} height={20} width={70} className="App-logo" alt="logo" /> */}
 {/* <Signup/> */}

 </div>
 );
}
export default App;
