// import React, { useState } from 'react';
// import Stepper from "./Stepper";
// import StepperControl from "./StepperControl";
// import { StepperContext } from "../contexts/StepperContext";
// import StepOne from "./steps/StepOne";
// import StepTwo from "./steps/StepTwo";
// import StepThree from "./steps/StepThree";
// import Final from "./steps/Final";
// import StepFour from "./steps/StepFour";

// function RegistrationForm() {
//   const [currentStep, setCurrentStep] = useState(1);
//   const [userData, setUserData] = useState({
//     fullName: "",
//     dob: null,
//     selectedGender: "",
//     address: "",
//     state: "",
//     lga: "",
//     phoneNumber: "",
//     nin: "",
//     certificateFile:"",
//   });
//   const [fullNameError, setFullNameError] = useState("");
//   const [dobError, setDobError] = useState("");
//   const [genderError, setGenderError] = useState("");
//   const [addressError, setAddressError] = useState("");
//   const [stateError, setStateError] = useState("");
//   const [lgaError, setLgaError] = useState("");
//   const [phoneNumberError, setPhoneNumberError] = useState("");
//   const [ninError, setNINError] = useState("");
//   const [certificateFileError, setCertificateFileError] = useState("");


//   const steps = [
//     "Step 1",
//     "Step 2",
//     "Step 3",
//     "Step 4",
//     "Complete"
//   ];

//   const displayStep = (step) => {
//     switch (step) {
//       case 1:
//         return (
//           <StepOne
//             userData={userData}
//             setUserData={setUserData}
//             fullNameError={fullNameError}
//             setFullNameError={setFullNameError}
//             dobError={dobError}
//             setDobError={setDobError}
//             genderError={genderError}
//             setGenderError={setGenderError}
//             addressError={addressError}
//             setAddressError={setAddressError}
//             stateError={stateError}
//             setStateError={setStateError}
//             lgaError={lgaError}
//             setLgaError={setLgaError}
//           />
//         );

//       case 2:
//         return ( 
//         <StepTwo 
//           userData={userData}
//           setUserData={setUserData}
//           phoneNumberError={phoneNumberError}
//           setPhoneNumberError={setPhoneNumberError}
//           ninError={ninError}
//           setNINError={setNINError}
//           certificateFileError={certificateFileError}
//           setCertificateFileError={setCertificateFileError}/> 
//           );

//       case 3:
//         return ( 
//         <StepThree
//           userData={userData}
//           setUserData={setUserData}
//           fullNameError={fullNameError}
//           setFullNameError={setFullNameError}
//           dobError={dobError}
//           setDobError={setDobError}
//           genderError={genderError}
//           setGenderError={setGenderError} />
//           );

//       case 4:
//         return ( 
//           <StepFour 
//             userData={userData}
//             setUserData={setUserData}
//             fullNameError={fullNameError}
//             setFullNameError={setFullNameError}
//             dobError={dobError}
//             setDobError={setDobError}
//             genderError={genderError}
//             setGenderError={setGenderError}/>
//             );

//       case 5:
//         return ( 
//           <Final 
//             userData={userData}
//             setUserData={setUserData}
//             fullNameError={fullNameError}
//             setFullNameError={setFullNameError}
//             dobError={dobError}
//             setDobError={setDobError}
//             genderError={genderError}
//             setGenderError={setGenderError}/>
//         );    
//       default:
//         return null;
//     }
//   };

//   const handleClick = (direction) => {
//     let newStep = currentStep;
//     direction === 'next' ? (newStep++) : (newStep--);
//     newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
//   };

//   // const handleSubmit = () => {
//   //   // Your form submission logic here
//   //   // For demonstration, let's just move to the next step if step one is valid
//   //   if (currentStep === 1) {
//   //     // Check if all fields in step one are filled
//   //     if (!userData.fullName.trim()) {
//   //       setFullNameError("*This is a required field.");
//   //       return;
//   //     }
//   //     if (!userData.dob) {
//   //       setDobError("*This is a required field.");
//   //       return;
//   //     }
//   //     if (!userData.selectedGender) {
//   //       setGenderError("*This is a required field.");
//   //       return;
//   //     }
//   //     if (!userData.address.trim()) {
//   //       setAddressError("*This is a required field.");
//   //       return;
//   //     }
//   //     if (!userData.state) {
//   //       setStateError("*This is a required field.");
//   //       return;
//   //     }
//   //     if (!userData.lga) {
//   //       setLgaError("*This is a required field.");
//   //       return;
//   //     }
//   //     setCurrentStep(currentStep + 1);
//   //   }
//   // };

