import React from "react";
import logo from "./images/bulls.png";
import "./GooglePage.css";
import google from "./images/google-symbol.png";
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
