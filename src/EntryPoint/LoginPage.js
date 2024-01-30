import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./loginPage.css";

function LoginPage() {
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
    <div>
      <div className="lgp-body">
        <h1 className="lgp-title">HR APP</h1>
        <form onSubmit={formik.handleSubmit} className="lgp-form">
          <input
            name="email"
            type="email"
            class="lgp-input"
            placeholder="Email"
            {...formik.getFieldProps("email")}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="sp-formik">{formik.errors.email}</div>
          ) : null}
          <input
            name="password"
            type="password"
            class="lgp-input"
            placeholder="Password"
            {...formik.getFieldProps("password")}
          />
          {formik.touched.password && formik.errors.password ? (
            <div className="sp-formik">{formik.errors.password}</div>
          ) : null}
        </form>
        <div className="lgp-radio">
          <input type="checkbox" />
          <p id="lgp-rem">Remember me</p>
          <a id="lgp-for" href="">
            Forgot password?
          </a>
        </div>
        <div className="lgp-btn">
          <button className="lgp-btn" type="submit">
            Login
          </button>
        </div>
        <div className="lgp-account">
          <p>Don't have an account yet?</p>
          <a id="lgp-signup" href="/signup">
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
