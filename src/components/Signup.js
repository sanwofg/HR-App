import React from "react";
import google from './Assets/google.jpg'
import { Link } from "react-router-dom";

export const Signup = () => {
  return (
    <div className="bg-white m-auto flex flex-row justify-center w-full">
      <div className="bg-white w-[100%] h-[1024px] relative">
        <div className="flex w-[full] h-[89px] items-center justify-center gap-[49px] px-[61px] py-[12px]  bg-[#0c7c3f]">
          <div className="flex w-[79px] h-[50.6px] items-center justify-center pl-0 pr-[26px] py-0 relative">
            <div className="relative w-[53px] h-[20px] [font-family:'Open_Sans-Bold',Helvetica] font-bold text-white text-[17px] tracking-[0] leading-[normal] whitespace-nowrap">
              Home
            </div>
          </div>
          <div className="flex w-[104px] h-[50.6px] items-center justify-center pl-[15px] pr-[26px] py-0 relative">
            <div className="relative w-[63px] h-[20px] [font-family:'Open_Sans-Bold',Helvetica] font-bold text-white text-[17px] tracking-[0] leading-[normal] whitespace-nowrap">
              Course
            </div>
          </div>
          <div className="flex w-[91px] h-[50.6px] items-center justify-center pl-[15px] pr-[26px] py-0 relative">
            <div className="relative w-[50px] h-[20px] [font-family:'Open_Sans-Bold',Helvetica] font-bold text-white text-[17px] tracking-[0] leading-[normal] whitespace-nowrap">
              Pages
            </div>
          </div>
          <div className="flex w-[81px] h-[50.6px] items-center justify-center pl-[15px] pr-[26px] py-0 relative">
            <div className="relative w-[40px] h-[20px] [font-family:'Open_Sans-Bold',Helvetica] font-bold text-white text-[17px] tracking-[0] leading-[normal] whitespace-nowrap">
              Blog
            </div>
          </div>
          <div className="flex w-[111px] h-[50.6px] items-center justify-center pl-[15px] pr-[26px] py-0 relative">
            <div className="relative w-[70px] h-[20px] [font-family:'Open_Sans-Bold',Helvetica] font-bold text-white text-[17px] tracking-[0] leading-[normal] whitespace-nowrap">
              Contact
            </div>
          </div>
          <div className="flex w-[74px] h-[20px] items-center justify-center pl-[20px] pr-0 py-0 relative">
            <div className="w-[54px] h-[20px] relative mt-[-1.00px] [font-family:'Open_Sans-SemiBold',Helvetica] font-semibold text-white text-[16px] tracking-[0] leading-[normal]">
              Sign In
            </div>
          </div>
          <div className="flex flex-col w-[130px] h-[45px] items-start pl-[20px] pr-0 py-0 relative">
            <div className="flex w-[110px] h-[45px] items-center justify-center px-[25px] py-0 relative bg-black rounded-[4px]">
              <div className="w-[60px] h-[45px] relative pt-3 [font-family:'Open_Sans-SemiBold',Helvetica] font-semibold text-white text-sm text-center tracking-[0] leading-[normal]">
                Sign Up
              </div>
            </div>
          </div>
          <div className="flex w-[45px] h-[45px] items-center justify-center relative border border-solid border-[#ffffffcc]">
            <div className="relative w-[16px] h-[16px]" />
          </div>
        </div>
        <div className="flex flex-col w-[540px] h-[552px] items-center justify-center gap-[20px] px-[50px] py-[20px] absolute top-[255px] ml-[30%] bg-[#f2f3f5]">
        <p className="text-[#0c7c3f] font-bold text-2xl ">HR-APP</p>
          <div className="flex flex-col w-[470px] h-[78px] items-start px-[15px] py-0 relative ml-[-15.00px] mr-[-15.00px] rounded-[4px] border border-solid border-[#084c9401]">
            <input placeholder="Email" className="flex w-[444px] h-[62px] text-black items-center justify-center px-[20px] py-[10px] relative  rounded-[4px] border-2 border-solid border-[#38454f]">
              {/* <div className="relative w-[400px] h-[54px] text-start pt-[16px] [font-family:'Open_Sans-SemiBold',Helvetica] font-semibold text-[#565872] text-[16px] tracking-[0] leading-[normal]">
                Email
              </div> */}
            </input>
          </div>
          <div className="flex flex-col w-[470px] h-[78px] items-start px-[15px] py-0 relative ml-[-15.00px] mr-[-15.00px]">
            
            <input placeholder="Password" className="flex w-[444px]  h-[62px] items-center justify-center px-[20px] py-[2px] relative mt-[-2.00px] ml-[-2.00px] mr-[-2.00px] text-black rounded-[4px] border-2 border-solid border-[#38454f]">
              {/* <div className="relative w-[400px] h-[54px] [font-family:'Open_Sans-SemiBold',Helvetica] font-semibold text-[#565872] text-[16px] tracking-[0] leading-[normal]">
                Password
              </div> */}
            </input>
          </div>
          <div className="flex w-[440px] h-[58px] items-start gap-[47px] relative">
            <div className="flex w-[188px] h-[56.4px] items-center justify-center gap-[10px] p-[15px] relative">
              <input type="radio"  color="green" className="relative w-[16px] -mt-2 h-[16px] bg-white rounded-[8px]" />
              <div className="relative w-[115px] h-[24px] [font-family:'Open_Sans-SemiBold',Helvetica] font-semibold text-[#565872] text-sm tracking-[0] leading-[normal]">
                Remember me
              </div>
            </div>
            <div className="flex w-[188px] h-[56.4px] items-center justify-center p-[15px] relative">
              <a href="" className="relative w-[140px] h-[26px] mt-[-0.80px] [font-family:'Open_Sans-SemiBold',Helvetica] font-semibold text-[#0c7c3f] text-sm tracking-[0] leading-[normal]">
                Forgot Password?
              </a>
            </div>
          </div>
          <div className="flex w-[440px] h-[55px] items-center justify-center px-[36px] py-0 relative bg-[#0c7c3f] rounded-[4px]">

            <Link to={'/dashboard'}>
              <button className="relative w-[368px] h-[55px] mt-[-1.00px] [font-family:'Open_Sans-SemiBold',Helvetica] font-semibold text-white text-[16px] text-center tracking-[0] leading-[normal]">
                Login
              </button>
            </Link>
          </div>
          <div className="flex w-[440px] h-[55px] items-center justify-center gap-[20px] px-[36px] py-[4px] relative rounded-[4px] border border-solid border-[#343a40]">
            {/* <div className="inline-flex items-center justify-center gap-[10px] relative flex-[0_0_auto]  bg-cover bg-[50%_50%]">
              <div className="relative w-[30px] h-[30px]" />
            </div> */}
            <img src={google} height={20} width={20}/>
            <div className="inline-flex items-center justify-center gap-[10px] relative flex-[0_0_auto]">
              <button className="relative w-fit mt-[-1.00px] [font-family:'Open_Sans-SemiBold',Helvetica] font-semibold text-[#38454f] text-[16px] text-center tracking-[0] leading-[normal]">
                Continue with Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};export default Signup
