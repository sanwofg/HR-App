// // import { useState } from "react";
// import React, { useState } from "react";
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
//   const [finalData, setFinalData] = useState("");
//   const [userData, setUserData] = useState({
//     fullName: "",
//     dob: null,
//     selectedGender: "",
//     address: "",
//     state: "",
//     lga: "",
//     phoneNumber: "",
//     nin: "",
//     certificateFile: "",
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

//   const steps = ["Step 1", "Step 2", "Step 3", "Step 4", "Complete"];

//   const displayStep = (step) => {
//     switch (step) {
//       case 1:
//         return <StepOne />;
//       case 2:
//         return <StepTwo />;
//       case 3:
//         return <StepThree />;
//       case 4:
//         return <StepFour />;
//       case 5:
//         return <Final />;
//       default:
//         return null;
//     }
//   };

//   const handleClick = (direction) => {
//     let newStep = currentStep;

//     direction === "next" ? newStep++ : newStep--;

//     //check if steps are within bounds
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

//   const handleSubmit = () => {
//     let isValid = true; // Flag to track form validation status

//     // Check if all fields in the current step are filled
//     switch (currentStep) {
//       case 1:
//         const stepOneErrors = {};
//         if (!userData.fullName.trim()) {
//           stepOneErrors.fullName = "*This is a required field.";
//         }
//         if (!userData.dob) {
//           stepOneErrors.dob = "*This is a required field.";
//         }
//         if (!userData.selectedGender) {
//           stepOneErrors.gender = "*This is a required field.";
//         }
//         if (!userData.address.trim()) {
//           stepOneErrors.address = "*This is a required field.";
//         }
//         if (!userData.state) {
//           stepOneErrors.state = "*This is a required field.";
//         }
//         if (!userData.lga) {
//           stepOneErrors.lga = "*This is a required field.";
//         }

//         // Set error messages for StepOne fields
//         setFullNameError(stepOneErrors.fullName || "");
//         setDobError(stepOneErrors.dob || "");
//         setGenderError(stepOneErrors.gender || "");
//         setAddressError(stepOneErrors.address || "");
//         setStateError(stepOneErrors.state || "");
//         setLgaError(stepOneErrors.lga || "");

//         // Proceed to the next step if there are no errors in StepOne
//         // if (Object.keys(stepOneErrors).length === 0) {
//         if (isValid) {
//           setCurrentStep(currentStep + 1);
//         }
//         break;

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
//         // if (!userData.certificateFile) {
//         //   stepTwoErrors.certificateFile =
//         //     "*Please upload your academic certificate.";
//         // }

//         // Set error messages for StepOne fields
//         setPhoneNumberError(stepTwoErrors.phoneNumber || "");
//         setNINError(stepTwoErrors.nin || "");
//         setCertificateFileError(stepTwoErrors.certificateFile || "");

//         // Proceed to the next step if there are no errors in StepOne
//         if (isValid) {
//           setCurrentStep(currentStep + 1);
//         }
//         break;
//       default:
//         break;
//     }
//   };

//   return (
//     <div className="md:w-1/2 mx-auto shadow-xl rounded-2xl pb-2 bg-[#ffffff] absolute max-sm:w-[20rem]">
//       {/* Stepper */}
//       <div className="container horizontal mt-2">
//         <Stepper steps={steps} currentStep={currentStep} />
//       </div>

//       {/* Display components */}
//       <div className="my-2 p-6">
//         <StepperContext.Provider
//           value={{
//             userData,
//             setUserData,
//             finalData,
//             setFinalData,
//           }}
//         >
//           {displayStep(currentStep)}
//         </StepperContext.Provider>
//       </div>

//       {/* Navigation controls */}
//       {currentStep !== steps.length && (
//         <StepperControl
//           handleClick={handleClick}
//           currentStep={currentStep}
//           steps={steps}
//         />
//       )}
//     </div>
//   );
// }

// export default RegistrationForm;

import React, { useState } from "react";
import Stepper from "./Stepper";
import StepperControl from "./StepperControl";
import { StepperContext } from "../contexts/StepperContext";
import StepOne from "./steps/StepOne";
import StepTwo from "./steps/StepTwo";
import StepThree from "./steps/StepThree";
import StepFour from "./steps/StepFour";
import Final from "./steps/Final";

function RegistrationForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [finalData, setFinalData] = useState("");
  const [userData, setUserData] = useState({
    fullName: "",
    dob: null,
    selectedGender: "",
    address: "",
    state: "",
    lga: "",
    phoneNumber: "",
    nin: "",
    certificateFile: "",
  });

  const steps = ["Step 1", "Step 2", "Step 3", "Step 4", "Complete"];

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
      case 5:
        return <Final />;
      default:
        return null;
    }
  };

  const handleClick = (direction) => {
    let newStep = currentStep;

    direction === "next" ? (newStep += 1) : (newStep -= 1);

    // Check if steps are within bounds
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
  };

  const handleSubmit = () => {
    // Proceed to the next step unconditionally
    setCurrentStep(currentStep + 1);
  };

  return (
    <div className="md:w-1/2 mx-auto shadow-xl rounded-2xl pb-2 bg-[#ffffff] absolute max-sm:w-[20rem]">
      {/* Stepper */}
      <div className="container horizontal mt-2">
        <Stepper steps={steps} currentStep={currentStep} />
      </div>

      {/* Display components */}
      <div className="my-2 p-6">
        <StepperContext.Provider
          value={{
            userData,
            setUserData,
            finalData,
            setFinalData,
          }}
        >
          {displayStep(currentStep)}
        </StepperContext.Provider>
      </div>

      {/* Navigation controls */}
      {currentStep !== steps.length && (
        <StepperControl
          steps={steps}
          handleClick={handleClick}
          currentStep={currentStep}
          handleSubmit={handleSubmit}
        />
      )}
    </div>
  );
}

export default RegistrationForm;

