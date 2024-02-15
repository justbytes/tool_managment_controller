import React, { useState } from "react";

import { Tool, ToolProps } from "../../interface/interface";
import Dropdown from "../components/Dropdown";

import "../../css/SearchForm.css";

const SearchForm: React.FC<ToolProps> = ({ tools, setTools }) => {
  // List of options for the dropdown component
  const options = ["Part Number", "Serial Number", "Manufacturer"];
  const [option, setOption] = useState<string>("Part Number");
  const [searchInput, setSearchInput] = useState<string>("");
  const [filteredTools, setFilteredTools] = useState<Tool[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchInput(value);
    console.log("this is value:", value);
  };

  const handleSearch = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    // Immediately use `tools` to filter based on `value`, no need to cast
    let toolsToFilter = tools.filter((tool) => {
      if (option === "Part Number") {
        return tool.tool_part_number
          .toLowerCase()
          .startsWith(searchInput.toLowerCase());
      } else if (option === "Serial Number") {
        return tool.tool_serial_number
          .toLowerCase()
          .startsWith(searchInput.toLowerCase());
      } else if (option === "Manufacturer") {
        return tool.tool_manufacturer
          .toLowerCase()
          .startsWith(searchInput.toLowerCase());
      }
      return false; // Default case if none of the options match
    });

    // Use setFilteredTools to update the local state, not setTools
    setFilteredTools(toolsToFilter);
  };

  const handleSelect = (value: string) => {
    console.log("Selected:", value);
    setOption(value);
    setSearchInput("");
    // refreshData();
  };

  return (
    <div className="search">
      <div className="search-div">
        <div className="search-input-div">
          <input
            type="search"
            id="search-input"
            className="search-input"
            placeholder={`Enter ` + option}
            value={searchInput}
            onChange={handleInputChange}
          />
          <Dropdown
            options={options}
            label="Search By"
            onSelect={handleSelect}
          />
        </div>
      </div>
      <button className="btn" type="submit" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default SearchForm;
