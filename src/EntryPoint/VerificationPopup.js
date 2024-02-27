import React, { useEffect } from "react";
// import mailImg from "./assets/open-mail.png";
// import { Link } from "react-router-dom";
// import {useParams} from 'react-router-dom'

const SignupAuthentication = ({ onClose }) => {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onClose();
    }, 20000);

    // Clean up the timer when the component is unmounted
    return () => clearTimeout(timeoutId);
  }, [onClose]);

  return (
    <div className="flex justify-center align-middle h-[100vh] relative mb-10 text-[#0c7c3f] bg-[#ffffff] ">
      <div className="flex flex-col m-auto w-2/6  max-md:px-6 px-14 py-10 shadow-xl bg-[#ffffff] rounded-lg max-lg:w-2/3 max-sm:m-auto justify-center">
        <div className="items-center m-auto mb-2 mt-0 animate-bounce">
          {/* <img
            src={mailImg}
            height={100}
            width={100}
            alt="Email-icon"
            className="max-md:w-14 max-md:h-14"
          /> */}
        </div>
        <div>
          <p className="text-center text-2xl font-semibold mb-7 max-md:text-xl">
            {" "}
            Verify your email
          </p>

          <p className="text-xs text-center max-sm:text-[10px]">
            We've sent a link to your email, kindly click on the link to verify
            your email address to activate your account.
          </p>

          {/* <Link to={"/resend_email"} className="text-center">
            <p className="text-xs text-center mt-5">
              <span className="text-[#00A76F] font-medium hover:underline duration-700 transition hover:cursor-pointer ">
                Click here
              </span>{" "}
              if you didn't receive an email
            </p>
          </Link> */}
        </div>

        <div></div>
      </div>
    </div>
  );
};

export default SignupAuthentication;
