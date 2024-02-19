// import {useState, useContext} from 'react'
// import {StepperContext} from '../../contexts/StepperContext'

// export default function StepThree () {
//   const {userData, setUserData} = useContext(StepperContext);

//   const [selectedAvailableIdCard, setSelectedAvailableIdCard] = useState("");
//   const [isAvailableIdCardDropdownOpen, setIsAvailableIdCardDropdownOpen] = useState(false);
//   const idCardOptions = ["Passport", "Driver's Licence", "National ID Card", "Permanent Voter's Card"];

  
//   const [selectedPreferredCourse, setSelectedPreferredCourse] = useState("");
//   const [isPreferredCourseDropdownOpen, setIsPreferredCourseDropdownOpen] = useState(false);
//   const preferredCourseOptions = ["Software Development/Testing", "Data Analysis", "Digital Marketing", "UI/UX Design", "Machine Learning/Automation"];

// const handleChange =(e)=> {
//   const { name, value } = e.target;
//   setUserData({ ...userData, [name]: value});
// };


// const handleAvailableCardSelect = (availableidcard) => {
//   setSelectedAvailableIdCard(availableidcard);
//   setIsAvailableIdCardDropdownOpen(false);
// };

// const handlePreferredCourseSelect = (preferredcourse) => {
//   setSelectedPreferredCourse(preferredcourse);
//   setIsPreferredCourseDropdownOpen(false);
// };

// return (
//   <div className='flex flex-col'>
//     <div className='w-full mx-2 flex-1'>

// {/* SUPPORTING DOCUMENTS SECTION */}
//       <div className="items-stretch grow flex flex-col max-md:max-w-full lg:w-full max-sm:mt-1 max-md:mt-2">
//         <div className="text-black text-lg font-semibold mt-2 max-sm:text-xs max-md:max-w-full">Supporting Documents</div>
//         <div className="relative">
//           <select
//             className="mt-2 px-6 h-[32px] border-solid w-full border border-[#2f8d47] rounded-md"
//             onClick={() => setIsAvailableIdCardDropdownOpen(!isAvailableIdCardDropdownOpen)}>
//             <option className={`max-sm:pt-2 grow max-sm:text-xs ${selectedAvailableIdCard ? 'text-black' : 'text-[#9ca3af] italic'}`}>{selectedAvailableIdCard || 'Select Available ID Card'}</option>
//           </select>
//           {isAvailableIdCardDropdownOpen && (
//             <div className="absolute flex flex-col mt-2 max-sm:mt-1 w-full bg-[#ffffff] border border-solid border-[#2f8d47] rounded-md">
//               {idCardOptions.map((option) => (
//                 <div key={option} className="p-2 cursor-pointer hover:bg-[#d1d5db] max-sm:text-xs" onClick={() => handleAvailableCardSelect(option)}>
//                   {option}
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       </div>
//       <div className="text-black text-lg font-semibold mt-2 max-sm:text-xs max-md:max-w-full">Upload ID Card</div>
//       <div className="items-stretch border flex flex-col px-2 rounded-xl mt-2 border-solid border-[#2f8d47] max-md:max-w-full max-md:px-5">
//         <form>
//           {/* Upload front of selected ID Card */}
//           <div className="text-black text-lg font-semibold mt-2 max-sm:text-xs max-md:max-w-full">Upload front of selected ID Card</div>
//           <div className="items-stretch border flex justify-between pl-1 py-1 rounded-l border-solid border-[#2f8d47] max-md:max-w-full max-md:flex-wrap">
//             <input className="text-black text-start text-lg grow my-auto max-sm:text-xs max-md:max-w-full" type="file" />
//           </div>

//           {/* Upload back of selected ID Card */}
//           <div className="mb-2">
//             <div className="text-black text-lg font-semibold mt-2 max-sm:text-xs max-md:max-w-full">Upload back of selected ID Card</div>
//             <div className="items-stretch border flex justify-between pl-1 py-1 rounded-l border-solid border-[#2f8d47] max-md:max-w-full max-md:flex-wrap">
//               <input className="text-black text-start text-lg grow my-auto max-sm:text-xs max-md:max-w-full" type="file" />
//             </div>
//           </div>
//         </form>
//       </div>

