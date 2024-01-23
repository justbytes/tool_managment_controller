import React, { useState } from "react";
import axios from "axios";

import UpdateModal from "./UpdateModal";

import { Tool, AddProps } from "../../interface/interface";

import "./components.css";
import Dropdown from "./Dropdown";

const UpdateTool: React.FC<AddProps> = ({ handleItemManagementHome }) => {
  const initalTool: Tool = {
    tool_part_number: "",
    tool_serial_number: "",
    tool_manufacturer: "",
    tool_cal_date: "",
  };
  const [modal, setModal] = useState<boolean>(false);
  const [tool, setTool] = useState<Tool>(initalTool);
  const [option, setOption] = useState<string>("Part Number");
  const options = ["Part Number", "Serial Number", "Manufacturer"];

  const handleSearch = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setModal(true);
  };

  const handleSelect = (value: string) => {
    console.log("Selected:", value);
    setOption(value);
  };

  return (
    <>
      <h1>Update Tool</h1>

      <div className="update-tool-container">
        <form className="search-form">
          <h2>Search</h2>
          <div className="search-div">
            <div className="search-input-div">
              <input
                type="search"
                id="search-input"
                className="search-input"
                placeholder={`Enter ` + option}
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
          <h2>View tools by:</h2>
          <div className="find-all">
            <a className="find-all-option">View All</a>
            <a className="find-all-option">Part Number</a>
            <a className="find-all-option">Manufacturer</a>
          </div>
        </form>

        {modal ? (
          <div className="update-choice">
            <UpdateModal
              setTool={setTool}
              tool={tool}
              handleItemManagementHome={handleItemManagementHome}
            />
          </div>
        ) : (
          <div className="update-choice">
            <p>Please search for a tool.</p>
            <button onClick={handleItemManagementHome}>back</button>
          </div>
        )}
      </div>
    </>
  );
};

export default UpdateTool;
