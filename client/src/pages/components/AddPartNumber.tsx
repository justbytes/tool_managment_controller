import React, { useState } from "react";
import axios from "axios";

import { Tool, AddProps } from "../../interface/interface";

import "./components.css";

const AddTool: React.FC<AddProps> = ({ handleItemManagementHome }) => {
  const initalTool: Tool = {
    tool_part_number: "",
    tool_serial_number: "",
    tool_manufacturer: "",
    tool_cal_date: "",
  };

  const [tool, setTool] = useState<Tool>(initalTool);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(`ADD TOOL SUBMIT`);
    // const response = await axios.post("http://localhost:3001/excel", {
    //   workOrder,
    // });
    // const data: string = response.data;

    // console.log(data);

    setTool(initalTool);
  };

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
        <form className="form" onSubmit={handleSubmit}>
          <div className="add-tool">
            <input
              className="single-input"
              type="text"
              onChange={handlePartNumberChange}
              placeholder="Part Number"
              value={tool.tool_part_number || ""}
            />
            <input
              className="single-input"
              type="text"
              onChange={handleSerialNumberChange}
              placeholder="Serial Number"
              value={tool.tool_serial_number || ""}
            />
            <input
              className="single-input"
              type="text"
              onChange={handleManufacturerChange}
              placeholder="Customer Name"
              value={tool.tool_manufacturer || ""}
            />
            <input
              onChange={handleCalDateChange}
              type="date"
              id="cal-date"
              name="date"
            />
            <div className="btn-container">
              <button onClick={handleItemManagementHome}>back</button>
              <button className="btn" type="submit">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddTool;
