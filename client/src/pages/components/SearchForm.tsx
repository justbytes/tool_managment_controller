import React, { useState } from "react";
import Dropdown from "../components/Dropdown";

import useTools from "../ContextProviders/useTools";

import "../../css/SearchForm.css";

const SearchForm: React.FC = () => {
  const { tools, setTools, refreshData } = useTools();
  // List of options for the dropdown component
  const options = ["Part Number", "Serial Number", "Manufacturer"];
  const [option, setOption] = useState<string>("Part Number");
  const [searchInput, setSearchInput] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;

    if (value === "") {
      refreshData();
    }
    setSearchInput(value);
  };

  const handleSearch = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    let filteredTools = tools;

    if (option === "Part Number") {
      filteredTools = tools.filter((tool) =>
        tool.tool_part_number
          .toLowerCase()
          .startsWith(searchInput.toLowerCase())
      );
    } else if (option === "Serial Number") {
      filteredTools = tools.filter((tool) =>
        tool.tool_serial_number
          .toLowerCase()
          .startsWith(searchInput.toLowerCase())
      );
    } else if (option === "Manufacturer") {
      filteredTools = tools.filter((tool) =>
        tool.tool_manufacturer
          .toLowerCase()
          .startsWith(searchInput.toLowerCase())
      );
    }

    setTools(filteredTools);
  };

  const handleSelect = (value: string) => {
    console.log("Selected:", value);
    setOption(value);
    setSearchInput("");
    refreshData();
  };

  return (
    <form className="search">
      <div className="search-div">
        <div className="search-input-div">
          <input
            type="search"
            id="search-input"
            className="search-input"
            placeholder={`Enter ` + option}
            value={searchInput || ""}
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
    </form>
  );
};

export default SearchForm;
