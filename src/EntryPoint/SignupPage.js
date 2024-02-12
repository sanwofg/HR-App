import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { GoogleLogin } from "@react-oauth/google";
import { Link } from "react-router-dom";

function SignUp({ change }) {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email format").required("Required"),
      password: Yup.string()
        .min(8, "Must be at least 8 characters")
        .required("Required")
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
          "Password must contain atleast one uppercase, one lowercase, one digit, and one special character"
        ),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Password must match")
        .required("Required"),
    }),

    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

 return (
    <div className="w-[25rem] h-[35rem] bg-[white] shadow-lg flex flex-col absolute justify-around items-center m-auto rounded-[10px] py-5 max-sm:w-[20rem]">
      <h1 className="text-2xl text-primary font-semibold font-asset">
        NAIJA 01
      </h1>
      <div>
        <form
          onSubmit={formik.handleSubmit}
          className=" w-80 h-auto flex flex-col justify-between gap-8 "
        >
          <div>
            <input
              className="h-10 px-3 py-2 bg-white border-2 border-[#0c7c3f] shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none placeholder:italic placeholder:text-base placeholder:text-[#565872]  placeholder:font-sans focus:border-sky-500 focus:ring-sky-500 block w-80 rounded sm:text-sm focus:ring-1 max-sm:w-60 max-sm:ml-10"
              name="email"
              type="email"
              placeholder="Email"
              {...formik.getFieldProps("email")}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="text-xs text-[red]">{formik.errors.email}</div>
            ) : null}
          </div>
          <div className="">
            <input
              className="h-10 px-3 py-2 bg-white border-2 border-[#0c7c3f] shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none placeholder:italic placeholder:text-base placeholder:text-[#565872]  focus:border-sky-500 focus:ring-sky-500 block w-80 rounded sm:text-sm focus:ring-1 max-sm:w-60 max-sm:ml-10"
              name="password"
              type="text"
              placeholder="Password"
              {...formik.getFieldProps("password")}
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="text-xs text-[red]">{formik.errors.password}</div>
            ) : null}
          </div>
          <div>
            <input
              className="h-10 px-3 py-2 bg-white border-2 border-[#0c7c3f] shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none placeholder:italic placeholder:text-base placeholder:font-sans placeholder:text-[#565872] block w-80 rounded sm:text-sm focus:ring-1 max-sm:w-60 max-sm:ml-10"
              name="password"
              type="text"
              placeholder="Confirm password"
              {...formik.getFieldProps("confirm_password")}
            />
            {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
              <div className="text-xs text-[red]">
                {formik.errors.confirmPassword}
              </div>
            ) : null}
          </div>
        </form>
      </div>
      <div className="max-sm:ml-20">
        {/* <Link to={"/registration"}> */}
          <button
            type="submit"
            onClick={change}
            className="bg-[#0c7c3f] text-[white] h-12 w-[20rem] text-xl font-semibold rounded font-[serif] cursor-pointer border-[1px] border-[#d2dbef] hover:bg-[#d2dbef] hover:text-[black] hover:bg-opacity-15 max-sm:w-60"
          >
            Create account
          </button>
        {/* </Link> */}
       
        <p className="font-sans text-xl text-[#565872] text-center max-sm:mr-16">
          or
        </p>

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
      <div className="flex flex-row justify-center gap-2">
        <p className="text-base text-[#565872]">Already have an account?</p>
        <span
          onClick={change}
          className="text-base text-[#0c7c3f] font-bold cursor-pointer"
        >
          Login
        </span>
      </div>
    </div>
  ); 
}

export default SignUp;
