import React, { useState } from "react";
import axios from "axios";

import { Tool, AddUpdateProps } from "../../interface/interface";

import "./components.css";

const UpdateTool: React.FC<AddUpdateProps> = ({
  setPartNumber,
  setCalDate,
}) => {
  const initalPart: Tool = {
    part: "",
    date: "",
  };

  const handlePartNumberChange = (e: React.FormEvent<HTMLInputElement>) => {
    const value: string = (e.target as HTMLInputElement).value;
    console.log("Part Number", value);
    setPartNumber(value);
  };

  const handleCalDateChange = (e: React.FormEvent<HTMLInputElement>) => {
    const value = (e.target as HTMLInputElement).value;
    console.log("Cal Date", value);

    setCalDate(value);
  };

  return (
    <>
      <form>
        <div className="calibration-tools">
          <input
            className="input-tool-pn"
            type="text"
            name="part_number"
            onChange={handlePartNumberChange}
            placeholder="Enter Calibration Tool Part Number"
          />
          <input
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
