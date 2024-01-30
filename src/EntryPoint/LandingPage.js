import React from "react";
import logo from "../Images/bulls.png";
import "./landingPage.css";
import { Link } from "react-router-dom";

function landingPage() {
  return (
    <div className="lp-body">
      <div className="lp-logo">
        <img src={logo} alt="" />
      </div>
      <div className="lp-hello">
        <h1>Hello from HR APP</h1>
      </div>
      <div className="lp-btn">
        <Link to="/login">
          <button className="lp-btn1">Login</button>
        </Link>
        <Link to="/google">
          <button className="lp-btn2">Signup</button>
        </Link>
      </div>
    </div>
  );
}

export default landingPage;
