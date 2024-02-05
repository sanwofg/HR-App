import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import logo from "../Images/bdmp.png";
import { useState, useEffect } from "react";
import { GoogleLogin } from "@react-oauth/google";
import SignUp from "./SignUp";

function Landing() {
  const [popup, setPopup] = useState(false);
  const [signup, setSignup] = useState(false);

  const popsign = () => {
    setPopup(false);
    setSignup(true);
  };

  const change = () => {
    setSignup(false);
    setPopup(true);
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
      <div className="mt-[-4rem]">
        <img
          src={logo}
          alt=""
          className="w-48 mt-20 motion-safe:animate-spin"
        />
      </div>
      <div className="">
        <h1 className="text-[white] font-normal text-4xl font-sans mt-[-10rem]">
          Hello from <br /> <br />{" "}
          <span className="font-bold font-asset">Naija 01</span>
        </h1>
      </div>

      {popup && (
        <div className="w-[25rem] h-[35rem] shadow-2xl bg-[white] flex flex-col justify-around items-center absolute m-auto rounded-[10px] gap-7 backdrop-blur-3xl backdrop-brightness-150">
          <h1 className="text-2xl text-primary font-semibold font-asset mt-[2rem]">
            NAIJA 01
          </h1>
          <form
            onSubmit={formik.handleSubmit}
            className=" w-80 h-20 flex flex-col justify-between gap-10 mb-[4rem] "
          >
            <input
              className="h-12 mt-1 px-3 py-2 bg-white border-2 border-[#0c7c3f] shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none placeholder:italic placeholder:text-base placeholder:text-[#565872]  placeholder:font-sans focus:border-sky-500 focus:ring-sky-500 block w-80 rounded sm:text-sm focus:ring-1 max-sm:w-60 max-sm:ml-10"
              name="email"
              type="email"
              placeholder="Email"
              {...formik.getFieldProps("email")}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="text-xs text-[red] mt-[-2.4rem]">
                {formik.errors.email}
              </div>
            ) : null}
            <input
              className="h-12 mt-1 px-3 py-2 bg-white border-2 border-[#0c7c3f] shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none placeholder:italic placeholder:text-base placeholder:text-[#565872]  placeholder:font-sans  focus:border-sky-500 focus:ring-sky-500 block w-80 rounded sm:text-sm focus:ring-1 max-sm:w-60 max-sm:ml-10"
              name="password"
              type="text"
              placeholder="Password"
              {...formik.getFieldProps("password")}
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="text-xs text-[red] mt-[-2.4rem]">
                {formik.errors.password}
              </div>
            ) : null}
          </form>
          <div className="flex flex-row justify-between w-[20rem] mt-[-4rem] font-sans max-sm:w-[15rem] max-sm:text-sm">
            <input type="checkbox" />
            <p className="text-[#565872] mr-[6.5rem]">Remember me</p>
            <a href="" className="text-[#0c7c3f] font-bold">
              Forgot password?
            </a>
          </div>
          <div>
            <button className="bg-[#0c7c3f] text-[white] h-10 w-[20rem] mt-6 text-[14px] font-medium rounded font-serif cursor-pointer border-[1px] border-[#d2dbef] hover:bg-[#d2dbef] hover:text-[black] hover:bg-opacity-15 max-sm:w-60">
              Login
            </button>
            <p className="font-sans text-xl text-[#565872]">or</p>
            <GoogleLogin
              width={"320px"}
              onSuccess={(credentialResponse) => {
                console.log(credentialResponse);
              }}
              onError={() => {
                console.log("Login Failed");
              }}
            />
          </div>

          <div className="flex flex-row justify-center gap-2 mb-[2rem] font-sans">
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
    </div>
  );
}

export default Landing;
