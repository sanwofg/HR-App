// import {useState, useContext} from 'react'
// import {StepperContext} from '../../contexts/StepperContext'

// export default function StepFour () {
//   const {userData, setUserData} = useContext(StepperContext);

//   const [selectedHearAboutUs, setSelectedHearAboutUs] = useState("");
//   const [isTermsChecked, setIsTermsChecked] = useState(false);

//   const [isHearAboutUsDropdownOpen, setIsHearAboutUsDropdownOpen] = useState(false);

//   const aboutusOptions = ["Social Media", "Internet Ad", "Friend/Colleague", "Other means"];

// const handleChange =(e)=> {
//   const { name, value } = e.target;
//   setUserData({ ...userData, [name]: value});
// };

// const handleHearAboutUsSelect = (hearaboutus) => {
//     setSelectedHearAboutUs(hearaboutus);
//     setIsHearAboutUsDropdownOpen(false);
//   };


// return (
//     <div>
//     {/* HOW DID YOU HEAR ABOUT US SECTION */}
//     <div className="items-stretch grow flex flex-col max-md:max-w-full lg:w-full max-sm:mt-1 max-md:mt-2">
//       <div className="text-black text-lg font-semibold mt-2 max-sm:text-xs max-sm:mb-2 max-md:max-w-full">
//         How did you hear about us?
//       </div>
//       <div className="relative">
//         <select
//           className="border-solid border w-full h-[32px] px-6 border-green-700 rounded-xl"
//           onClick={() => setIsHearAboutUsDropdownOpen(!isHearAboutUsDropdownOpen)}
//         >
//           <option className={`text-lg text-black grow max-sm:text-xs ${selectedHearAboutUs ? '' : 'italic text-[#9ca3af]'}`}>
//             {selectedHearAboutUs || 'Select a channel.'}
//           </option>
//         </select>
//         {isHearAboutUsDropdownOpen && (
//           <div className="absolute flex flex-col mt-2 w-full bg-[#ffffff] border border-solid border-[#2f8d47] rounded-md">
//             {aboutusOptions.map((option) => (
//               <div key={option} className="p-2 cursor-pointer hover:bg-[#d1d5db]" onClick={() => handleHearAboutUsSelect(option)}>
//                 {option}
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
    
//     <div className="flex justify-center text-black text-lg max-sm:text-xs max-sm:mt-2 font-light max-md:max-w-full">Information collected in this form will be used solely for the purpose of course enrollment.</div>

//       {/* Terms and Conditions Section */}
//       <div className="items-stretch flex pb-2 max-md:max-w-full max-md:flex-wrap">
//         <input 
//           type="checkbox"
//           className={`border ${isTermsChecked ? 'bg-[#2f8d47]' : 'bg-[#ffffff]'} flex w-[30px] shrink-0 max-sm:h-[20px] h-[30px] flex-col my-auto border-solid border-green-700`}
//           onClick={() => setIsTermsChecked(!isTermsChecked)} 
//         />
//         <p className="py-2 px-2 text-black text-lg max-sm:text-xs max-sm:mt-2 font-light grow max-md:max-w-full">
//           I have read and agree to the terms and conditions.
//         </p>
//       </div>
//     </div>
 
// )

// }

import { useFormik } from 'formik';
import * as Yup from 'yup';

export default function StepFour({ ValidateFields }) {
  const initialValues = {
    selectedHearAboutUs: '',
    isTermsChecked: false,
  };

  const validationSchema = Yup.object().shape({
    selectedHearAboutUs: Yup.string().required('Please select how you heard about us.'),
    isTermsChecked: Yup.boolean().oneOf([true], 'Please accept the terms and conditions.'),
  });

  const handleSubmit = (values) => {
    // Handle form submission
    console.log('Form values:', values);
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleSubmit,
  });

  // Call ValidateFields function to validate the fields in StepFour.js
  ValidateFields(formik.isValid);

  const aboutusOptions = ["Social Media", "Internet Ad", "Friend/Colleague", "Other means"];

  return (
    <form onSubmit={formik.handleSubmit}>
      {/* HOW DID YOU HEAR ABOUT US SECTION */}
      <div className="items-stretch grow flex flex-col max-md:max-w-full lg:w-full max-sm:mt-1 max-md:mt-2">
        <div className="text-black text-lg font-semibold mt-2 max-sm:text-xs max-sm:mb-2 max-md:max-w-full">
          How did you hear about us?
        </div>
        <div className="relative">
          <select
            name="selectedHearAboutUs"
            className={`border-solid border w-full h-[32px] px-6 border-green-700 rounded-xl ${
              formik.errors.selectedHearAboutUs && formik.touched.selectedHearAboutUs ? 'border-red-500' : ''
            }`}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.selectedHearAboutUs}
          >
            <option value="" className="italic text-[#9ca3af]">Select a channel.</option>
            {aboutusOptions.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
          {formik.errors.selectedHearAboutUs && formik.touched.selectedHearAboutUs && (
            <div className="absolute top-full text-red-500 text-sm mt-1">{formik.errors.selectedHearAboutUs}</div>
          )}
        </div>
      </div>
      
      {/* Terms and Conditions Section */}
      <div className="items-stretch flex pb-2 max-md:max-w-full max-md:flex-wrap">
        <input 
          type="checkbox"
          name="isTermsChecked"
          className={`border ${formik.errors.isTermsChecked && formik.touched.isTermsChecked ? 'bg-[#ffcccc]' : 'bg-[#ffffff]'} 
            flex w-[30px] shrink-0 max-sm:h-[20px] h-[30px] flex-col my-auto border-solid border-green-700`}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          checked={formik.values.isTermsChecked}
        />
        <p className="py-2 px-2 text-black text-lg max-sm:text-xs max-sm:mt-2 font-light grow max-md:max-w-full">
          I have read and agree to the terms and conditions.
        </p>
      </div>
      
      {formik.errors.isTermsChecked && formik.touched.isTermsChecked && (
        <div className="text-red-500 text-sm mt-1">{formik.errors.isTermsChecked}</div>
      )}
    </form>
  );
}
