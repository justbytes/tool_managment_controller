import React, { useEffect, useState } from "react";

import useTools from "../ContextProviders/useTools";

// Import components from components dir...
import Dropdown from "../components/Dropdown";
import ToolModal from "../components/ToolModal";

// Import Interfaces
import { Tool, AddProps } from "../../interface/interface";

// Import CSS
import "../../css/UpdateTool.css";

const UpdateTool: React.FC = () => {
  // Used to sanatize inputs
  const initalTool: Tool = {
    id: 0,
    assosiated_work_order: 0,
    tool_part_number: "",
    tool_serial_number: "",
    tool_manufacturer: "",
    tool_cal_date: "",
  };
  const { tools, setTools, refreshData } = useTools();
  // State variables
  const [modal, setModal] = useState<boolean>(false);
  const [tool, setTool] = useState<Tool>(initalTool);
  const [option, setOption] = useState<string>("Part Number");
  const [searchInput, setSearchInput] = useState<string>("");

  // List of options for the dropdown component
  const options = ["Part Number", "Serial Number", "Manufacturer"];

  useEffect(() => {
    refreshData();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  // this function filters the list of tools coming from the database based of a conditional
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

  // This is for the dropdown
  // Anytime a user selects a different option this it will
  // change the options state and clear the input form previous searches
  const handleSelect = (value: string) => {
    console.log("Selected:", value);
    setOption(value);
    setSearchInput("");
    refreshData();
  };

  // Formats the date to trim any extra characters3

  const formatDate = (tool_date: string): string => {
    const date = new Date(tool_date);
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${month}-${day}-${year}`;
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
          <h2>View tools by:</h2>
          <div className="find-all">
            <a className="find-all-option">View All</a>
            <a className="find-all-option">Part Number</a>
            <a className="find-all-option">Manufacturer</a>
          </div>
        </form>

        {modal && (
          <div className="modal-backdrop" onClick={() => setModal(false)}>
            <div
              className="modal modal-active"
              onClick={(e) => e.stopPropagation()}
            >
              <ToolModal
                setTool={setTool}
                setModal={setModal}
                tool={tool}
                refreshData={refreshData}
              />
            </div>
          </div>
        )}
        <div className="update-choice">
          <div className="tool-card">
            {tools.map((tool) => (
              <div
                className="tool-list"
                onClick={() => {
                  setTool(tool);
                  setModal(true);
                }}
                key={tool.id}
              >
                <div className="tool-list-container">
                  <div className="description">
                    <p className="t">ID</p>
                  </div>
                  <div className="description-value">
                    <p className="t">{tool.id}</p>
                  </div>
                </div>
                <div className="tool-list-container">
                  <div className="description">
                    <p className="t">Part Number</p>
                  </div>
                  <div className="description-value">
                    <p className="t">{tool.tool_part_number}</p>
                  </div>
                </div>
                <div className="tool-list-container">
                  <div className="description">
                    <p className="t">Serial Number</p>
                  </div>
                  <div className="description-value">
                    <p className="t">{tool.tool_serial_number}</p>
                  </div>
                </div>
                <div className="tool-list-container">
                  <div className="description">
                    <p className="t">Manufacturer</p>
                  </div>
                  <div className="description-value">
                    <p className="t">{tool.tool_manufacturer}</p>
                  </div>
                </div>
                <div className="tool-list-container">
                  <div className="description">
                    <p className="t">Cal Due Date</p>
                  </div>
                  <div className="description-value">
                    <p className="t">{formatDate(tool.tool_cal_date)}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateTool;
