// import React, {useState} from "react";
// import DatePicker from "react-datepicker"
// import "react-datepicker/dist/react-datepicker.css"
// import bgimg from "./Assets/frame372.png"
// import samplelogo from "./Assets/frame375.png"

// function App(props) {

//   // Adding state variables to fields
//   const [fullName, setFullName] = useState("");
//   const [dob, setDob] = useState("");
//   const [selectedDob, setSelectedDob] = useState(null);
//   // const [gender, setGender] = useState("");
//   const [selectedGender, setSelectedGender] = useState("");
//   const [selectedLga, setSelectedLga] = useState("");
//   const [selectedState, setSelectedState] = useState("");
//   const [selectedAvailableIdCard, setSelectedAvailableIdCard] = useState("");
//   const [selectedHighestQualification, setSelectedHighestQualification] = useState("");
//   const [selectedEmploymentStatus, setSelectedEmploymentStatus] = useState("");
//   const [selectedPreferredCourse, setSelectedPreferredCourse] = useState("");
//   const [selectedHearAboutUs, setSelectedHearAboutUs] = useState("");
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [nin, setNIN] = useState("");
//   const [isTermsChecked, setIsTermsChecked] = useState(false);

// // Dropdown Variables
//   const [isGenderDropdownOpen, setIsGenderDropdownOpen] = useState(false);
//   const [isLgaDropdownOpen, setIsLgaDropdownOpen] = useState(false);
//   const [isStateDropdownOpen, setIsStateDropdownOpen] = useState(false);
//   const [isAvailableIdCardDropdownOpen, setIsAvailableIdCardDropdownOpen] = useState(false);
//   const [isHighestQualificationDropdownOpen, setIsHighestQualificationDropdownOpen] = useState(false);
//   const [isEmploymentStatusDropdownOpen, setIsEmploymentStatusDropdownOpen] = useState(false);
//   const [isPreferredCourseDropdownOpen, setIsPreferredCourseDropdownOpen] = useState(false);
//   const [isHearAboutUsDropdownOpen, setIsHearAboutUsDropdownOpen] = useState(false);

   
//   // Adding state variables for field errors
//   const [fullNameError, setFullNameError] = useState("");
//   const [dobError, setDobError] = useState("");
//   const [genderError, setGenderError] = useState("");
//   const [phoneNumberError, setPhoneNumberError] = useState("");
//   const [ninError, setNINError] = useState("");

//   // Dropdown options
//   const genderOptions = ["Male", "Female"];
//   const idCardOptions = ["Passport", "Driver's Licence", "National ID Card", "Permanent Voter's Card"];
//   const eduQualificationOptions = ["SSCE", "Bachelor's Degree", "Master's Degree", "PhD"];
//   const employmentOptions = ["Unemployed", "Self-employed", "Under-employed", "Employed"];
//   const preferredCourseOptions = ["Software Development/Testing", "Data Analysis", "Digital Marketing", "UI/UX Design", "Machine Learning/Automation"]
//   const aboutusOptions = ["Social Media", "Internet Ad", "Friend/Colleague", "Other means"]

//   const handleBlur = (field, value) => {
//     if (!value.trim()) {
//       switch (field) {
//         case "fullName":
//           setFullNameError("*This is a required field.");
//           break;
//         // case "dob":
//         //   setDobError("*This is a required field.");
//         //   break;
//         // case "gender":
//         //   setGenderError("*This is a required field.");
//         //   break;
//         default:
//           break;
//         }
//     }
//     else {
//       switch (field) {
//         case "fullName":
//           setFullNameError("");
//           break;
//         case "dob":
//           setDobError("");
//           break;
//         case "gender":
//           setGenderError("");
//           break;
//         default:
//           break;
//         }

//     }
//   }

//   const handleGenderSelect = (gender) => {
//     setSelectedGender(gender);
//     setIsGenderDropdownOpen(false);
//   };

//   const handleLgaSelect = (lga) => {
//     setSelectedLga(lga);
//     setIsLgaDropdownOpen(false);
//   };

//   const handleStateSelect = (state) => {
//     setSelectedState(state);
//     setIsStateDropdownOpen(false);
//   };

//   const handleAvailableCardSelect = (availableidcard) => {
//     setSelectedAvailableIdCard(availableidcard);
//     setIsAvailableIdCardDropdownOpen(false);
//   };

//   const handleHighestQualificationSelect = (highestqualification) => {
//     setSelectedHighestQualification(highestqualification);
//     setIsHighestQualificationDropdownOpen(false);
//   };

//   const handleEmploymentStatusSelect = (employmentstatus) => {
//     setSelectedEmploymentStatus(employmentstatus);
//     setIsEmploymentStatusDropdownOpen(false);
//   };

//   const handlePreferredCourseSelect = (preferredcourse) => {
//     setSelectedPreferredCourse(preferredcourse);
//     setIsPreferredCourseDropdownOpen(false);
//   };

//   const handleHearAboutUsSelect = (hearaboutus) => {
//     setSelectedHearAboutUs(hearaboutus);
//     setIsHearAboutUsDropdownOpen(false);
//   };

//   const handleDobSelect = (value) => {
//     setSelectedDob(value);
//     setDob(value);
//   };

//   const handlePhoneNumberChange = (e) => {
//     const input = e.target.value;
//     if (/^\d*$/.test(input) && input.length <= 11) {
//       setPhoneNumber(input);
//       setPhoneNumberError("");
//     }
//     else 
//     {
//       setPhoneNumberError("11 digits are required.");
//     }
//   };

//   const handleNINChange = (e) => {
//     const input = e.target.value;
//     if (/^\d*$/.test(input) && input.length <= 11) {
//       setNIN(input);
//       setNINError("");
//     }
//     else
//     {
//       setNINError("11 digits are required.");
//     }
//   };

// // justify between
//   return (
//     <div className="flex flex-col md:flex-row w-full">

//       {/* Background Image */}
//       <div className="lg:w-1/2 fixed">
//         <img src={bgimg} className="h-screen w-full object-cover sm:bg-opacity-50" alt="Background-image"></img>
//       </div>