// const handleSubmit = () => {
//   let isValid = true; // Flag to track form validation status
 
//   // Check if all fields in the current step are filled
//   switch (currentStep) {
//     case 1:
//       const stepOneErrors = {};
//       if (!userData.fullName.trim()) {
//         stepOneErrors.fullName = "*This is a required field.";
//       }
//       if (!userData.dob) {
//         stepOneErrors.dob = "*This is a required field.";
//       }
//       if (!userData.selectedGender) {
//         stepOneErrors.gender = "*This is a required field.";
//       }
//       if (!userData.address.trim()) {
//         stepOneErrors.address = "*This is a required field.";
//       }
//       if (!userData.state) {
//         stepOneErrors.state = "*This is a required field.";
//       }
//       if (!userData.lga) {
//         stepOneErrors.lga = "*This is a required field.";
//       }

//       // Set error messages for StepOne fields
//       setFullNameError(stepOneErrors.fullName || "");
//       setDobError(stepOneErrors.dob || "");
//       setGenderError(stepOneErrors.gender || "");
//       setAddressError(stepOneErrors.address || "");
//       setStateError(stepOneErrors.state || "");
//       setLgaError(stepOneErrors.lga || "");

//       // Proceed to the next step if there are no errors in StepOne
//       // if (Object.keys(stepOneErrors).length === 0) {
//         if (isValid) {
//         setCurrentStep(currentStep + 1);
//       }
//       break;

//       case 2:
//         const stepTwoErrors = {};
//         if (!userData.phoneNumber) {
//           stepTwoErrors.phoneNumber = "*This is a required field.";
//         }
//         if (!userData.nin) {
//           stepTwoErrors.nin = "*This is a required field.";
//         }
//         if (!userData.highestqualification) {
//           stepTwoErrors.highestqualification = "*This is a required field.";
//         }
//         if (!userData.certificateFile) {
//           stepTwoErrors.certificateFile = "*Please upload your academic certificate.";
//         }

//         // Set error messages for StepOne fields
//         setPhoneNumberError(stepTwoErrors.phoneNumber || "");
//         setNINError(stepTwoErrors.nin || "");
//         setCertificateFileError(stepTwoErrors.certificateFile || "");
       
  
//         // Proceed to the next step if there are no errors in StepOne
//           if (isValid) {
//           setCurrentStep(currentStep + 1);
//         }
//         break;
//     default:
//       break;
//   }
// };

//   return (
//     <div className="md:w-1/2 mx-auto shadow-xl rounded-2xl pb-2 bg-[#ffffff]">
//       {/* Stepper */}
//       <div className="container horizontal mt-2"> 
//         <Stepper 
//           steps={steps}
//           currentStep={currentStep}
//         />
//       </div>
     
//       {/* Display components */}
//       <div className="my-2 p-6">
//         <StepperContext.Provider value={{
//           userData,
//           setUserData
//         }}>
//           {displayStep(currentStep)}
//         </StepperContext.Provider>
//       </div>

//       {/* Navigation controls */}
//       {currentStep !== steps.length &&
//         <StepperControl 
//           handleClick={handleClick}
//           currentStep={currentStep}
//           steps={steps}
//           handleSubmit={handleSubmit}
//           fullNameError={fullNameError}
//           dobError={dobError}
//           genderError={genderError}
//           addressError={addressError}
//           stateError={stateError}
//           lgaError={lgaError}
//           phoneNumberError={phoneNumberError}
//           ninError={ninError}
//           certificateFileError={certificateFileError}

//         />
//       }

//     </div>
//   );
// }

// export default RegistrationForm;

// import React from 'react';
// import Stepper from "./Stepper";
// import StepperControl from "./StepperControl";
// import { StepperContext } from "../contexts/StepperContext";
// import StepOne from "./steps/StepOne";
// import StepTwo from "./steps/StepTwo";
// import StepThree from "./steps/StepThree";
// import Final from "./steps/Final";
// import { Formik } from 'formik';
// import * as Yup from 'yup';

// function RegistrationForm() {
//   const steps = [
//     "Step 1",
//     "Step 2",
//     "Step 3",
//     "Complete"
//   ];

//   const displayStep = (step, userData, setUserData) => {
//     switch (step) {
//       case 1:
//         return (
//           <StepOne userData={userData} setUserData={setUserData} />
//         );
//       case 2:
//         return (
//           <StepTwo userData={userData} setUserData={setUserData} />
//         );
//       case 3:
//         return (
//           <StepThree userData={userData} setUserData={setUserData} />
//         );
//       case 4:
//         return (
//           <Final userData={userData} setUserData={setUserData} />
//         );
//       default:
//         return null;
//     }
//   };

