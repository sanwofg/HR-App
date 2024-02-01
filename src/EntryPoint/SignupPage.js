import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

function SignUp() {
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
    <div className="h-screen flex items-center justify-center max-sm:pl-32">
      <div className="w-[25rem] h-[32rem] bg-[white] shadow-lg flex flex-col justify-around items-center m-auto rounded-[10px] gap-12">
        <h1 className="text-2xl text-primary font-semibold mt-[2rem]">
          HR APP
        </h1>
        <form
          onSubmit={formik.handleSubmit}
          className=" w-80 h-20 flex flex-col justify-between gap-5 mb-[4rem] "
        >
          <input
            className="h-12 mt-1 px-3 py-2 bg-white border-2 border-[#0c7c3f] shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none placeholder:italic placeholder:text-base placeholder:text-[#565872]  placeholder:font-sans focus:border-sky-500 focus:ring-sky-500 block w-80 rounded sm:text-sm focus:ring-1 max-sm:w-60 max-sm:ml-10"
            name="email"
            type="email"
            placeholder="Email"
            {...formik.getFieldProps("email")}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="text-xs text-[red] mt-[-1.4rem]">
              {formik.errors.email}
            </div>
          ) : null}
          <input
            className="h-12 mt-1 px-3 py-2 bg-white border-2 border-[#0c7c3f] shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none placeholder:italic placeholder:text-base placeholder:text-[#565872]  focus:border-sky-500 focus:ring-sky-500 block w-80 rounded sm:text-sm focus:ring-1 max-sm:w-60 max-sm:ml-10"
            name="password"
            type="text"
            placeholder="Password"
            {...formik.getFieldProps("password")}
          />
          {formik.touched.password && formik.errors.password ? (
            <div className="text-xs text-[red] mt-[-1.4rem]">
              {formik.errors.password}
            </div>
          ) : null}
          <input
            className="h-12 mt-1 px-3 py-2 bg-white border-2 border-[#0c7c3f] shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none placeholder:italic placeholder:text-base placeholder:font-sans placeholder:text-[#565872] block w-80 rounded sm:text-sm focus:ring-1 max-sm:w-60 max-sm:ml-10"
            name="password"
            type="text"
            placeholder="Confirm password"
            {...formik.getFieldProps("confirm_password")}
          />
          {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
            <div>{formik.errors.confirmPassword}</div>
          ) : null}
        </form>
        <div>
          <button
            type="submit"
            className="bg-[#0c7c3f] text-[white] h-12 w-[20rem] mt-6 text-xl font-semibold rounded cursor-pointer hover:bg-[#38454F] max-sm:w-60"
          >
            Create account
          </button>
        </div>
        <div className="flex flex-row justify-center gap-2 mb-[3rem]">
          <p className="text-base text-[#565872]">Already have an account?</p>
          <a href="" className="text-base text-[#0c7c3f] font-bold">
            Login
          </a>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
