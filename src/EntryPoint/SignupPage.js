import React, { useState } from "react";
import "./signupPage.css";
import { useFormik } from "formik";
import * as Yup from "yup";

function SignupPage() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .min(8, "Must be atleast 8  characters")
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

          <input
            name="Password"
            type="password"
            class="lgp-input"
            placeholder="Confirm password"
            {...formik.getFieldProps("confirmPassword")}
          />
          {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
            <div className="sp-formik">{formik.errors.confirmPassword}</div>
          ) : null}
        </form>
        <div className="lgp-btn">
          <button className="lgp-btn" type="submit">
            Create account
          </button>
        </div>
        <div className="lgp-account">
          <p>Already have an account?</p>
          <a id="lgp-signup" href="/login">
            Login
          </a>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;