//   return (
//     <div className="md:w-1/2 mx-auto shadow-xl rounded-2xl pb-2 bg-[#ffffff]">
//       {/* Stepper */}
//       <div className="container horizontal mt-2"> 
//         <Stepper 
//           steps={steps}
//           currentStep={currentStep}
//         />
//       </div>
     
//       {/* Display components */}
//       <div className="my-2 p-6">
//         <StepperContext.Consumer>
//           {({ userData, setUserData }) => (
//             <Formik
//               initialValues={userData}
//               validationSchema={Yup.object().shape({
//                 // Define validation schema for StepOne, StepTwo, StepThree fields
//                 fullName: Yup.string().required('Full name is required'),
//                 dob: Yup.date().required('Date of birth is required'),
//               })}
//               onSubmit={(values, { setSubmitting }) => {
//                 // Handle form submission logic here

//                 switch (currentStep) {
//                   case 1:
//                     // Logic for StepOne submission
//                     // Assuming successful submission moves to the next step
//                     setCurrentStep(currentStep + 1);
//                     break;
//                   case 2:
//                     // Logic for StepTwo submission
//                     // Assuming successful submission moves to the next step
//                     setCurrentStep(currentStep + 1);
//                     break;
//                   case 3:
//                     // Logic for StepThree submission
//                     // Assuming successful submission moves to the next step
//                     setCurrentStep(currentStep + 1);
//                     break;
//                   case 4:
//                     // Logic for Final step submission
//                     // Assuming successful submission completes the form
//                     // You might also redirect the user or show a success message here
//                     setCurrentStep(currentStep + 1);
//                     break;
//                   default:
//                     break;
//                 }
//               }}
//             >
//               {({ values, setFieldValue, handleSubmit }) => (
//                 <form onSubmit={handleSubmit}>
//                   {displayStep(currentStep, values, setFieldValue)}
//                 </form>
//               )}
//             </Formik>
//           )}
//         </StepperContext.Consumer>
//       </div>

//       {/* Navigation controls */}
//       {currentStep !== steps.length &&
//         <StepperControl 
//           steps={steps}
//         />
//       }
//     </div>
//   );
// }

// export default RegistrationForm;


// import React, { useState } from 'react';
// import Stepper from "./Stepper";
// import StepperControl from "./StepperControl";
// import { StepperContext } from "../contexts/StepperContext";
// import StepOne from "./steps/StepOne";
// import StepTwo from "./steps/StepTwo";
// import StepThree from "./steps/StepThree";
// import Final from "./steps/Final";
// import { Formik } from 'formik';
// import * as Yup from 'yup';

// function RegistrationForm() {
//   const [currentStep, setCurrentStep] = useState(1);
//   const [userData, setUserData] = useState({
//     fullName: '',
//     dob: '',
//     gender: '',
//     address: '',
//     state: '',
//     lga: '',
//     phoneNumber: '',
//     nin: '',
//     highestQualification: '',
//     certificateFile: null,
//     selectedAvailableIdCard: '',
//     frontOfIdCard: null,
//     backOfIdCard: null,
//     selectedPreferredCourse: '',
//     selectedHearAboutUs: '',
//     isTermsChecked: false,
//   });

//   const steps = [
//     "Step 1",
//     "Step 2",
//     "Step 3",
//     "Complete"
//   ];

//   const displayStep = () => {
//     switch (currentStep) {
//       case 1:
//         return <StepOne userData={userData} setUserData={setUserData} />;
//       case 2:
//         return <StepTwo userData={userData} setUserData={setUserData} />;
//       case 3:
//         return <StepThree userData={userData} setUserData={setUserData} />;
//       case 4:
//         return <Final />;
//       default:
//         return null;
//     }
//   };

//   return (
//     <div className="md:w-1/2 mx-auto shadow-xl rounded-2xl pb-2 bg-[#ffffff]">
//       {/* Stepper */}
//       <div className="container horizontal mt-2"> 
//         <Stepper 
//           steps={steps}
//           currentStep={currentStep}
//         />
//       </div>
     
