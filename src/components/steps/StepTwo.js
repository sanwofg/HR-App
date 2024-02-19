// import {useState} from 'react'
// // import {StepperContext} from '../../contexts/StepperContext'

// export default function StepTwo () {
//   // const {userData, setUserData} = useContext(StepperContext);
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [nin, setNIN] = useState("");
//   const [certificateFile, setCertificateFile] = useState(null);
  
//   const [selectedHighestQualification, setSelectedHighestQualification] = useState("");
//   const [isHighestQualificationDropdownOpen, setIsHighestQualificationDropdownOpen] = useState(false);
//   const eduQualificationOptions = ["SSCE", "Bachelor's Degree", "Master's Degree", "PhD"];
//   const [phoneNumberError, setPhoneNumberError] = useState("");
//   const [ninError, setNINError] = useState("");


// //   const handleChange =(e)=> {
// //   const { name, value } = e.target;
// //   setUserData({ ...userData, [name]: value});
// // };


// const handleHighestQualificationSelect = (highestqualification) => {
//   setSelectedHighestQualification(highestqualification);
//   setIsHighestQualificationDropdownOpen(false);
// };

// const handlePhoneNumberChange = (e) => {
//   const input = e.target.value;
//   if (/^\d*$/.test(input) && input.length <= 11) {
//     setPhoneNumber(input);
//     setPhoneNumberError("");
//   }
//   else 
//   {
//     setPhoneNumberError("11 digits are required.");
//   }
// };

// const handleNINChange = (e) => {
//   const input = e.target.value;
//   if (/^\d*$/.test(input) && input.length <= 11) {
//     setNIN(input);
//     setNINError("");
//   }
//   else
//   {
//     setNINError("11 digits are required.");
//   }
// };

// // const handleCertificateFileChange = (e) => {
// //   const file = e.target.files[0];
// //   setCertificateFile(file);
// // };
 
// //  // Validation logic for phone number
// //  if (!phoneNumber.trim() || phoneNumber.length !== 11 || isNaN(phoneNumber)) {
// //   setPhoneNumberError("Please enter a valid 11-digit phone number.");
// //   return;
// // } else {
// //   setPhoneNumberError("");


// // Validation logic for NIN
// // if (!nin.trim() || nin.length !== 11 || isNaN(nin)) {
// //   setNINError("Please enter a valid 11-digit NIN.");
// //   return;
// // } else {
// //   setNINError("");
// // }

// return (
//   <div className='flex flex-col'>
//   <div className='w-full mx-2 flex-1'>

//       {/* Phone Number & NIN Section*/}
//       <div className="mt-2 max-md:max-w-full">
//         <div className="flex max-md:flex-col gap-4 max-md:items-stretch max-md:gap-0">
//           <div className="items-stretch flex grow flex-col max-md:max-w-full max-md:mt-2.5 lg:w-1/2">
//             <div className="text-black text-lg font-semibold max-sm:text-xs max-md:max-w-full">Phone Number</div>
//             <input 
//               className={`text-black text-lg max-sm:text-xs justify-center border mt-2 pl-6 rounded-xl h-[32px] border-solid ${
//               phoneNumberError ? "border-red-500" : " border-green-700"} items-start max-md:max-w-full max-md:px-5`}
//               type="number"
//               value={phoneNumber}
//               onChange={handlePhoneNumberChange}
//               placeholder="08012345678"  
//             />
//             {phoneNumberError && (
//               <p className="text-red-500 mt-1">{phoneNumberError}</p>
//             )}
//           </div>

