import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";

function Login() {
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
    <div className="h-screen flex items-center justify-center">
      <div className="w-[25rem] h-[32rem] bg-[white] shadow-lg flex flex-col justify-around items-center m-auto rounded-[10px] gap-7">
        <h1 className="text-2xl text-primary font-semibold mt-[2rem]">
          HR APP
        </h1>
        <form
          onSubmit={formik.handleSubmit}
          className=" w-80 h-20 flex flex-col justify-between gap-10 mb-[4rem] "
        >
          <input
            className="h-12 mt-1 px-3 py-2 bg-white border-2 shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none placeholder:italic placeholder:text-base placeholder:text-[#565872]  placeholder:font-sans focus:border-[#0c7c3f] focus:ring-[#0c7c3f] block w-80 rounded sm:text-sm focus:ring-1 max-sm:w-60 max-sm:ml-10"
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
            className="h-12 mt-1 px-3 py-2 bg-white border-2 shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none placeholder:italic placeholder:text-base placeholder:text-[#565872]  focus:border-[#0c7c3f] focus:ring-[0c7c3f] block w-80 rounded sm:text-sm focus:ring-1 max-sm:w-60 max-sm:ml-10"
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
        <div className="flex flex-row justify-between w-[20rem] max-sm:w-[15rem] max-sm:text-sm">
          <input type="checkbox" />
          <p className="text-[#565872] mr-[3rem]">Remember me</p>
          <a href="" className="text-[#0c7c3f] font-bold">
            Forgot password?
          </a>
        </div>
        <div>
          <Link to={"/dashboard"}>
            <button className="bg-[#0c7c3f] text-[white] h-12 w-[20rem] mt-6 text-xl font-semibold rounded cursor-pointer hover:bg-[#38454F] max-sm:w-60">
              Login
            </button>
          </Link>
        </div>
        <div className="flex flex-row justify-center gap-2 mb-[3rem]">
          <p className="text-base text-[#565872]">Don't have an account yet?</p>
          <a href="" className="text-base text-[#0c7c3f] font-bold">
            Signup
          </a>
        </div>
      </div>
    </div>
  );
}

export default Login;