//       {/* Registration Form */}
//       <div className="w-full md:w-1/2 lg:w-1/2 mx-auto lg:ml-[50%] justify-center shadow-sm bg-white flex flex-col px-10 py-11 md:max-md:px-5 z-10">
//         <div className="flex justify-center ml-2">
//           <img src={samplelogo} className="lg:hidden h-10 w-48" alt="logo"></img>
//         </div>
//         <div className="text-green-700 text-center text-3xl font-bold mt-2.5 mx-5 max-md:max-w-full max-md:mr-2.5">
//           Let's get you registered.
//         </div>

//       {/* Full Name Section */}

//       <div className="text-black text-lg mt-11 max-md:max-w-full max-md:mt-10">
//         Full Name (as it appears in your documents)
//           <input className={`w-full items-center border flex shrink-0 h-[44px] py-2 flex-col max-md:max-w-full mt-2 pl-5 rounded-xl ${fullNameError ? 'border-red-500' : 'border-solid border-green-700'}`}
//             type="text" 
//             value={fullName} 
//             onChange={(e)=> setFullName(e.target.value)}
//             onBlur={() => handleBlur("fullName", fullName)}
//             placeholder="Enter your full name"
//           />
//         {fullNameError && <p className="text-red-500 mt-1">{fullNameError}</p>}
//       </div>
      
//        {/* Date of Birth (DOB) & Gender Sections */}
//       <div className="mt-6 max-md:max-w-full">
//         <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
//             <div className="items-stretch grow flex flex-col max-md:max-w-full lg:w-1/2 max-md:mt-6">
//               <div className="text-black text-lg font-semibold max-md:max-w-full">Date of Birth</div>
//               <div className="items-stretch border flex justify-between h-[44px] gap-0 mt-2 px-6 py-2 rounded-xl border-solid border-green-700 max-md:max-w-full max-md:flex-wrap max-md:px-5">
//                 <div className="text-black text-lg grow">{}
//                   <DatePicker selected={dob} onChange={(date) => handleDobSelect(date)}
//                   placeholderText= "MM/DD/YYYY"/>
//                 </div>
//               </div> 
//             </div>
       
//             <div className="items-stretch grow flex flex-col max-md:max-w-full lg:w-1/2 max-md:mt-6">
//               <div className="text-black text-lg font-semibold max-md:max-w-full">Gender</div>
//               <div 
//                 className="items-stretch border flex justify-between gap-0 mt-2 px-6 py-2 rounded-xl h-[44px] border-solid border-green-700 max-md:max-w-full max-md:flex-wrap max-md:px-5"
//                 onClick={() => setIsGenderDropdownOpen(!isGenderDropdownOpen)}>
//                 <div className="text-black text-lg grow">{selectedGender || "Specify"}</div>
//                 <img
//                   loading="lazy"
//                   src="https://cdn.builder.io/api/v1/image/assets/TEMP/7ce047be0e562e64bf8a16c54af587005b102e240974d41a4f1bfbdf3284720b?"
//                   className="aspect-[2] object-contain object-center w-[22px] fill-black shrink-0 my-auto"
//                   onClick={() => setIsGenderDropdownOpen(!isGenderDropdownOpen)}
//                 />
//               </div>
//               {isGenderDropdownOpen && (
//                 <div className="flex flex-col mt-2 border border-solid border-green-700 rounded-md">
//                   {genderOptions.map((option) => (
//                     <div key={option} className="p-2 cursor-pointer hover:bg-gray-200" onClick={() => handleGenderSelect(option)}>
//                       {option}
//                     </div>
//                   ))}
//                 </div>
//               )}
//               {/* {selectedGender && (<p className="text-green-700 mt-1">Selected Gender: {selectedGender}</p>)} */}
//             </div>
//         </div>
//       </div>

//       {/* Phone Number & NIN Section*/}
//       <div className="mt-6 max-md:max-w-full">
//         <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
//             <div className="items-stretch grow flex flex-col max-md:max-w-full lg:w-1/2 max-md:mt-6">
//               <div className="text-black text-lg font-semibold max-md:max-w-full">Phone Number</div>
//               <input 
//                 className={`text-black text-lg justify-center border mt-2 pl-6 py-2 rounded-xl h-[44px] border-solid ${
//                 phoneNumberError ? "border-red-500" : " border-green-700"} items-start max-md:max-w-full max-md:px-5`}
//                 type="number"
//                 value={phoneNumber}
//                 onChange={handlePhoneNumberChange}
//                 placeholder="08012345678"  
//               />
//               {phoneNumberError && (
//                 <p className="text-red-500 mt-1">{phoneNumberError}</p>
//               )}
//             </div>

//             <div className="items-stretch flex grow flex-col max-md:max-w-full max-md:mt-6 lg:w-1/2">
//               <div className="text-black text-lg font-semibold max-md:max-w-full">NIN</div>
//               <input className="text-black text-lg justify-center border mt-2 pl-6 py-2 rounded-xl h-[44px] border-solid border-green-700"
//                 type="number"
//                 value={nin}
//                 onChange={handleNINChange}
//                 placeholder="Enter NIN"  
//               />
//               {ninError && (
//                 <p className="text-red-500 mt-1">{ninError}</p>
//               )}
//             </div>
//         </div>
//       </div>

//       {/* Address Section */}
//       <div className="text-black text-lg font-semibold mt-6 max-md:max-w-full">
//         Contact Address
//       </div>
//       <div className="items-stretch h-[44px] flex justify-between gap-5 mt-2 max-md:max-w-full max-md:flex-wrap">
//         {/* Apartment Field */}
//         <input className="text-black text-lg justify-center items-stretch border grow px-6 py-2 rounded-xl border-solid border-green-700 max-md:max-w-full max-md:px-5"
//           placeholder="Apartment"
//           type="text">
//         </input>

