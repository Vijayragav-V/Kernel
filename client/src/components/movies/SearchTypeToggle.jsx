import React, { useState } from 'react';

const ToggleButton = ({ onClick }) => {
  const [isActive, setIsActive] = useState(false);

  const toggleButton = () => {
    setIsActive(!isActive);
    onClick && onClick(!isActive);
  };

  return (
    <div className="relative">
      <button
        className={`flex items-center justify-center w-12 h-6 rounded-full focus:outline-none transition-transform duration-300 ${
          isActive ? 'bg-blue-500' : 'bg-gray-300'
        }`}
        onClick={toggleButton}
      >
        <div
          className={`absolute left-0 w-6 h-6 rounded-full bg-white shadow-md transform transition-transform duration-300 ${
            isActive ? 'translate-x-full' : ''
          }`}
        />
      </button>
      <div
        className={`absolute inset-0 opacity-25 ${
          isActive ? 'visible' : 'invisible'
        }`}
        onClick={toggleButton}
      />
    </div>
  );
};

export default ToggleButton;
