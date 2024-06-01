import React from "react";

const TextField = ({ label, inputType, placeholder }) => {
  return (
    <div className="w-full flex flex-col gap-1">
      <label htmlFor={label} className="text-sm font-medium">
        {label}
      </label>
      <input
        type={inputType}
        id={label}
        placeholder={placeholder}
        className="w-full border rounded-lg px-3 py-3 text-sm focus:ring-[#64B5AC] focus:border-[#64B5AC] outline-[#64B5AC]"
      />
    </div>
  );
};

export default TextField;
// focus:ring-blue-500 focus:border-blue-500