//     {/* PREFERRED COURSE SECTION */}
// <div className="items-stretch grow flex flex-col max-md:max-w-full lg:w-full max-sm:mt-1 max-md:mt-2">
//   <div className="text-black text-lg font-semibold mt-2 max-sm:text-xs max-md:max-w-full">Preferred Course</div>
//   <div className='relative'>
//     <select
//       className="mt-2 px-6 h-[32px] border-solid w-full border border-green-700 rounded-md"
//       onClick={() => setIsPreferredCourseDropdownOpen(!isPreferredCourseDropdownOpen)}>
//       <option className={`max-sm:pt-2 grow max-sm:text-xs ${selectedPreferredCourse ? 'text-black' : 'text-[#9ca3af] italic'}`}>{selectedPreferredCourse || 'Select preferred course'}</option>
//     </select>
//     {isPreferredCourseDropdownOpen && (
//       <div className="absolute flex flex-col mt-2 max-sm:text-sm max-sm:mt-1 w-full bg-[#ffffff] border border-solid border-green-700 rounded-md">
//         {preferredCourseOptions.map((option) => (
//           <div key={option} className="p-2 cursor-pointer hover:bg-[#d1d5db]" onClick={() => handlePreferredCourseSelect(option)}>
//             {option}
//           </div>
//         ))}
//       </div>
//     )}
//   </div>
// </div>

//   </div>
// </div>
// )

// }

import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const StepThree = ({ validateFields }) => {
  const validationSchema = Yup.object({
    selectedAvailableIdCard: Yup.string().required('Select an available ID card'),
    frontOfIdCard: Yup.mixed().required('Upload the front of the selected ID card'),
    backOfIdCard: Yup.mixed().required('Upload the back of the selected ID card'),
    selectedPreferredCourse: Yup.string().required('Select a preferred course'),
  });

  const formik = useFormik({
    initialValues: {
      selectedAvailableIdCard: '',
      frontOfIdCard: null,
      backOfIdCard: null,
      selectedPreferredCourse: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // Handle form submission logic here
      console.log(values);
    },
  });

  useEffect(() => {
    validateFields(formik.isValid);
  }, [formik.isValid, validateFields]);

  return (
    <form onSubmit={formik.handleSubmit}>
      {/* Supporting Documents Section */}
      <div className="form-group">
        <label htmlFor="selectedAvailableIdCard">Select Available ID Card</label>
        <select
          id="selectedAvailableIdCard"
          name="selectedAvailableIdCard"
          className="form-control"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.selectedAvailableIdCard}
        >
          <option value="">Select</option>
          <option value="Passport">Passport</option>
          <option value="Driver's Licence">Driver's Licence</option>
          <option value="National ID Card">National ID Card</option>
          <option value="Permanent Voter's Card">Permanent Voter's Card</option>
        </select>
        {formik.touched.selectedAvailableIdCard && formik.errors.selectedAvailableIdCard ? (
          <div className="text-red-500">{formik.errors.selectedAvailableIdCard}</div>
        ) : null}
      </div>

      {/* Upload Front of ID Card */}
      <div className="form-group">
        <label htmlFor="frontOfIdCard">Upload Front of Selected ID Card</label>
        <input
          type="file"
          id="frontOfIdCard"
          name="frontOfIdCard"
          onChange={(event) => formik.setFieldValue('frontOfIdCard', event.currentTarget.files[0])}
        />
        {formik.touched.frontOfIdCard && formik.errors.frontOfIdCard ? (
          <div className="text-red-500">{formik.errors.frontOfIdCard}</div>
        ) : null}
      </div>

      {/* Upload Back of ID Card */}
      <div className="form-group">
        <label htmlFor="backOfIdCard">Upload Back of Selected ID Card</label>
        <input
          type="file"
          id="backOfIdCard"
          name="backOfIdCard"
          onChange={(event) => formik.setFieldValue('backOfIdCard', event.currentTarget.files[0])}
        />
        {formik.touched.backOfIdCard && formik.errors.backOfIdCard ? (
          <div className="text-red-500">{formik.errors.backOfIdCard}</div>
        ) : null}
      </div>

      {/* Preferred Course Section */}
      <div className="form-group">
        <label htmlFor="selectedPreferredCourse">Preferred Course</label>
        <select
          id="selectedPreferredCourse"
          name="selectedPreferredCourse"
          className="form-control"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.selectedPreferredCourse}
        >
          <option value="">Select</option>
          <option value="Software Development/Testing">Software Development/Testing</option>
          <option value="Data Analysis">Data Analysis</option>
          <option value="Digital Marketing">Digital Marketing</option>
          <option value="UI/UX Design">UI/UX Design</option>
          <option value="Machine Learning/Automation">Machine Learning/Automation</option>
        </select>
        {formik.touched.selectedPreferredCourse && formik.errors.selectedPreferredCourse ? (
          <div className="text-red-500">{formik.errors.selectedPreferredCourse}</div>
        ) : null}
      </div>
    </form>
  );
};

export default StepThree;
