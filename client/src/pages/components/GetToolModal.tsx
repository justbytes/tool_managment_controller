import React, { useEffect, useState } from "react";
import axios from "axios";

import useTools from "../ContextProviders/useTools";
import { formatDate } from "./FormatDate";

import { Tool, GetToolProps } from "../../interface/interface";

import "../../css/GetToolModal.css";

const GetToolModal: React.FC<GetToolProps> = ({
  addToolsUtilized,
  setModal,
}) => {
  const { tools, setTools, refreshData } = useTools();

  useEffect(() => {
    refreshData();
  }, []);

  return (
    <>
      <div className="get-tool-modal-form">
        <div
          className="get-tool-modal"
          onClick={(e) => {
            setModal(false);
            e.stopPropagation();
          }}
        >
          {tools.map((tool) => (
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
