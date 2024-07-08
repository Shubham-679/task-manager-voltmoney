import React from "react";
import "../../Assets/Styles/Components/Checkbox.css";

export default function Checkbox(props) {
  const { checked, onChange, disabled, name } = props;
  return (
    <div className="ml-2 mr-3">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="cursor-pointer checkbox before:bg-[#25273D] bg-[#393A4B] before:transition-colors 
		before:duration-500 focus:outline-none focus:outline-offset-2 focus:outline-accent 
		focus:outline-2 transition-colors duration-500"
        name={name}
        disabled={disabled}
      />
    </div>
  );
}
