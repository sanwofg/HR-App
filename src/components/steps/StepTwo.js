// import { useState, useContext } from "react";
// import { StepperContext } from "../../contexts/StepperContext";

// export default function StepTwo() {
//   const { userData, setUserData } = useContext(StepperContext);
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [nin, setNIN] = useState("");
//   // const [certificateFile, setCertificateFile] = useState(null);

//   const [selectedHighestQualification, setSelectedHighestQualification] =
//     useState("");
//   const [
//     isHighestQualificationDropdownOpen,
//     setIsHighestQualificationDropdownOpen,
//   ] = useState(false);
//   const eduQualificationOptions = [
//     "SSCE",
//     "Bachelor's Degree",
//     "Master's Degree",
//     "PhD",
//   ];
//   const [phoneNumberError, setPhoneNumberError] = useState("");
//   const [ninError, setNINError] = useState("");

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setUserData({ ...userData, [name]: value });
//   };

//   const handleHighestQualificationSelect = (highestqualification) => {
//     setSelectedHighestQualification(highestqualification);
//     setIsHighestQualificationDropdownOpen(false);
//   };

//   const handlePhoneNumberChange = (e) => {
//     const input = e.target.value;
//     if (/^\d*$/.test(input) && input.length <= 11) {
//       setPhoneNumber(input);
//       setPhoneNumberError("");
//     } else {
//       setPhoneNumberError("11 digits are required.");
//     }
//   };

//   const handleNINChange = (e) => {
//     const input = e.target.value;
//     if (/^\d*$/.test(input) && input.length <= 11) {
//       setNIN(input);
//       setNINError("");
//     } else {
//       setNINError("11 digits are required.");
//     }
//   };

//   // const handleCertificateFileChange = (e) => {
//   //   const file = e.target.files[0];
//   //   setCertificateFile(file);
//   // };

//   //  // Validation logic for phone number
//   if (!phoneNumber.trim() || phoneNumber.length !== 11 || isNaN(phoneNumber)) {
//     setPhoneNumberError("Please enter a valid 11-digit phone number.");
//     return;
//   } else {
//     setPhoneNumberError("");

//     // Validation logic for NIN
//     if (!nin.trim() || nin.length !== 11 || isNaN(nin)) {
//       setNINError("Please enter a valid 11-digit NIN.");
//       return;
//     } else {
//       setNINError("");
//     }

import React, { useState, useContext } from "react";
import { StepperContext } from "../../contexts/StepperContext";

