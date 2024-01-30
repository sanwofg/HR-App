import React from "react";
import logo from "../Images/bulls.png";
import "./googlePage.css";
import google from "../Images/google-symbol.png";
import { Link } from "react-router-dom";

function googlePage() {
  return (
    <div className="gp-body">
      <div className="gp-logo">
        <img src={logo} alt="" />
      </div>
      <div className="gp-btn">
        <Link to="/signup">
          <button className="gp-btn1">Signup with email</button>
        </Link>
        <Link to="/">
          <button className="gp-btn2">
            {" "}
            <img id="sp-goo" src={google}></img>
            Continue with google
          </button>
        </Link>
      </div>
    </div>
  );
}

export default googlePage;
