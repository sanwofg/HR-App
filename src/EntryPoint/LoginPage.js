import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { GoogleLogin } from "@react-oauth/google";

function Login({ popsign }) {
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
    <div className="w-[85%] h-[35rem] shadow-2xl bg-[white] flex flex-col justify-around items-center absolute py-5 rounded-[10px]  backdrop-blur-3xl backdrop-brightness-150 max-sm:top-12 max-sm:left-7">
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
              <div className="text-xs text-[red]">{formik.errors.email}</div>
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
              <div className="text-xs text-[red]">{formik.errors.password}</div>
            ) : null}
          </div>
        </form>
        <div className="flex flex-row justify-between w-[20rem] mt-2 text-sm font-sans max-sm:w-[15rem] max-sm:text-sm">
          <div className="flex flex-row gap-1">
            <input type="checkbox" />
            <p className="text-[#565872]">Remember me</p>
          </div>

          <span
            // onClick={resetEmail}
            className="text-[#0c7c3f] font-bold cursor-pointer"
          >
            Forgot password?
          </span>
        </div>
      </div>
      <div className="items-center">
        {/* <Link to={"/dashboard"}> */}
        <button
          // onClick={openSuccess}
          className="bg-[#0c7c3f] text-[white] h-10 w-[20rem] max-sm:w-[180px] text-xl font-medium rounded font-[serif] cursor-pointer border-[1px] border-[#d2dbef] hover:bg-[#d2dbef] hover:text-[black] hover:bg-opacity-15 "
        >
          Login
        </button>
        {/* </Link> */}
        <p className="font-sans text-xl text-[#565872] text-center ">or</p>
        <div className="max-sm:hidden">
          <GoogleLogin
            className=""
            width={"320px"}
            onSuccess={(credentialResponse) => {
              console.log(credentialResponse);
            }}
            onError={() => {
              console.log("Login Failed");
            }}
          />
        </div>
        <div className="sm:hidden">
          <GoogleLogin
            className="max-sm:w-[200px]"
            // width={"320px"}
            onSuccess={(credentialResponse) => {
              console.log(credentialResponse);
            }}
            onError={() => {
              console.log("Login Failed");
            }}
          />
        </div>
      </div>

      <div className="flex flex-row justify-center gap-2 font-sans">
        <p className="text-[14px] text-[#565872]">Don't have an account yet?</p>
        <span
          onClick={popsign}
          className="text-[14px] text-[#0c7c3f] font-bold cursor-pointer"
        >
          Signup
        </span>
      </div>
    </div>
  );
}

export default Login;