//          {/* Street Name Field */}
//         <input className="text-black text-lg justify-center items-stretch border grow px-6 py-2 rounded-xl border-solid border-green-700 max-md:max-w-full max-md:px-5"
//           placeholder="Street Name"
//           type="text">
//         </input>
//       </div>

//        {/* City/Town Field */}
//       <input 
//         type="text"
//         placeholder="City/Town"
//         className="text-black text-lg justify-center h-[44px] items-stretch border mt-6 px-6 py-2 rounded-xl border-solid border-green-700 max-md:max-w-full max-md:px-5">
//       </input>

      
//       <div className="items-stretch flex justify-between gap-5 mt-6 max-md:max-w-full max-md:flex-wrap">

//         <div className="flex items-stretch border justify-between gap-0 mt-2 px-6 py-2 w-full rounded-xl border-solid border-green-700 max-md:max-w-full max-md:flex-wrap lg:w-1/2 max-md:px-5">
//           <input 
//             type="text"
//             placeholder="LGA"
//             className="text-black text-lg grow h-[44px]">
//           </input>
//           <img
//             loading="lazy"
//             src="https://cdn.builder.io/api/v1/image/assets/TEMP/64462fc9619791bf8b68c2def239fa154ee59f0442c07837798cfb86fe3dd443?"
//             className="aspect-[2.22] object-contain object-center w-[22px] fill-black shrink-0 my-auto"
//           />
//         </div>
  
//         <div className=" items-stretch border flex justify-between gap-0 mt-2 px-6 py-2 w-full rounded-xl border-solid border-green-700 max-md:max-w-full max-md:flex-wrap lg:w-1/2 max-md:px-5">
//           <input
//               type="text"
//               placeholder="State"
//               className="text-black text-lg grow h-[44px]"></input>
//           <img
//             loading="lazy"
//             src="https://cdn.builder.io/api/v1/image/assets/TEMP/64462fc9619791bf8b68c2def239fa154ee59f0442c07837798cfb86fe3dd443?"
//             className="aspect-[2.22] object-contain object-center w-[22px] fill-black shrink-0 my-auto"
//           />
//         </div>
//       </div>

//       {/* SUPPORTING DOCUMENTS SECTION */}
//       <div className="text-black text-lg font-semibold mt-6 max-md:max-w-full">
//         Supporting Documents
//       </div>

//       <div className="justify-between items-stretch border flex gap-0 mt-2 px-6 py-2 rounded-xl h-[44px] border-solid border-green-700 max-md:max-w-full max-md:flex-wrap max-md:px-5"
//         onClick={() => setIsAvailableIdCardDropdownOpen(!isAvailableIdCardDropdownOpen)}>
//           <div className="justify-center text-black text-lg grow max-md:max-w-full">{selectedAvailableIdCard || "Select Available ID Card"}</div>
//           <img
//             loading="lazy"
//             src="https://cdn.builder.io/api/v1/image/assets/TEMP/78983c65a313e2c3f761e3f4c9343affe4d4ffc117001d53e4b2bcb692b4555f?"
//             className="aspect-[2.22] object-contain object-center w-[22px] fill-black shrink-0 my-auto"
//             onClick={() => setIsAvailableIdCardDropdownOpen(!isAvailableIdCardDropdownOpen)}
//           />
//       </div>
//       {isAvailableIdCardDropdownOpen && (
//         <div className="flex flex-col mt-2 border border-solid border-green-700 rounded-md">
//           {idCardOptions.map((option) => (
//             <div key={option} className="p-2 cursor-pointer hover:bg-gray-200" onClick={() => handleAvailableCardSelect(option)}>
//               {option}
//             </div>
//           ))}
//         </div>
//       )}
      
//       <div className="text-black text-lg font-semibold mt-2 max-md:max-w-full">Upload ID Card</div>
//       <div className="items-stretch border flex flex-col px-6 rounded-xl border-solid border-green-700 max-md:max-w-full max-md:px-5">
//         <form>
//           {/* Upload front of selected ID Card */}
//           <div>
//             <div className="text-black text-lg font-semibold mt-6 max-md:max-w-full">Upload front of selected ID Card</div>
//             <div className="items-stretch border flex justify-between gap-2.5 rounded-xl border-solid border-green-700 max-md:max-w-full max-md:flex-wrap">
//               <input
//                 className="text-black text-center text-lg font-bold grow my-auto max-md:max-w-full"
//                 type="file"
//               />
//             </div>
//           </div>

//           {/* Upload back of selected ID Card */}
//           <div className="mb-6">
//             <div className="text-black text-lg font-semibold mt-6 max-md:max-w-full">Upload back of selected ID Card</div>
//             <div className="items-stretch border flex justify-between gap-2.5 rounded-xl border-solid border-green-700 max-md:max-w-full max-md:flex-wrap">
//               <input
//                 className="text-black text-center text-lg font-bold grow my-auto max-md:max-w-full"
//                 type="file"
//               />
//             </div>
//           </div>
//         </form>

//       </div>
//       <div className="text-black text-lg font-semibold mt-6 max-md:max-w-full">
//         Upload Passport Photograph
//       </div>
//       <div className="items-stretch border flex flex-col justify-center mt-2 px-6 py-2 rounded-xl h-[44px] border-solid border-green-700 max-md:max-w-full max-md:px-5">
//         <div className="items-stretch border flex justify-between gap-2.5 rounded-xl border-solid border-green-700 max-md:max-w-full max-md:flex-wrap">
//           <input className="text-black text-center text-lg font-bold grow my-auto max-md:max-w-full"
//             type="file">
//           </input>
         
//         </div>
//       </div>

//       {/* HIGHEST QUALIFICATION SECTION */}
//       <div className="text-black text-lg font-semibold mt-6 max-md:max-w-full">
//         Highest Educational Qualification
//       </div>

