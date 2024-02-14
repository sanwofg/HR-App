import { useState } from "react";
import Stepper from "./Stepper";
import StepperControl from "./StepperControl";
import { StepperContext } from "../contexts/StepperContext";
import StepOne from "./steps/StepOne";
import StepTwo from "./steps/StepTwo";
import StepThree from "./steps/StepThree";
import Final from "./steps/Final";
import StepFour from "./steps/StepFour";

function RegistrationForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [userData, setUserData] = useState("");
  const [finalData, setFinalData] = useState("");

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
    }
  };

  const handleClick = (direction) => {
    let newStep = currentStep;

    direction === "next" ? newStep++ : newStep--;

    //check if steps are within bounds
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
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
          handleClick={handleClick}
          currentStep={currentStep}
          steps={steps}
        />
      )}
    </div>
  );
}

export default RegistrationForm;
