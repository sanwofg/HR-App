
import {useState} from "react"
import Stepper from "./Stepper";
import StepperControl from "./StepperControl";
import { StepperContext } from "../contexts/StepperContext";
import StepOne from "./steps/StepOne";
import StepTwo from "./steps/StepTwo";
import StepThree from "./steps/StepThree";
import Final from "./steps/Final";
import StepFour from "./steps/StepFour"

function RegistrationForm( {handleSubmit}) {
  const [currentStep, setCurrentStep] = useState(1);
  const [userData, setUserData] = useState('');
  const [finalData, setFinalData] = useState('')
  const [formData, setFormData] = useState({
    step1: { fullName: "", dob: null, selectedGender: "" },
    step2: { selectedAvailableIdCard: "", selectedPreferredCourse: "" },
    // Add more steps as needed
  });
  const [formErrors, setFormErrors] = useState({
    step1: { fullName: "", dob: "", selectedGender: "" },
    step2: { selectedAvailableIdCard: "", selectedPreferredCourse: "" },
    // Add more steps as needed
  });


  const steps = [
    "Step 1",
    "Step 2",
    "Step 3",
    "Step 4",
    "Complete"
  ]

  const displayStep =(step) => {
    switch (step) {
      case 1:
        return (
        <StepOne
          formData={formData.step1}
          setFormData={(data) => setFormData({ ...formData, step1: data})}
          formErrors={formErrors.step1}
          setFormErrors={(errors) => setFormErrors({ ...formErrors, step1: errors })}
        />
        );
      case 2:
        return <StepTwo />
      case 3:
        return <StepThree />
      case 4:
        return <StepFour />
      case 5:
        return <Final />
      default:
    }
  };

  const handleClick = (direction) => {
    let newStep = currentStep;

    direction === 'next' ? (newStep++) : (newStep--);

    //check if steps are within bounds
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
  };

  const handleFormSubmit = () => {
    handleSubmit();
  }

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
        <StepperContext.Provider value={{
          userData,
          setUserData,
          finalData,
          setFinalData
        }}>
          {displayStep(currentStep)}
        </StepperContext.Provider>
      </div>

      {/* Navigation controls */}
      {currentStep !== steps.length &&
      <StepperControl 
      handleSubmit={handleFormSubmit}
      handleClick={handleClick}
      currentStep={currentStep}
      steps={steps}
      formData={formData[`step${currentStep}`]}
      formErrors={formErrors[`step${currentStep}`]}

      />
      }

    </div>
  )
}

export default RegistrationForm;