//       <div 
//         className="justify-between items-stretch border flex gap-0 mt-2 px-6 py-2 h-[44px] rounded-xl border-solid border-green-700 max-md:max-w-full max-md:flex-wrap max-md:px-5"
//         onClick={() => setIsHighestQualificationDropdownOpen(!isHighestQualificationDropdownOpen)}>
//         <div className="justify-center text-black text-lg grow max-md:max-w-full">{selectedHighestQualification || "Select most recent qualification"}</div> 
//           <img
//             loading="lazy"
//             src="https://cdn.builder.io/api/v1/image/assets/TEMP/4035bd7c4c31a69d81d69f1b668cbec517add3e495421449b948b0d2d0baf315?"
//             className="aspect-[2.22] object-contain object-center w-[22px] fill-black shrink-0 my-auto"
//             onClick={() => setIsHighestQualificationDropdownOpen(!isHighestQualificationDropdownOpen)}
//           />
//       </div>

//       {isHighestQualificationDropdownOpen && (
//         <div className="flex flex-col mt-2 border border-solid border-green-700 rounded-md">
//           {eduQualificationOptions.map((option) => (
//             <div key={option} className="p-2 cursor-pointer hover:bg-gray-200" onClick={() => handleHighestQualificationSelect(option)}>
//               {option}
//             </div>
//           ))}
//         </div>
//       )}

//       {/* EMPLOYMENT STATUS */}
//       <div className="text-black text-lg font-semibold mt-6 max-md:max-w-full">
//         Employment Status
//       </div>
//       <div className="justify-between items-stretch border flex gap-0 mt-2 px-6 py-2 rounded-xl h-[44px] border-solid border-green-700 max-md:max-w-full max-md:flex-wrap max-md:px-5"
//       onClick={() => setIsEmploymentStatusDropdownOpen(!isEmploymentStatusDropdownOpen)}>
//         <div className="justify-center text-black text-lg grow max-md:max-w-full">{selectedEmploymentStatus || "Select employment status"}</div>
//         <img
//           loading="lazy"
//           src="https://cdn.builder.io/api/v1/image/assets/TEMP/ec9a63222cecbfa03295f3268842b57cbec0a4ecbfbb20c1d6f16fa6a6f699f1?"
//           className="aspect-[2.22] object-contain object-center w-[22px] fill-black shrink-0 my-auto"
//           onClick={() => setIsEmploymentStatusDropdownOpen(!isEmploymentStatusDropdownOpen)}
//         />
//       </div>
//       {isEmploymentStatusDropdownOpen && (
//         <div className="flex flex-col mt-2 border border-solid border-green-700 rounded-md">
//           {employmentOptions.map((option) => (
//             <div key={option} className="p-2 cursor-pointer hover:bg-gray-200" onClick={() => handleEmploymentStatusSelect(option)}>
//               {option}
//             </div>
//           ))}
//         </div>
//       )}

//       {/* PREFERRED COURSE */}
//       <div className="text-black text-lg font-semibold mt-6 max-md:max-w-full">
//         Preferred Course
//       </div>
//       <div className="justify-center border flex mt-2 pl-6 pr-6 py-2 h-[44px] rounded-xl border-solid border-green-700 items-end max-md:max-w-full max-md:px-5"
//       onClick={() => setIsPreferredCourseDropdownOpen(!isPreferredCourseDropdownOpen)}>
//          <div className="justify-center text-black text-lg grow max-md:max-w-full">{selectedPreferredCourse || "Select preferred course"}</div>
//         <img
//           loading="lazy"
//           src="https://cdn.builder.io/api/v1/image/assets/TEMP/1066169dc897401801692b8d9e53b82914772ef8949a81583d7ca1b2ff6b2e67?"
//           className="aspect-[2.22] object-contain object-center w-[22px] fill-black shrink-0 my-auto"
//           onClick={() => setIsPreferredCourseDropdownOpen(!isPreferredCourseDropdownOpen)}
//         />
//       </div>
      
//       {isPreferredCourseDropdownOpen && (
//         <div className="flex flex-col mt-2 border border-solid border-green-700 rounded-md">
//           {preferredCourseOptions.map((option) => (
//             <div key={option} className="p-2 cursor-pointer hover:bg-gray-200" onClick={() => handlePreferredCourseSelect(option)}>
//               {option}
//             </div>
//           ))}
//         </div>
//       )}

//       <div className="text-black text-lg font-semibold mt-6 max-md:max-w-full">
//         Why choose preferred course ?
//       </div>
//       <input className="text-black text-lg items-stretch border mt-2 pt-3.5 pb-24 px-6 rounded-xl border-solid border-green-700 max-md:max-w-full max-md:pb-10 max-md:px-5"
//               placeholder="Why have you chosen this course?"
//               type="text">
        
//       </input>
//       <div className="text-black text-lg font-semibold mt-5 max-md:max-w-full">
//       How did you hear about us?
//       </div>
//       <div className="items-stretch border flex justify-between gap-0 h-[44px] px-6 py-2 rounded-xl border-solid border-green-700 max-md:max-w-full max-md:flex-wrap max-md:px-5"
//       onClick={() => setIsHearAboutUsDropdownOpen(!isHearAboutUsDropdownOpen)}>
//         <div className="text-black text-lg grow max-md:max-w-full">{selectedHearAboutUs || "Select a channel." }</div>
//         <img
//           loading="lazy"
//           src="https://cdn.builder.io/api/v1/image/assets/TEMP/c116a34fd5fd8ccbc3201e4339171848ff9d0550c7ac8c3c0cc9810c86f81d6d?"
//           className="aspect-[2.22] object-contain object-center w-[22px] fill-black shrink-0 my-auto"
//           onClick={() => setIsHearAboutUsDropdownOpen(!isHearAboutUsDropdownOpen)}
//         />
//       </div>

//       {isHearAboutUsDropdownOpen && (
//         <div className="flex flex-col mt-2 border border-solid border-green-700 rounded-md">
//           {aboutusOptions.map((option) => (
//             <div key={option} className="p-2 cursor-pointer hover:bg-gray-200" onClick={() => handleHearAboutUsSelect(option)}>
//               {option}
//             </div>
//           ))}
//         </div>
//       )}
    
