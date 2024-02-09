import React, { useState } from "react";
import axios from "axios";

import { Tool } from "../../interface/interface";

import "../../css/AddTool.css";

const AddTool: React.FC = () => {
  // Used to sanatize inputs
  const initalTool: Tool = {
    id: 0,
    assosiated_work_order: 0,
    tool_part_number: "",
    tool_serial_number: "",
    tool_manufacturer: "",
    tool_cal_date: "",
  };
  // State variables
  const [tool, setTool] = useState<Tool>(initalTool);

  // Adds tool to the database
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(`ADD TOOL SUBMIT`);
    const response = await axios.post("http://localhost:3001/create/Tool", {
      tool,
    });
    const data: string = response.data;

    console.log(data);

    setTool(initalTool);
  };

  // The following update the state of tool when the input changes
  const handlePartNumberChange = (e: React.FormEvent<HTMLInputElement>) => {
    const value = (e.target as HTMLInputElement).value;
    setTool({
      ...tool,
      tool_part_number: value,
    });
  };

  const handleSerialNumberChange = (e: React.FormEvent<HTMLInputElement>) => {
    const value = (e.target as HTMLInputElement).value;
    setTool({
      ...tool,
      tool_serial_number: value,
    });
  };
  const handleManufacturerChange = (e: React.FormEvent<HTMLInputElement>) => {
    const value = (e.target as HTMLInputElement).value;
    setTool({
      ...tool,
      tool_manufacturer: value,
    });
  };

  const handleCalDateChange = (e: React.FormEvent<HTMLInputElement>) => {
    const value = (e.target as HTMLInputElement).value;
    console.log("Cal Date", value);
    setTool({
      ...tool,
      tool_cal_date: value,
    });
  };

  return (
    <>
      <div className="title">
        <h1>Add Tool</h1>
      </div>
      <div className="choice">
        <form className="add-tool-form" onSubmit={handleSubmit}>
          <div className="add-tool">
            <input
              className="add-tool-input"
              type="text"
              onChange={handlePartNumberChange}
              placeholder="Part Number"
              value={tool.tool_part_number || ""}
            />
            <input
              className="add-tool-input"
              type="text"
              onChange={handleSerialNumberChange}
              placeholder="Serial Number"
              value={tool.tool_serial_number || ""}
            />
            <input
              className="add-tool-input"
              type="text"
              onChange={handleManufacturerChange}
              placeholder="Customer Name"
              value={tool.tool_manufacturer || ""}
            />
            <input
              className="add-tool-input"
              onChange={handleCalDateChange}
              type="date"
              id="cal-date"
              name="date"
            />
          </div>

          <button className="btn" type="submit">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default AddTool;