//           <div className="items-stretch flex grow flex-col max-md:max-w-full max-md:mt-2 lg:w-1/2">
//             <div className="text-black text-lg font-semibold max-sm:text-xs max-md:max-w-full">NIN</div>
//             <input className="text-black text-lg max-sm:text-xs justify-center border mt-2 max-sm:pr-6 pl-6 rounded-xl h-[32px] border-solid border-green-700"
//               type="number"
//               value={nin}
//               onChange={handleNINChange}
//               placeholder="Enter NIN"  
//             />
//             {ninError && (
//               <p className="text-red-500 mt-1">{ninError}</p>
//             )}
//           </div>
//         </div>
//       </div>

     
//       {/* HIGHEST QUALIFICATION SECTION */}
//       <div className="items-stretch grow flex flex-col max-md:max-w-full lg:w-full max-sm:mt-1 max-md:mt-2">
//         <div className="text-black text-lg font-semibold mt-2 max-sm:pb-2 max-sm:text-xs max-md:max-w-full">Highest Educational Qualification</div>
//           <div className='relative'>
//             <select
//               className="mt-2 px-6 h-[32px] border-solid w-full border border-[#2f8d47] rounded-md"
//               onClick={() => setIsHighestQualificationDropdownOpen(!isHighestQualificationDropdownOpen)}>
//               <option className={`max-sm:pt-2 grow max-sm:text-xs ${selectedHighestQualification ? 'text-black' : 'text-[#9ca3af] italic'}`}>{selectedHighestQualification || 'Select most recent qualification'}</option>
//             </select>
//             {isHighestQualificationDropdownOpen && (
//               <div className="absolute flex flex-col mt-2 max-sm:mt-1 w-full bg-[#ffffff] border border-solid border-[#2f8d47] rounded-md">
//                 {eduQualificationOptions.map((option) => (
//                   <div key={option} className="p-2 cursor-pointer hover:bg-[#d1d5db]" onClick={() => handleHighestQualificationSelect(option)}>
//                     {option}
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>
//       </div>

//        {/* Upload academic certificate */}
//        <div className="text-black text-lg font-semibold max-sm:text-xs mt-2  max-sm:pb-2 max-md:max-w-full">Upload certificate</div>
//           <div className="items-stretch border flex justify-between py-1 rounded-xl border-solid border-green-700 max-md:max-w-full max-md:flex-wrap">
//             <input className="text-black max-sm:text-xs text-start pl-2 text-lg grow my-auto max-md:max-w-full" type="file" />
//           </div>
//   </div>
// </div>
// )
// 

import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const StepTwo = ({ validateFields }) => {
  const validationSchema = Yup.object({
    phoneNumber: Yup.string().matches(/^\d{11}$/, 'Phone number must be 11 digits').required('Phone number is required'),
    nin: Yup.string().matches(/^\d{11}$/, 'NIN must be 11 digits').required('NIN is required'),
    highestQualification: Yup.string().required('Highest qualification is required'),
    certificateFile: Yup.mixed().required('Please upload your academic certificate'),
  });

  const formik = useFormik({
    initialValues: {
      phoneNumber: '',
      nin: '',
      highestQualification: '',
      certificateFile: null,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // Handle form submission logic here
      console.log(values);
    },
  });

  validateFields(formik.isValid);

  return (
    <form onSubmit={formik.handleSubmit}>
      {/* Phone Number */}
      <div className="form-group">
        <label htmlFor="phoneNumber">Phone Number</label>
        <input
          type="text"
          id="phoneNumber"
          name="phoneNumber"
          className="form-control"
          {...formik.getFieldProps('phoneNumber')}
        />
        {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
          <div className="text-red-500">{formik.errors.phoneNumber}</div>
        ) : null}
      </div>

      {/* NIN */}
      <div className="form-group">
        <label htmlFor="nin">NIN</label>
        <input
          type="text"
          id="nin"
          name="nin"
          className="form-control"
          {...formik.getFieldProps('nin')}
        />
        {formik.touched.nin && formik.errors.nin ? (
          <div className="text-red-500">{formik.errors.nin}</div>
        ) : null}
      </div>

      {/* Highest Qualification */}
      <div className="form-group">
        <label htmlFor="highestQualification">Highest Qualification</label>
        <select
          id="highestQualification"
          name="highestQualification"
          className="form-control"
          {...formik.getFieldProps('highestQualification')}
        >
          <option value="">Select</option>
          <option value="SSCE">SSCE</option>
          <option value="Bachelor's Degree">Bachelor's Degree</option>
          <option value="Master's Degree">Master's Degree</option>
          <option value="PhD">PhD</option>
        </select>
        {formik.touched.highestQualification && formik.errors.highestQualification ? (
          <div className="text-red-500">{formik.errors.highestQualification}</div>
        ) : null}
      </div>

      {/* Certificate File */}
      <div className="form-group">
        <label htmlFor="certificateFile">Upload Certificate</label>
        <input
          type="file"
          id="certificateFile"
          name="certificateFile"
          onChange={(event) => formik.setFieldValue('certificateFile', event.currentTarget.files[0])}
        />
        {formik.touched.certificateFile && formik.errors.certificateFile ? (
          <div className="text-red-500">{formik.errors.certificateFile}</div>
        ) : null}
      </div>

    </form>
  );
};

export default StepTwo;

