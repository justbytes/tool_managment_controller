import React, { useState } from "react";

interface CustomDropdownProps {
  options: string[];
  label: string;
  onSelect: (value: string) => void;
}

const Dropdown: React.FC<CustomDropdownProps> = ({
  options,
  label,
  onSelect,
}) => {
  const [selectedValue, setSelectedValue] = useState(options[0] || "");

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSelectedValue(value);
    onSelect(value);
  };

  return (
    <div>
      <label htmlFor="custom-dropdown">{label}: </label>
      <select
        id="custom-dropdown"
        value={selectedValue}
        onChange={handleChange}
      >
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
