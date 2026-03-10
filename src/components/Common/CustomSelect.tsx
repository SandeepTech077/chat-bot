import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

interface CustomSelectProps {
  options: string[]; 
  placeholder?: string;
  suffix?: string;
  selected?: string;
  onChange: (option: string) => void; 
}


const CustomSelect = ({
  options,
  placeholder,
  suffix,
  selected,
  onChange,
}: CustomSelectProps) => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the dropdown
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Handle option click
  const handleOptionClick = (option: string) => {
    onChange(option);
    setIsOpen(false); // Close dropdown after selecting an option
  };

  return (
    <div className="relative w-full sm:w-64">
      {/* Select Button */}
      <button
        onClick={toggleDropdown}
        className="w-full pb-2 bg-white border-b-2 border-gray-300 flex justify-between items-center focus:outline-none focus:border-black"
      >
        <span className="text-gray-700  font-semibold	">
          {selected || placeholder || "Select an option"}
        </span>
        {isOpen ? (
          <FaChevronUp className="text-gray-500" />
        ) : (
          <FaChevronDown className="text-gray-500" />
        )}
      </button>
      {suffix && (
        <span className="block mt-1 text-black text-sm">{suffix}</span>
      )}

      {/* Dropdown Options */}
      {isOpen && (
        <div className="absolute left-0 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg z-10">
          {options.map((option, index) => (
            <div
              key={index}
              onClick={() => handleOptionClick(option)}
              className="px-4 py-2 cursor-pointer hover:bg-gray-100"
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomSelect;
