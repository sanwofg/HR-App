import React from "react";
import "./App.css";
import Signup from "./components/Signup";
import SideNav from "./components/SideNav";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Assignment from "./pages/Assignment";
import Courses from "./pages/Courses";
import Settings from "./pages/Settings";
import Reports from "./pages/Reports";
import SignupPage from "./EntryPoint/SignupPage";
import LoginPage from "./EntryPoint/LoginPage";
import LandingPage from "./EntryPoint/LandingPage";
import GooglePage from "./EntryPoint/GooglePage";
import RegistrationForm from "./components/RegistrationForm";
import UnsuccessfulPopUp from "./components/unsuccessulpopup";
import SuccessPopUp from "./components/successpopup";
import EmailReset from "./EntryPoint/EmailReset";
function App() {
  const [openNav, setOpenNav] = useState(true);
  const open = () => {
    setOpenNav(!openNav);
  };
  const close = () => {
    setOpenNav(!openNav);
  };

  return (
   
    <div className="bg-white">
       <BrowserRouter>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/google-signup" element={<GooglePage />} />
          <Route path="/registration" element={<RegistrationForm />} />
          <Route path="/successfulreg" element={<SuccessPopUp />} />
          <Route path="/unsuccessfulreg" element={<UnsuccessfulPopUp />} />

          {openNav && (
            <Route
              path="/SideNav"
              element={
                <SideNav toggle={open} openNav={openNav} close={close} />
              }
            />
          )}
          <Route
            path="/dashboard/*"
            element={
              <SideNav toggle={open} openNav={openNav} close={close}>
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/assignment" element={<Assignment />} />
                  <Route path="/courses" element={<Courses />} />
                  <Route path="/reports" element={<Reports />} />
                  <Route path="/settings" element={<Settings />} />
                </Routes>
              </SideNav>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
