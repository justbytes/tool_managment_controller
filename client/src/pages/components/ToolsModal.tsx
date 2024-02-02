import React, { useState } from "react";
import axios from "axios";

import { Tool, AddProps } from "../../interface/interface";

import "./components.css";

const ToolsModal = ({ tools }) => {
  return (
    <>
      <div className="tool-modal">
        <ul>
          {tools.map((tool) => (
            <li key={tool.id}>Part Number: {tool.tool_part_number}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ToolsModal;
