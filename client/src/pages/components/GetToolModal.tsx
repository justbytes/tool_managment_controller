import React, { useEffect, useState } from "react";
import axios from "axios";

import useTools from "../ContextProviders/useTools";
import SearchForm from "./SearchForm";
import { formatDate } from "./FormatDate";
import Dropdown from "../components/Dropdown";

import { Tool, GetToolProps } from "../../interface/interface";

import "../../css/GetToolModal.css";

const GetToolModal: React.FC<GetToolProps> = ({
  addToolsUtilized,
  setModal,
}) => {
  const { tools, setTools, refreshData } = useTools();
  const options = ["Part Number", "Serial Number", "Manufacturer"];
  const [option, setOption] = useState<string>("Part Number");
  const [searchInput, setSearchInput] = useState<string>("");
  const [filteredTools, setFilteredTools] = useState<Tool[]>([]);
  const [filter, setFilter] = useState<boolean>(false);

  useEffect(() => {
    refreshData();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchInput(value);
    console.log("this is value:", value);
  };

  const handleSearch = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    setFilter(true);

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
    refreshData();
  };

  console.log(filteredTools);

  return (
    <>
      <div className="get-tool-modal-form">
        <div className="search-box">
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
        </div>
        <div
          className="get-tool-modal"
          onClick={(e) => {
            setModal(false);
            e.stopPropagation();
          }}
        >
          {filter
            ? filteredTools.map((tool: Tool) => (
                <div
                  className="get-tool-modal-list"
                  onClick={() => {
                    addToolsUtilized(tool);
                    setModal(true);
                  }}
                  key={tool.id}
                >
                  <div className="get-tool-modal-list-container">
                    <div className="get-tool-modal-description">
                      <p className="get-tool-modal-results">Part Number</p>
                    </div>
                    <div className="get-tool-description-value">
                      <p className="get-tool-modal-results">
                        {tool.tool_part_number}
                      </p>
                    </div>
                  </div>
                  <div className="get-tool-modal-list-container">
                    <div className="get-tool-modal-description">
                      <p className="get-tool-modal-results">Serial Number</p>
                    </div>
                    <div className="get-tool-description-value">
                      <p className="get-tool-modal-results">
                        {tool.tool_serial_number}
                      </p>
                    </div>
                  </div>
                  <div className="get-tool-modal-list-container">
                    <div className="get-tool-modal-description">
                      <p className="get-tool-modal-results">Manufacturer</p>
                    </div>
                    <div className="get-tool-description-value">
                      <p className="get-tool-modal-results">
                        {tool.tool_manufacturer}
                      </p>
                    </div>
                  </div>
                  <div className="get-tool-modal-list-container">
                    <div className="get-tool-modal-description">
                      <p className="get-tool-modal-results">Cal Due Date</p>
                    </div>
                    <div className="get-tool-description-value">
                      <p className="get-tool-modal-results">
                        {formatDate(tool.tool_cal_date)}
                      </p>
                    </div>
                  </div>
                </div>
              ))
            : tools.map((tool: Tool) => (
                <div
                  className="get-tool-modal-list"
                  onClick={() => {
                    addToolsUtilized(tool);
                    setModal(true);
                  }}
                  key={tool.id}
                >
                  <div className="get-tool-modal-list-container">
                    <div className="get-tool-modal-description">
                      <p className="get-tool-modal-results">Part Number</p>
                    </div>
                    <div className="get-tool-description-value">
                      <p className="get-tool-modal-results">
                        {tool.tool_part_number}
                      </p>
                    </div>
                  </div>
                  <div className="get-tool-modal-list-container">
                    <div className="get-tool-modal-description">
                      <p className="get-tool-modal-results">Serial Number</p>
                    </div>
                    <div className="get-tool-description-value">
                      <p className="get-tool-modal-results">
                        {tool.tool_serial_number}
                      </p>
                    </div>
                  </div>
                  <div className="get-tool-modal-list-container">
                    <div className="get-tool-modal-description">
                      <p className="get-tool-modal-results">Manufacturer</p>
                    </div>
                    <div className="get-tool-description-value">
                      <p className="get-tool-modal-results">
                        {tool.tool_manufacturer}
                      </p>
                    </div>
                  </div>
                  <div className="get-tool-modal-list-container">
                    <div className="get-tool-modal-description">
                      <p className="get-tool-modal-results">Cal Due Date</p>
                    </div>
                    <div className="get-tool-description-value">
                      <p className="get-tool-modal-results">
                        {formatDate(tool.tool_cal_date)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </>
  );
};

export default GetToolModal;