//       {/* Display components */}
//       <div className="my-2 p-6">
//         <StepperContext.Provider value={{ userData, setUserData }}>
//           <Formik
//             initialValues={userData}
//             validationSchema={Yup.object().shape({
//               // Define validation schema for StepOne, StepTwo, StepThree fields
//               fullName: Yup.string().required('Full name is required'),
//               dob: Yup.date().required('Date of birth is required'),
//             })}
//             onSubmit={(values, { setSubmitting }) => {
//               // Handle form submission logic here
//               setCurrentStep(currentStep + 1);
//             }}
//           >
//             {({ values, setFieldValue, handleSubmit }) => (
//               <form onSubmit={handleSubmit}>
//                 {displayStep()}
//               </form>
//             )}
//           </Formik>
//         </StepperContext.Provider>
//       </div>

//       {/* Navigation controls */}
//       {currentStep !== steps.length &&
//         <StepperControl 
//           currentStep={currentStep}
//           steps={steps}
//           handleClick={(action) => {
//             if (action === 'back') {
//               setCurrentStep(currentStep - 1);
//             } else if (action === 'next') {
//               handleSubmit();
//             }
//           }}
//         />
//       }
//     </div>
//   );
// }

// export default RegistrationForm;

import React, { useState } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Stepper from "./Stepper";
import StepperControl from "./StepperControl";
import { StepperContext } from "../contexts/StepperContext";
import StepOne from "./steps/StepOne";
import StepTwo from "./steps/StepTwo";
import StepThree from "./steps/StepThree";
import StepFour from "./steps/StepFour";
import Final from "./steps/Final";

function RegistrationForm() {
  const steps = [
    "Step 1",
    "Step 2",
    "Step 3",
    "Complete"
  ];

  const [currentStep, setCurrentStep] = useState(1);

  const handleSubmit = () => {
    // Define your form submission logic here
  };

  const validationSchemas = [
    Yup.object().shape({
      fullName: Yup.string().required('Full name is required'),
      dob: Yup.date().required('Date of birth is required'),
      gender: Yup.string().required('Gender is required'),
      address: Yup.string().required('Address is required'),
      state: Yup.string().required('State is required'),
      lga: Yup.string().required('Local government area is required'),
    }),
    Yup.object().shape({
      phoneNumber: Yup.string().matches(/^\d{11}$/, 'Phone number must be 11 digits').required('Phone number is required'),
      nin: Yup.string().matches(/^\d{11}$/, 'NIN must be 11 digits').required('NIN is required'),
      highestQualification: Yup.string().required('Highest qualification is required'),
      certificateFile: Yup.mixed().required('Please upload your academic certificate'),
    }),
    Yup.object().shape({
      selectedAvailableIdCard: Yup.string().required('Select an available ID card'),
      frontOfIdCard: Yup.mixed().required('Upload the front of the selected ID card'),
      backOfIdCard: Yup.mixed().required('Upload the back of the selected ID card'),
      selectedPreferredCourse: Yup.string().required('Select a preferred course'),
    }),
    Yup.object().shape({
      selectedHearAboutUs: Yup.string().required('Please select how you heard about us.'),
      isTermsChecked: Yup.boolean().oneOf([true], 'Please accept the terms and conditions.'),
    }),
  ];

  const displayStep = (step) => {
    switch (step) {
      case 1:
        return <StepOne />;
      case 2:
        return <StepTwo />;
      case 3:
        return <StepThree />;
      case 4:
        return <StepFour />;
      default:
        return null;
    }
  };

  return (
    <div className="md:w-1/2 mx-auto shadow-xl rounded-2xl pb-2 bg-[#ffffff]">
      {/* Stepper */}
      <div className="container horizontal mt-2"> 
        <Stepper 
          steps={steps}
          currentStep={currentStep}
        />
      </div>
     
      {/* Display components */}
      <div className="my-2 p-6">
        <StepperContext.Consumer>
          {({ userData= {}, setUserData }) => (
            <Formik
              initialValues={userData}
              validationSchema={validationSchemas[currentStep - 1]}
              onSubmit={(values, { setSubmitting }) => {
                // Handle form submission logic here
                setCurrentStep(currentStep + 1);
              }}
            >
              {({ values, setFieldValue, handleSubmit }) => (
                <form onSubmit={handleSubmit}>
                  {displayStep(currentStep)}
                </form>
              )}
            </Formik>
          )}
        </StepperContext.Consumer>
      </div>

      {/* Navigation controls */}
      {currentStep !== steps.length &&
        <StepperControl 
          steps={steps}
          currentStep={currentStep}
          handleSubmit={handleSubmit}
          handleClick={(action) => {
            if (action === 'back') {
              setCurrentStep(currentStep - 1);
            } else if (action === 'next') {
              handleSubmit();
            }
          }}
        />
      }
    </div>
  );
}

export default RegistrationForm;

