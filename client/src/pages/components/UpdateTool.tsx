import React, { useState } from "react";
import axios from "axios";
import UpdateModal from "./UpdateModal";

import { Tool, AddProps } from "../../interface/interface";

import "./components.css";

const UpdateTool: React.FC<AddProps> = ({ handleItemManagementHome }) => {
  const initalPart: Tool = {
    part: "",
    date: "",
  };
  const [modal, setModal] = useState<boolean>(false);

  const [partNumber, setPartNumber] = useState<string>("");
  const [calDate, setCalDate] = useState<string>("");

  const handleSearch = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setModal(true);
  };

  return (
    <>
      <div className="title">
        <h1>Update Tool</h1>
      </div>
      <form className="search-form">
        <div className="search-conatiner">
          <input
            type="search"
            id="search-input"
            className="search-input"
            placeholder="Search Part Number"
          />
          <button className="btn" type="submit" onClick={handleSearch}>
            Search
          </button>
        </div>
      </form>
      {modal ? (
        <div className="choice">
          <UpdateModal
            setPartNumber={setPartNumber}
            setCalDate={setCalDate}
            handleItemManagementHome={handleItemManagementHome}
          />
        </div>
      ) : (
        <div className="choice">
          <p>Please search for a tool.</p>
          <button onClick={handleItemManagementHome}>back</button>
        </div>
      )}
    </>
  );
};

export default UpdateTool;
