import {useState, useContext} from 'react'
import {StepperContext} from '../../contexts/StepperContext'

export default function StepThree () {
  const {userData, setUserData} = useContext(StepperContext);

  const [selectedAvailableIdCard, setSelectedAvailableIdCard] = useState("");
  const [isAvailableIdCardDropdownOpen, setIsAvailableIdCardDropdownOpen] = useState(false);
  const idCardOptions = ["Passport", "Driver's Licence", "National ID Card", "Permanent Voter's Card"];

  
  const [selectedPreferredCourse, setSelectedPreferredCourse] = useState("");
  const [isPreferredCourseDropdownOpen, setIsPreferredCourseDropdownOpen] = useState(false);
  const preferredCourseOptions = ["Software Development/Testing", "Data Analysis", "Digital Marketing", "UI/UX Design", "Machine Learning/Automation"];

const handleChange =(e)=> {
  const { name, value } = e.target;
  setUserData({ ...userData, [name]: value});
};


const handleAvailableCardSelect = (availableidcard) => {
  setSelectedAvailableIdCard(availableidcard);
  setIsAvailableIdCardDropdownOpen(false);
};

const handlePreferredCourseSelect = (preferredcourse) => {
  setSelectedPreferredCourse(preferredcourse);
  setIsPreferredCourseDropdownOpen(false);
};

return (
  <div className='flex flex-col'>
    <div className='w-full mx-2 flex-1'>

{/* SUPPORTING DOCUMENTS SECTION */}
      <div className="items-stretch grow flex flex-col max-md:max-w-full lg:w-full max-sm:mt-1 max-md:mt-2">
        <div className="text-black text-lg font-semibold mt-2 max-sm:text-xs max-md:max-w-full">Supporting Documents</div>
        <div className="relative">
          <select
            className="mt-2 px-6 h-[32px] border-solid w-full border border-[#2f8d47] rounded-md"
            onClick={() => setIsAvailableIdCardDropdownOpen(!isAvailableIdCardDropdownOpen)}>
            <option className={`max-sm:pt-2 grow max-sm:text-xs ${selectedAvailableIdCard ? 'text-black' : 'text-[#9ca3af] italic'}`}>{selectedAvailableIdCard || 'Select Available ID Card'}</option>
          </select>
          {isAvailableIdCardDropdownOpen && (
            <div className="absolute flex flex-col mt-2 max-sm:mt-1 w-full bg-[#ffffff] border border-solid border-[#2f8d47] rounded-md">
              {idCardOptions.map((option) => (
                <div key={option} className="p-2 cursor-pointer hover:bg-[#d1d5db] max-sm:text-xs" onClick={() => handleAvailableCardSelect(option)}>
                  {option}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="text-black text-lg font-semibold mt-2 max-sm:text-xs max-md:max-w-full">Upload ID Card</div>
      <div className="items-stretch border flex flex-col px-2 rounded-xl mt-2 border-solid border-[#2f8d47] max-md:max-w-full max-md:px-5">
        <form>
          {/* Upload front of selected ID Card */}
          <div className="text-black text-lg font-semibold mt-2 max-sm:text-xs max-md:max-w-full">Upload front of selected ID Card</div>
          <div className="items-stretch border flex justify-between pl-1 py-1 rounded-l border-solid border-[#2f8d47] max-md:max-w-full max-md:flex-wrap">
            <input className="text-black text-start text-lg grow my-auto max-sm:text-xs max-md:max-w-full" type="file" />
          </div>

          {/* Upload back of selected ID Card */}
          <div className="mb-2">
            <div className="text-black text-lg font-semibold mt-2 max-sm:text-xs max-md:max-w-full">Upload back of selected ID Card</div>
            <div className="items-stretch border flex justify-between pl-1 py-1 rounded-l border-solid border-[#2f8d47] max-md:max-w-full max-md:flex-wrap">
              <input className="text-black text-start text-lg grow my-auto max-sm:text-xs max-md:max-w-full" type="file" />
            </div>
          </div>
        </form>
      </div>

    {/* PREFERRED COURSE SECTION */}
<div className="items-stretch grow flex flex-col max-md:max-w-full lg:w-full max-sm:mt-1 max-md:mt-2">
  <div className="text-black text-lg font-semibold mt-2 max-sm:text-xs max-md:max-w-full">Preferred Course</div>
  <div className='relative'>
    <select
      className="mt-2 px-6 h-[32px] border-solid w-full border border-green-700 rounded-md"
      onClick={() => setIsPreferredCourseDropdownOpen(!isPreferredCourseDropdownOpen)}>
      <option className={`max-sm:pt-2 grow max-sm:text-xs ${selectedPreferredCourse ? 'text-black' : 'text-[#9ca3af] italic'}`}>{selectedPreferredCourse || 'Select preferred course'}</option>
    </select>
    {isPreferredCourseDropdownOpen && (
      <div className="absolute flex flex-col mt-2 max-sm:text-sm max-sm:mt-1 w-full bg-[#ffffff] border border-solid border-green-700 rounded-md">
        {preferredCourseOptions.map((option) => (
          <div key={option} className="p-2 cursor-pointer hover:bg-[#d1d5db]" onClick={() => handlePreferredCourseSelect(option)}>
            {option}
          </div>
        ))}
      </div>
    )}
  </div>
</div>

  </div>
</div>
)

}
