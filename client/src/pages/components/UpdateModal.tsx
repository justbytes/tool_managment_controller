import React, { useState } from "react";
import axios from "axios";

import { Tool, AddUpdateProps } from "../../interface/interface";

import "./components.css";

const UpdateTool: React.FC<AddUpdateProps> = ({ setTool, tool }) => {
  const handlePartNumberChange = (e: React.FormEvent<HTMLInputElement>) => {
    const value: string = (e.target as HTMLInputElement).value;
    console.log("Part Number", value);

    setTool({ ...tool, tool_part_number: value });
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
    setTool({ ...tool, tool_cal_date: value });
  };

  return (
    <>
      <form>
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
      </form>
    </>
  );
};

export default UpdateTool;
