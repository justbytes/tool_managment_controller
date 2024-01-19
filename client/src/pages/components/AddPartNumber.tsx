import React, { useState } from "react";
import axios from "axios";

import { Tool, AddProps } from "../../interface/interface";

import "./components.css";

const AddPartNumber: React.FC<AddProps> = ({ handleItemManagementHome }) => {
  const initalPartNumber: Tool = {
    part: "",
    date: "",
  };

  const [partNumber, setPartNumber] = useState<string>("");
  const [calDate, setCalDate] = useState<string>("");

  const handlePartNumberChange = (e: React.FormEvent<HTMLInputElement>) => {
    const value = (e.target as HTMLInputElement).value;
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
      <div className="title">
        <h1>Add Tool</h1>
      </div>
      <div className="choice">
        <form>
          <div className="calibration-tools">
            <div className="calibration-tool-field">
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

export default AddPartNumber;
