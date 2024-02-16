import { useState, useContext } from 'react';
import { StepperContext } from '../../contexts/StepperContext';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import StatesAndLGAs from "./necessarydata.json";

export default function StepOne() {
  const { userData, setUserData, setCurrentStep, totalSteps } = useContext(StepperContext);

  const [fullName, setFullName] = useState("");
  const [dob, setDob] = useState(null);
  const [selectedGender, setSelectedGender] = useState("");
  const [genderOptions] = useState(["Male", "Female"]);
  const [address, setAddress] = useState("") 

  // Error states
  const [fullNameError, setFullNameError] = useState("");
  const [dobError, setDobError] = useState("");
  const [genderError, setGenderError] = useState("");
  const [addressError, setAddressError] = useState("");
  const [stateError, setStateError] = useState("");
  const [lgaError, setLgaError] = useState("");

  const handleBlur = (field, value) => {
    switch (field) {
      case "fullName":
        setFullNameError(value.trim() ? "" : "*This is a required field.");
        break;
      case "dob":
        setDobError(value ? "" : "*This is a required field.");
        break;
      case "gender":
        setGenderError(value ? "" : "*This is a required field.");
        break;
      case "address":
        setAddressError(value.trim() ? "" : "*This is a required field.");
        break;
      case "state":
        setStateError(value ? "" : "*This is a required field.");
        break;
      case "lga":
        setLgaError(value ? "" : "*This is a required field.");
        break;
      default:
        break;
    }
  };

  return (
    <div className='flex flex-col'>
      <div className="container mx-auto px-4 lg:px-0 bg-white">
        <div className="max-w-2xl mx-auto ">
          <div className="text-black font-semibold text-lg max-md:max-w-full max-md:mt-2 max-sm:text-xs max-sm:mt-1">
            Full Name (as it appears in your documents)
            <input
              className={`w-full items-center border flex shrink-0 h-[32px] py-2 flex-col max-md:max-w-full mt-2 pl-5 rounded-xl ${fullNameError ? 'border-red-500' : 'border-solid border-green-700'}`}
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              onBlur={() => handleBlur("fullName", fullName)}
              placeholder="Enter your full name"
            />
            {fullNameError && <p className="text-[#ef4444] max-sm:text-xs mt-1">{fullNameError}</p>}
          </div>

          <div className="mt-2 max-sm:mt-1 max-md:max-w-full ">
            <div className="gap-4 flex max-md:flex-col max-md:items-stretch max-md:gap-0 ">
              <div className="items-stretch grow flex flex-col max-md:max-w-full lg:w-1/2 max-md:mt-2 max-sm:mt-1">
                <div className="text-black text-lg font-semibold max-md:max-w-full  max-sm:text-xs">Date of Birth</div>
                <div className="items-stretch border flex justify-between h-[32px] focus:outline-none gap-0 mt-2 px-6 rounded-xl border-solid border-green-700 max-md:max-w-full max-md:flex-wrap max-md:px-5">
                  <div className="max-sm:pt-2 text-black focus:outline-none text-lg grow max-sm:text-xs">{}
                    <DatePicker selected={dob} onChange={setDob} placeholderText="MM/DD/YYYY" onBlur={() => handleBlur("dob", dob)} />
                  </div>
                </div>
                {dobError && <p className="text-[#ef4444] mt-1">{dobError}</p>}
              </div>

              <div className="items-stretch grow flex flex-col max-md:max-w-full lg:w-1/2 max-sm:mt-1 max-md:mt-2">
                <div className="text-black text-lg font-semibold max-md:max-w-full max-sm:text-xs">Gender</div>
                  <div className='relative'>
                    <select
                      className="mt-2 px-6 h-[32px] border-solid w-full border border-green-700 rounded-md"
                      value={selectedGender}
                      onChange={(e) => setSelectedGender(e.target.value)}
                      onBlur={() => handleBlur("gender", selectedGender)}
                    >
                      <option value="" disabled>Select</option>
                      {genderOptions.map((option) => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                  </div>
                  {genderError && <p className="text-[#ef4444] mt-1 max-sm:text-xs">{genderError}</p>}
                </div>
            </div>
          </div>

          {/* Address Section */}
          <div className="text-black text-lg max-sm:mt-1 font-semibold max-sm:text-xs mt-2 max-md:max-w-full">
            Contact Address
          </div>
          <div className="items-stretch flex justify-between gap-5 mt-2 max-sm:mt-1 max-md:max-w-full max-md:flex-wrap">
            <input
              className={`text-black text-lg justify-center max-sm:text-xs items-stretch border grow px-6 h-[32px] rounded-xl border-solid ${addressError ? 'border-red-500' : 'border-green-700'} max-md:max-w-full max-md:px-5`}
              placeholder="Home Address"
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              onBlur={() => handleBlur("address", address)}
            />
            {addressError && <p className="text-[#ef4444] max-sm:text-xs mt-1">{addressError}</p>}
          </div>

          {/* LGA/State Field */}
          <div className="items-stretch max-sm:mt-1 flex justify-evenly gap-1.5 max-md:max-w-full mt-2 max-md:flex-wrap">
            <div className={`flex items-stretch border max-sm:mt-1 justify-between max-sm:text-xs h-[32px] mt-2 px-6 w-full rounded-xl border-solid ${stateError ? 'border-red-500' : 'border-green-700'} max-md:max-w-full max-md:flex-wrap lg:w-1/2 max-md:px-5`}>
              <select
                value={userData.state}
                onChange={(e) => setUserData({ ...userData, state: e.target.value })}
                name='state'
                className='text-black max-sm:text-xs text-lg grow'>
                  <option value=''>Select State</option>
                  {StatesAndLGAs.map((state) => (
                    <option key={state.state} value={state.state}>{state.state}</option>
                  ))}
                </select>
            </div>

            <div className={`flex items-stretch border max-sm:mt-1 justify-between max-sm:text-xs h-[32px] mt-2 px-6 w-full rounded-xl border-solid ${lgaError ? 'border-red-500' : 'border-green-700'} max-md:max-w-full max-md:flex-wrap lg:w-1/2 max-md:px-5`}>
              <select
                value={userData.lga}
                onChange={(e) => setUserData({ ...userData, lga: e.target.value })}
                name='lga'
                className='text-black max-sm:text-xs text-lg grow'>
                  <option value=''>Select LGA</option>
                  {userData.state &&
                  StatesAndLGAs.find((state) => state.state === userData.state)?.lgas.map((lga) => (
                    <option key={lga} value={lga}>{lga}</option>
                  ))}
                </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
