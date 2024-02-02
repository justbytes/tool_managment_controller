import React, { useEffect, useState } from "react";
import axios from "axios";

import Dropdown from "./Dropdown";
import UpdateModal from "./UpdateModal";

import { Tool, AddProps } from "../../interface/interface";

import "./components.css";

const UpdateTool: React.FC<AddProps> = () => {
  const initalTool: Tool = {
    id: 0,
    tool_part_number: "",
    tool_serial_number: "",
    tool_manufacturer: "",
    tool_cal_date: "",
  };
  const [modal, setModal] = useState<boolean>(false);
  const [tool, setTool] = useState<Tool>(initalTool);
  const [tools, setTools] = useState<Tool[]>([]);
  const [option, setOption] = useState<string>("Part Number");
  const options = ["Part Number", "Serial Number", "Manufacturer"];

  useEffect(() => {
    // Define the async function
    const fetchData = async () => {
      try {
        const response = await axios.get<Tool[]>(
          "http://localhost:3001/retrieve/get/allTools"
        );
        const data = response.data;
        console.log("this is from the useEffect:", data);
        setTools(data);
      } catch (error) {
        // Handle the error
        console.error("Error fetching data: ", error);
      }
    };

    // Call the async function
    fetchData();
  }, []);

  const handleSearch = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log(tools);

    setModal(true);
  };

  const handleSelect = (value: string) => {
    console.log("Selected:", value);
    setOption(value);
  };

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
              <UpdateModal setTool={setTool} tool={tool} />
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
