import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import logo from "./images/bdmp.png";
import { useState, useEffect } from "react";
import { GoogleLogin } from "@react-oauth/google";
import SignUp from "./SignupPage";
import RegistrationForm from "../components/RegistrationForm";

function Landing() {
  const [popup, setPopup] = useState(false);
  const [signup, setSignup] = useState(false);
  const [reg, setReg] = useState(false);

  const popsign = () => {
    setPopup(false);
    setReg(false);
    setSignup(true);
  };

  const change = () => {
    setSignup(false);
    setReg(false);
    setPopup(true);
  };

  const openReg = () => {
    setPopup(false);
    setSignup(false);
    setReg(true);
  };

  const pop = () => {
    setTimeout(change, 3000);
  };
  useEffect(() => {
    pop();
  }, []);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string().required("Required"),
    }),

    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className="h-screen flex flex-col items-center justify-around bg-[#0c7c3f] max-sm:w-screen">
      <div className="flex flex-col gap-16">
        <div className="flex justify-center">
          <img src={logo} alt="" className="w-48 motion-safe:animate-spin" />
        </div>
        <div>
          <h1 className="text-[white] font-normal text-4xl font-sans text-center">
            Hello from <br /> <br />{" "}
            <span className="font-bold font-asset">Naija 01</span>
          </h1>
        </div>
      </div>

      {popup && (
        <div className="w-[25rem] h-[35rem] shadow-2xl bg-[white] flex flex-col justify-around items-center absolute py-5 rounded-[10px] backdrop-blur-3xl backdrop-brightness-150 max-sm:w-[20rem]">
          <h1 className="text-2xl text-primary font-semibold font-asset">
            NAIJA 01
          </h1>
          <div className="gap-4 max-sm:flex flex-col justify-center max-sm:ml-20">
            <form
              onSubmit={formik.handleSubmit}
              className=" w-80 h-auto flex flex-col justify-between gap-8"
            >
              <div>
                <input
                  className="h-10 px-3 py-2 border-2 border-[#0c7c3f] shadow-sm placeholder-slate-400 focus:outline-none placeholder:italic placeholder:text-base placeholder:text-[#565872]  placeholder:font-sans focus:border-[#0c7c3f] focus:ring-sky-500 block w-80 rounded sm:text-sm focus:ring-1 max-sm:w-60"
                  name="email"
                  type="email"
                  placeholder="Email"
                  {...formik.getFieldProps("email")}
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className="text-xs text-[red]">
                    {formik.errors.email}
                  </div>
                ) : null}
              </div>
              <div className="gap-1">
                <input
                  className="h-10 px-3 py-2 bg-white border-2 border-[#0c7c3f] shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none placeholder:italic placeholder:text-base placeholder:text-[#565872]  placeholder:font-sans  focus:border-sky-500 focus:ring-sky-500 block w-80 rounded sm:text-sm focus:ring-1 max-sm:w-60"
                  name="password"
                  type="text"
                  placeholder="Password"
                  {...formik.getFieldProps("password")}
                />
                {formik.touched.password && formik.errors.password ? (
                  <div className="text-xs text-[red]">
                    {formik.errors.password}
                  </div>
                ) : null}
              </div>
            </form>
            <div className="flex flex-row justify-between w-[20rem] mt-2 text-sm font-sans max-sm:w-[15rem] max-sm:text-sm">
              <div className="flex flex-row gap-1">
                <input type="checkbox" />
                <p className="text-[#565872]">Remember me</p>
              </div>

              <a href="" className="text-[#0c7c3f] font-bold">
                Forgot password?
              </a>
            </div>
          </div>
          <div className="max-sm:ml-20">
            <button className="bg-[#0c7c3f] text-[white] h-10 w-[20rem] text-[14px] font-medium rounded font-[serif] cursor-pointer border-[1px] border-[#d2dbef] hover:bg-[#d2dbef] hover:text-[black] hover:bg-opacity-15 max-sm:w-[15.5rem]">
              Login
            </button>
            <p className="font-sans text-xl text-[#565872] text-center max-sm:mr-16">
              or
            </p>
            <GoogleLogin
              className="max-sm:w-[150px]"
              width={"320px"}
              onSuccess={(credentialResponse) => {
                console.log(credentialResponse);
              }}
              onError={() => {
                console.log("Login Failed");
              }}
            />
          </div>

          <div className="flex flex-row justify-center gap-2 font-sans">
            <p className="text-[14px] text-[#565872]">
              Don't have an account yet?
            </p>
            <span
              onClick={popsign}
              className="text-[14px] text-[#0c7c3f] font-bold cursor-pointer"
            >
              Signup
            </span>
          </div>
        </div>
      )}
      {signup && <SignUp change={change} />}
      {reg && <RegistrationForm />}
    </div>
  );
}

export default Landing;