export default function StepTwo() {
  const { userData, setUserData } = useContext(StepperContext);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [nin, setNIN] = useState("");
  const [selectedHighestQualification, setSelectedHighestQualification] =
    useState("");
  const [
    isHighestQualificationDropdownOpen,
    setIsHighestQualificationDropdownOpen,
  ] = useState(false);
  const eduQualificationOptions = [
    "SSCE",
    "Bachelor's Degree",
    "Master's Degree",
    "PhD",
  ];
  const [phoneNumberError, setPhoneNumberError] = useState("");
  const [ninError, setNINError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleHighestQualificationSelect = (highestqualification) => {
    setSelectedHighestQualification(highestqualification);
    setIsHighestQualificationDropdownOpen(false);
  };

  const handlePhoneNumberChange = (e) => {
    const input = e.target.value;
    if (/^\d*$/.test(input) && input.length <= 11) {
      setPhoneNumber(input);
      setPhoneNumberError("");
    } else {
      setPhoneNumberError("11 digits are required.");
    }
  };

  const handleNINChange = (e) => {
    const input = e.target.value;
    if (/^\d*$/.test(input) && input.length <= 11) {
      setNIN(input);
      setNINError("");
    } else {
      setNINError("11 digits are required.");
    }
  };

  const handleNext = () => {
    // Validation logic for phone number
    if (
      !phoneNumber.trim() ||
      phoneNumber.length !== 11 ||
      isNaN(phoneNumber)
    ) {
      setPhoneNumberError("Please enter a valid 11-digit phone number.");
      return;
    } else {
      setPhoneNumberError("");

      // Validation logic for NIN
      if (!nin.trim() || nin.length !== 11 || isNaN(nin)) {
        setNINError("Please enter a valid 11-digit NIN.");
        return;
      } else {
        setNINError("");
      }

    }
  };

  return (
    <div className="flex flex-col">
      <div className="w-full mx-2 flex-1">
        {/* Phone Number & NIN Section*/}
        <div className="mt-2 max-md:max-w-full">
          <div className="flex max-md:flex-col gap-4 max-md:items-stretch max-md:gap-0">
            <div className="items-stretch flex grow flex-col max-md:max-w-full max-md:mt-2.5 lg:w-1/2">
              <div className="text-black text-lg font-semibold max-sm:text-xs max-md:max-w-full">
                Phone Number
              </div>
              <input
                className={`text-black text-lg max-sm:text-xs justify-center border mt-2 pl-6 rounded-xl h-[32px] border-solid ${
                  phoneNumberError ? "border-[#f44336]" : " border-[#388e3c]"
                } items-start max-md:max-w-full max-md:px-5`}
                type="number"
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
                placeholder="08012345678"
              />
              {phoneNumberError && (
                <p className="text-[#f44336] mt-1">{phoneNumberError}</p>
              )}
            </div>

            <div className="items-stretch flex grow flex-col max-md:max-w-full max-md:mt-2 lg:w-1/2">
              <div className="text-[#000000] text-lg font-semibold max-sm:text-xs max-md:max-w-full">
                NIN
              </div>
              <input
                className="text-[#000000] text-lg max-sm:text-xs justify-center border mt-2 max-sm:pr-6 pl-6 rounded-xl h-[32px] border-solid border-[#388e3c]"
                type="number"
                value={nin}
                onChange={handleNINChange}
                placeholder="Enter NIN"
              />
              {ninError && <p className="text-[#f44336] mt-1">{ninError}</p>}
            </div>
          </div>
        </div>

        {/* HIGHEST QUALIFICATION SECTION */}
        <div className="items-stretch grow flex flex-col max-md:max-w-full lg:w-full max-sm:mt-1 max-md:mt-2">
          <div className="text-[#000000] text-lg font-semibold mt-2 max-sm:pb-2 max-sm:text-xs max-md:max-w-full">
            Highest Educational Qualification
          </div>
          <div className="relative">
            <select
              className="mt-2 px-6 h-[32px] border-solid w-full border border-[#388e3c] rounded-xl"
              onClick={() =>
                setIsHighestQualificationDropdownOpen(
                  !isHighestQualificationDropdownOpen
                )
              }
              style={{ color: selectedHighestQualification ? '#000000' : '#808080' }}
            >
              <option
                className={`max-sm:pt-2 grow max-sm:text-xs ${
                  selectedHighestQualification
                    ? "text-[#388e3c]"
                    : "text-[#9ca3af] italic"
                }`}
              >
                {selectedHighestQualification ||
                  "Select most recent qualification"}
              </option>
            </select>
            {isHighestQualificationDropdownOpen && (
              <div className="absolute flex flex-col mt-2 max-sm:mt-1 w-full bg-[#ffffff] border border-solid border-[#388e3c] rounded-md">
                {eduQualificationOptions.map((option) => (
                  <div key={option}
                    className="p-2 cursor-pointer hover:bg-[#d1d5db]"
                    onClick={() => handleHighestQualificationSelect(option)}
                  >
                    {option}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Upload academic certificate */}
        <div className="text-[#000000] text-lg font-semibold max-sm:text-xs mt-2  max-sm:pb-2 max-md:max-w-full">
          Upload certificate
        </div>
        <div className="items-stretch border flex justify-between py-1 rounded-xl border-solid border-[#388e3c] max-md:max-w-full max-md:flex-wrap">
          <input
            className="text-[#000000] max-sm:text-xs text-start pl-2 text-lg grow my-auto max-md:max-w-full"
            type="file"
          />
        </div>
      </div>
    </div>
  );
}