//       <div className="justify-center text-black text-lg font-light max-md:max-w-full">
//         Information collected in this form will be used solely for the purpose of course enrollment.
//       </div>

//        {/* Terms and Conditions Section */}
//       <div className="items-stretch flex justify-between gap-4 pb-2.5 max-md:max-w-full max-md:flex-wrap">
//         <input 
//           type="checkbox"
//           className={`border ${isTermsChecked ? 'bg-green-700' : 'bg-white'}flex w-[30px] shrink-0 h-[30px] flex-col my-auto border-solid border-green-700`}
//           onClick={() => setIsTermsChecked(!isTermsChecked)} 
//           />
//         <p className="justify-center text-black text-lg font-light grow max-md:max-w-full">
//           I have read and agree to the terms and conditions.
//         </p>
//       </div>

//          {/* Submit Button */}
//       <button  className="text-white text-center text-xl text-uppercase justify-center items-center bg-green-700 self-center w-[200px] max-w-full px-8 py-2 rounded-xl max-md:px-5 cursor-pointer">
//         Click to Register
//       </button>
//       </div>
//     </div>
    
//   );
// }

// export default App;


import React, {useState} from "react";
import { useFormik } from "formik"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import bgimg from "./Assets/frame372.png"
import samplelogo from "./Assets/frame375.png"

function App(props) {

  // Adding state variables to fields
  const [fullName, setFullName] = useState("");
  const [dob, setDob] = useState("");
  const [selectedDob, setSelectedDob] = useState(null);
  // const [gender, setGender] = useState("");
  const [selectedGender, setSelectedGender] = useState("");
  const [selectedLga, setSelectedLga] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedAvailableIdCard, setSelectedAvailableIdCard] = useState("");
  const [selectedHighestQualification, setSelectedHighestQualification] = useState("");
  const [selectedEmploymentStatus, setSelectedEmploymentStatus] = useState("");
  const [selectedPreferredCourse, setSelectedPreferredCourse] = useState("");
  const [selectedHearAboutUs, setSelectedHearAboutUs] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [nin, setNIN] = useState("");
  const [isTermsChecked, setIsTermsChecked] = useState(false);

