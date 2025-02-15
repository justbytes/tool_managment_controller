import React, { useState } from "react";
import axios from "axios";

import { Tool, AddUpdateProps } from "../../interface/interface";

import { inputDate } from "./FormatDate";

import "../../css/components.css";
import SearchForm from "./SearchForm";

const ToolModal: React.FC<AddUpdateProps> = ({
  setTool,
  setModal,
  tool,
  refreshData,
}) => {
  console.log("From update modal tool = ", tool);

  const handlePartNumberChange = (e: React.FormEvent<HTMLInputElement>) => {
    const value: string = (e.target as HTMLInputElement).value;
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

  const updateToolSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("updating db");
    try {
      const response = await axios.put("http://localhost:3001/update/Tool", {
        tool,
      });
      const data: string = response.data;
      console.log("from update tool route client side", data);
    } catch (error) {
      // Handle the error
      console.error("Error fetching data: ", error);
    }
    refreshData();
    setModal(false);
  };

  const handleDelete = async () => {
    try {
      const response = await axios.delete(
        `http://localhost:3001/delete/tool/${tool.id}`
      );
      const data: string = response.data;
      console.log(data);
      setModal(false);
      refreshData();
    } catch (error) {
      console.log(
        "There was an error on the client side when deleting a tool",
        error
      );
    }
  };

  return (
    <>
      <form className="update-form" onSubmit={updateToolSubmit}>
        <div className="tool-updater">
          <div className="input-holder">
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
              value={inputDate(tool.tool_cal_date) || ""}
            />
          </div>

          <div className="btn-holder">
            <button className="btn" type="submit">
              Update
            </button>
            <a className="delete-btn" onClick={handleDelete}>
              Delete Tool
            </a>
          </div>
        </div>
      </form>
    </>
  );
};

export default ToolModal;