// Dropdown Variables
  const [isGenderDropdownOpen, setIsGenderDropdownOpen] = useState(false);
  const [isLgaDropdownOpen, setIsLgaDropdownOpen] = useState(false);
  const [isStateDropdownOpen, setIsStateDropdownOpen] = useState(false);
  const [isAvailableIdCardDropdownOpen, setIsAvailableIdCardDropdownOpen] = useState(false);
  const [isHighestQualificationDropdownOpen, setIsHighestQualificationDropdownOpen] = useState(false);
  const [isEmploymentStatusDropdownOpen, setIsEmploymentStatusDropdownOpen] = useState(false);
  const [isPreferredCourseDropdownOpen, setIsPreferredCourseDropdownOpen] = useState(false);
  const [isHearAboutUsDropdownOpen, setIsHearAboutUsDropdownOpen] = useState(false);

   
  // Adding state variables for field errors
  const [fullNameError, setFullNameError] = useState("");
  const [dobError, setDobError] = useState("");
  const [genderError, setGenderError] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");
  const [ninError, setNINError] = useState("");

  // Dropdown options
  const genderOptions = ["Male", "Female"];
  const idCardOptions = ["Passport", "Driver's Licence", "National ID Card", "Permanent Voter's Card"];
  const eduQualificationOptions = ["SSCE", "Bachelor's Degree", "Master's Degree", "PhD"];
  const employmentOptions = ["Unemployed", "Self-employed", "Under-employed", "Employed"];
  const preferredCourseOptions = ["Software Development/Testing", "Data Analysis", "Digital Marketing", "UI/UX Design", "Machine Learning/Automation"]
  const aboutusOptions = ["Social Media", "Internet Ad", "Friend/Colleague", "Other means"]

  const handleBlur = (field, value) => {
    if (!value.trim()) {
      switch (field) {
        case "fullName":
          setFullNameError("*This is a required field.");
          break;
        // case "dob":
        //   setDobError("*This is a required field.");
        //   break;
        // case "gender":
        //   setGenderError("*This is a required field.");
        //   break;
        default:
          break;
        }
    }
    else {
      switch (field) {
        case "fullName":
          setFullNameError("");
          break;
        case "dob":
          setDobError("");
          break;
        case "gender":
          setGenderError("");
          break;
        default:
          break;
        }

    }
  }

  const handleGenderSelect = (gender) => {
    setSelectedGender(gender);
    setIsGenderDropdownOpen(false);
  };

  const handleLgaSelect = (lga) => {
    setSelectedLga(lga);
    setIsLgaDropdownOpen(false);
  };

  const handleStateSelect = (state) => {
    setSelectedState(state);
    setIsStateDropdownOpen(false);
  };

  const handleAvailableCardSelect = (availableidcard) => {
    setSelectedAvailableIdCard(availableidcard);
    setIsAvailableIdCardDropdownOpen(false);
  };

  const handleHighestQualificationSelect = (highestqualification) => {
    setSelectedHighestQualification(highestqualification);
    setIsHighestQualificationDropdownOpen(false);
  };

  const handleEmploymentStatusSelect = (employmentstatus) => {
    setSelectedEmploymentStatus(employmentstatus);
    setIsEmploymentStatusDropdownOpen(false);
  };

  const handlePreferredCourseSelect = (preferredcourse) => {
    setSelectedPreferredCourse(preferredcourse);
    setIsPreferredCourseDropdownOpen(false);
  };

  const handleHearAboutUsSelect = (hearaboutus) => {
    setSelectedHearAboutUs(hearaboutus);
    setIsHearAboutUsDropdownOpen(false);
  };

  const handleDobSelect = (value) => {
    setSelectedDob(value);
    setDob(value);
  };

  const handlePhoneNumberChange = (e) => {
    const input = e.target.value;
    if (/^\d*$/.test(input) && input.length <= 11) {
      setPhoneNumber(input);
      setPhoneNumberError("");
    }
    else 
    {
      setPhoneNumberError("11 digits are required.");
    }
  };

  const handleNINChange = (e) => {
    const input = e.target.value;
    if (/^\d*$/.test(input) && input.length <= 11) {
      setNIN(input);
      setNINError("");
    }
    else
    {
      setNINError("11 digits are required.");
    }
  };

  const formik = useFormik({
    initialValues: {
      fullName: "", 
      dob: "",
      gender: "",
      phoneNumber: "",
      nin: "",
      availableidcard: "",
      highestqualification: "",
      employmentstatus: "",
      preferredcourse: "",
      hearaboutus: "",
      isTermsChecked: ""

    }
  })



  return (
    <div className="flex flex-col md:flex-row w-full">

      {/* Background Image */}
      <div className="lg:w-1/2 fixed">
        <img src={bgimg} className="h-screen w-full object-cover sm:bg-opacity-50" alt="Background-image"></img>
      </div>

      {/* Registration Form */}
      <div className="w-full md:w-1/2 lg:w-1/2 mx-auto lg:ml-[50%] justify-center shadow-sm bg-white flex flex-col px-10 py-11 md:max-md:px-5 z-10">
        <div className="flex justify-center ml-2">
          <img src={samplelogo} className="lg:hidden h-10 w-48" alt="logo"></img>
        </div>
        <div className="text-green-700 text-center text-3xl font-bold mt-2.5 mx-5 max-md:max-w-full max-md:mr-2.5">
          Let's get you registered.
        </div>

      {/* Full Name Section */}

      <div className="text-black text-lg mt-11 max-md:max-w-full max-md:mt-10">
        Full Name (as it appears in your documents)
          <input className={`w-full items-center border flex shrink-0 h-[44px] py-2 flex-col max-md:max-w-full mt-2 pl-5 rounded-xl ${fullNameError ? 'border-red-500' : 'border-solid border-green-700'}`}
            type="text" 
            value={formik.values.fullName} 
            onChange={formik.handleChange}
            onBlur={() => handleBlur("fullName", fullName)}
            placeholder="Enter your full name"
          />
        {fullNameError && <p className="text-red-500 mt-1">{fullNameError}</p>}
      </div>
      
       {/* Date of Birth (DOB) & Gender Sections */}
      <div className="mt-6 max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="items-stretch grow flex flex-col max-md:max-w-full lg:w-1/2 max-md:mt-6">
              <div className="text-black text-lg font-semibold max-md:max-w-full">Date of Birth</div>
              <div className="items-stretch border flex justify-between h-[44px] gap-0 mt-2 px-6 py-2 rounded-xl border-solid border-green-700 max-md:max-w-full max-md:flex-wrap max-md:px-5">
                <div className="text-black text-lg grow">{}
                  <DatePicker selected={dob} onChange={(date) => handleDobSelect(date)}
                  placeholderText= "MM/DD/YYYY"/>
                </div>
              </div> 
            </div>
       
            <div className="items-stretch grow flex flex-col max-md:max-w-full lg:w-1/2 max-md:mt-6">
              <div className="text-black text-lg font-semibold max-md:max-w-full">Gender</div>
              <div 
                className="items-stretch border flex justify-between gap-0 mt-2 px-6 py-2 rounded-xl h-[44px] border-solid border-green-700 max-md:max-w-full max-md:flex-wrap max-md:px-5"
                onClick={() => setIsGenderDropdownOpen(!isGenderDropdownOpen)}>
                <div className="text-black text-lg grow">{selectedGender || "Specify"}</div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/7ce047be0e562e64bf8a16c54af587005b102e240974d41a4f1bfbdf3284720b?"
                  className="aspect-[2] object-contain object-center w-[22px] fill-black shrink-0 my-auto"
                  onClick={() => setIsGenderDropdownOpen(!isGenderDropdownOpen)}
                />
              </div>
              {isGenderDropdownOpen && (
                <div className="flex flex-col mt-2 border border-solid border-green-700 rounded-md">
                  {genderOptions.map((option) => (
                    <div key={option} className="p-2 cursor-pointer hover:bg-gray-200" onClick={() => handleGenderSelect(option)}>
                      {option}
                    </div>
                  ))}
                </div>
              )}
              {/* {selectedGender && (<p className="text-green-700 mt-1">Selected Gender: {selectedGender}</p>)} */}
            </div>
        </div>
      </div>

      {/* Phone Number & NIN Section*/}
      <div className="mt-6 max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="items-stretch grow flex flex-col max-md:max-w-full lg:w-1/2 max-md:mt-6">
              <div className="text-black text-lg font-semibold max-md:max-w-full">Phone Number</div>
              <input 
                className={`text-black text-lg justify-center border mt-2 pl-6 py-2 rounded-xl h-[44px] border-solid ${
                phoneNumberError ? "border-red-500" : " border-green-700"} items-start max-md:max-w-full max-md:px-5`}
                type="number"
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
                placeholder="08012345678"  
              />
              {phoneNumberError && (
                <p className="text-red-500 mt-1">{phoneNumberError}</p>
              )}
            </div>

            <div className="items-stretch flex grow flex-col max-md:max-w-full max-md:mt-6 lg:w-1/2">
              <div className="text-black text-lg font-semibold max-md:max-w-full">NIN</div>
              <input className="text-black text-lg justify-center border mt-2 pl-6 py-2 rounded-xl h-[44px] border-solid border-green-700"
                type="number"
                value={nin}
                onChange={handleNINChange}
                placeholder="Enter NIN"  
              />
              {ninError && (
                <p className="text-red-500 mt-1">{ninError}</p>
              )}
            </div>
        </div>
      </div>

      {/* Address Section */}
      <div className="text-black text-lg font-semibold mt-6 max-md:max-w-full">
        Contact Address
      </div>
      <div className="items-stretch h-[44px] flex justify-between gap-5 mt-2 max-md:max-w-full max-md:flex-wrap">
        {/* Apartment Field */}
        <input className="text-black text-lg justify-center items-stretch border grow px-6 py-2 rounded-xl border-solid border-green-700 max-md:max-w-full max-md:px-5"
          placeholder="Apartment"
          type="text">
        </input>

         {/* Street Name Field */}
        <input className="text-black text-lg justify-center items-stretch border grow px-6 py-2 rounded-xl border-solid border-green-700 max-md:max-w-full max-md:px-5"
          placeholder="Street Name"
          type="text">
        </input>
      </div>

       {/* City/Town Field */}
      <input 
        type="text"
        placeholder="City/Town"
        className="text-black text-lg justify-center h-[44px] items-stretch border mt-6 px-6 py-2 rounded-xl border-solid border-green-700 max-md:max-w-full max-md:px-5">
      </input>

      
      <div className="items-stretch flex justify-between gap-5 mt-6 max-md:max-w-full max-md:flex-wrap">

        <div className="flex items-stretch border justify-between gap-0 mt-2 px-6 py-2 w-full rounded-xl border-solid border-green-700 max-md:max-w-full max-md:flex-wrap lg:w-1/2 max-md:px-5">
          <input 
            type="text"
            placeholder="LGA"
            className="text-black text-lg grow h-[44px]">
          </input>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/64462fc9619791bf8b68c2def239fa154ee59f0442c07837798cfb86fe3dd443?"
            className="aspect-[2.22] object-contain object-center w-[22px] fill-black shrink-0 my-auto"
          />
        </div>
  
        <div className=" items-stretch border flex justify-between gap-0 mt-2 px-6 py-2 w-full rounded-xl border-solid border-green-700 max-md:max-w-full max-md:flex-wrap lg:w-1/2 max-md:px-5">
          <input
              type="text"
              placeholder="State"
              className="text-black text-lg grow h-[44px]"></input>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/64462fc9619791bf8b68c2def239fa154ee59f0442c07837798cfb86fe3dd443?"
            className="aspect-[2.22] object-contain object-center w-[22px] fill-black shrink-0 my-auto"
          />
        </div>
      </div>

      {/* SUPPORTING DOCUMENTS SECTION */}
      <div className="text-black text-lg font-semibold mt-6 max-md:max-w-full">
        Supporting Documents
      </div>

      <div className="justify-between items-stretch border flex gap-0 mt-2 px-6 py-2 rounded-xl h-[44px] border-solid border-green-700 max-md:max-w-full max-md:flex-wrap max-md:px-5"
        onClick={() => setIsAvailableIdCardDropdownOpen(!isAvailableIdCardDropdownOpen)}>
          <div className="justify-center text-black text-lg grow max-md:max-w-full">{selectedAvailableIdCard || "Select Available ID Card"}</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/78983c65a313e2c3f761e3f4c9343affe4d4ffc117001d53e4b2bcb692b4555f?"
            className="aspect-[2.22] object-contain object-center w-[22px] fill-black shrink-0 my-auto"
            onClick={() => setIsAvailableIdCardDropdownOpen(!isAvailableIdCardDropdownOpen)}
          />
      </div>
      {isAvailableIdCardDropdownOpen && (
        <div className="flex flex-col mt-2 border border-solid border-green-700 rounded-md">
          {idCardOptions.map((option) => (
            <div key={option} className="p-2 cursor-pointer hover:bg-gray-200" onClick={() => handleAvailableCardSelect(option)}>
              {option}
            </div>
          ))}
        </div>
      )}
      
      <div className="text-black text-lg font-semibold mt-2 max-md:max-w-full">Upload ID Card</div>
      <div className="items-stretch border flex flex-col px-6 rounded-xl border-solid border-green-700 max-md:max-w-full max-md:px-5">
        <form>
          {/* Upload front of selected ID Card */}
          <div>
            <div className="text-black text-lg font-semibold mt-6 max-md:max-w-full">Upload front of selected ID Card</div>
            <div className="items-stretch border flex justify-between gap-2.5 rounded-xl border-solid border-green-700 max-md:max-w-full max-md:flex-wrap">
              <input
                className="text-black text-center text-lg font-bold grow my-auto max-md:max-w-full"
                type="file"
              />
            </div>
          </div>

          {/* Upload back of selected ID Card */}
          <div className="mb-6">
            <div className="text-black text-lg font-semibold mt-6 max-md:max-w-full">Upload back of selected ID Card</div>
            <div className="items-stretch border flex justify-between gap-2.5 rounded-xl border-solid border-green-700 max-md:max-w-full max-md:flex-wrap">
              <input
                className="text-black text-center text-lg font-bold grow my-auto max-md:max-w-full"
                type="file"
              />
            </div>
          </div>
        </form>

      </div>
      <div className="text-black text-lg font-semibold mt-6 max-md:max-w-full">
        Upload Passport Photograph
      </div>
      <div className="items-stretch border flex flex-col justify-center mt-2 px-6 py-2 rounded-xl h-[44px] border-solid border-green-700 max-md:max-w-full max-md:px-5">
        <div className="items-stretch border flex justify-between gap-2.5 rounded-xl border-solid border-green-700 max-md:max-w-full max-md:flex-wrap">
          <input className="text-black text-center text-lg font-bold grow my-auto max-md:max-w-full"
            type="file">
          </input>
         
        </div>
      </div>

      {/* HIGHEST QUALIFICATION SECTION */}
      <div className="text-black text-lg font-semibold mt-6 max-md:max-w-full">
        Highest Educational Qualification
      </div>

      <div 
        className="justify-between items-stretch border flex gap-0 mt-2 px-6 py-2 h-[44px] rounded-xl border-solid border-green-700 max-md:max-w-full max-md:flex-wrap max-md:px-5"
        onClick={() => setIsHighestQualificationDropdownOpen(!isHighestQualificationDropdownOpen)}>
        <div className="justify-center text-black text-lg grow max-md:max-w-full">{selectedHighestQualification || "Select most recent qualification"}</div> 
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/4035bd7c4c31a69d81d69f1b668cbec517add3e495421449b948b0d2d0baf315?"
            className="aspect-[2.22] object-contain object-center w-[22px] fill-black shrink-0 my-auto"
            onClick={() => setIsHighestQualificationDropdownOpen(!isHighestQualificationDropdownOpen)}
          />
      </div>

      {isHighestQualificationDropdownOpen && (
        <div className="flex flex-col mt-2 border border-solid border-green-700 rounded-md">
          {eduQualificationOptions.map((option) => (
            <div key={option} className="p-2 cursor-pointer hover:bg-gray-200" onClick={() => handleHighestQualificationSelect(option)}>
              {option}
            </div>
          ))}
        </div>
      )}

      {/* EMPLOYMENT STATUS */}
      <div className="text-black text-lg font-semibold mt-6 max-md:max-w-full">
        Employment Status
      </div>
      <div className="justify-between items-stretch border flex gap-0 mt-2 px-6 py-2 rounded-xl h-[44px] border-solid border-green-700 max-md:max-w-full max-md:flex-wrap max-md:px-5"
      onClick={() => setIsEmploymentStatusDropdownOpen(!isEmploymentStatusDropdownOpen)}>
        <div className="justify-center text-black text-lg grow max-md:max-w-full">{selectedEmploymentStatus || "Select employment status"}</div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/ec9a63222cecbfa03295f3268842b57cbec0a4ecbfbb20c1d6f16fa6a6f699f1?"
          className="aspect-[2.22] object-contain object-center w-[22px] fill-black shrink-0 my-auto"
          onClick={() => setIsEmploymentStatusDropdownOpen(!isEmploymentStatusDropdownOpen)}
        />
      </div>
      {isEmploymentStatusDropdownOpen && (
        <div className="flex flex-col mt-2 border border-solid border-green-700 rounded-md">
          {employmentOptions.map((option) => (
            <div key={option} className="p-2 cursor-pointer hover:bg-gray-200" onClick={() => handleEmploymentStatusSelect(option)}>
              {option}
            </div>
          ))}
        </div>
      )}

      {/* PREFERRED COURSE */}
      <div className="text-black text-lg font-semibold mt-6 max-md:max-w-full">
        Preferred Course
      </div>
      <div className="justify-center border flex mt-2 pl-6 pr-6 py-2 h-[44px] rounded-xl border-solid border-green-700 items-end max-md:max-w-full max-md:px-5"
      onClick={() => setIsPreferredCourseDropdownOpen(!isPreferredCourseDropdownOpen)}>
         <div className="justify-center text-black text-lg grow max-md:max-w-full">{selectedPreferredCourse || "Select preferred course"}</div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/1066169dc897401801692b8d9e53b82914772ef8949a81583d7ca1b2ff6b2e67?"
          className="aspect-[2.22] object-contain object-center w-[22px] fill-black shrink-0 my-auto"
          onClick={() => setIsPreferredCourseDropdownOpen(!isPreferredCourseDropdownOpen)}
        />
      </div>
      
      {isPreferredCourseDropdownOpen && (
        <div className="flex flex-col mt-2 border border-solid border-green-700 rounded-md">
          {preferredCourseOptions.map((option) => (
            <div key={option} className="p-2 cursor-pointer hover:bg-gray-200" onClick={() => handlePreferredCourseSelect(option)}>
              {option}
            </div>
          ))}
        </div>
      )}

      <div className="text-black text-lg font-semibold mt-6 max-md:max-w-full">
        Why choose preferred course ?
      </div>
      <input className="text-black text-lg items-stretch border mt-2 pt-3.5 pb-24 px-6 rounded-xl border-solid border-green-700 max-md:max-w-full max-md:pb-10 max-md:px-5"
              placeholder="Why have you chosen this course?"
              type="text">
        
      </input>
      <div className="text-black text-lg font-semibold mt-5 max-md:max-w-full">
      How did you hear about us?
      </div>
      <div className="items-stretch border flex justify-between gap-0 h-[44px] px-6 py-2 rounded-xl border-solid border-green-700 max-md:max-w-full max-md:flex-wrap max-md:px-5"
      onClick={() => setIsHearAboutUsDropdownOpen(!isHearAboutUsDropdownOpen)}>
        <div className="text-black text-lg grow max-md:max-w-full">{selectedHearAboutUs || "Select a channel." }</div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/c116a34fd5fd8ccbc3201e4339171848ff9d0550c7ac8c3c0cc9810c86f81d6d?"
          className="aspect-[2.22] object-contain object-center w-[22px] fill-black shrink-0 my-auto"
          onClick={() => setIsHearAboutUsDropdownOpen(!isHearAboutUsDropdownOpen)}
        />
      </div>

      {isHearAboutUsDropdownOpen && (
        <div className="flex flex-col mt-2 border border-solid border-green-700 rounded-md">
          {aboutusOptions.map((option) => (
            <div key={option} className="p-2 cursor-pointer hover:bg-gray-200" onClick={() => handleHearAboutUsSelect(option)}>
              {option}
            </div>
          ))}
        </div>
      )}
    
      <div className="justify-center text-black text-lg font-light max-md:max-w-full">
        Information collected in this form will be used solely for the purpose of course enrollment.
      </div>

       {/* Terms and Conditions Section */}
      <div className="items-stretch flex justify-between gap-4 pb-2.5 max-md:max-w-full max-md:flex-wrap">
        <input 
          type="checkbox"
          className={`border ${isTermsChecked ? 'bg-green-700' : 'bg-white'}flex w-[30px] shrink-0 h-[30px] flex-col my-auto border-solid border-green-700`}
          onClick={() => setIsTermsChecked(!isTermsChecked)} 
          />
        <p className="justify-center text-black text-lg font-light grow max-md:max-w-full">
          I have read and agree to the terms and conditions.
        </p>
      </div>

         {/* Submit Button */}
      <button  className="text-white text-center text-xl text-uppercase justify-center items-center bg-green-700 self-center w-[200px] max-w-full px-8 py-2 rounded-xl max-md:px-5 cursor-pointer">
        Submit
      </button>
      </div>
    </div>
    
  );
}

export default App;
