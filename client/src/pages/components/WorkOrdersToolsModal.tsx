import React, { useEffect, useState } from "react";
import axios from "axios";

import { Tool, GetWoToolsProps } from "../../interface/interface";
import { formatDate } from "./FormatDate";

import "../../css/components.css";

const WorkOrdersToolsModal: React.FC<GetWoToolsProps> = ({
  workOrderId,
  setGetToolsModal,
}) => {
  const [tools, setTools] = useState<Tool[]>([]);
  console.log("Getting tools for work order:", workOrderId);

  useEffect(() => {
    const fetchData = async () => {
      const fetchTools = await axios.post(
        "http://localhost:3001/get/WorkOrdersTools",
        {
          workOrderId,
        }
      );
      const data: Tool[] = fetchTools.data;

      console.log("tools fetched are:", data);

      setTools(data);
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="get-tool-modal">
        {tools != null &&
          tools.map((tool: Tool) => (
            <div
              className="get-tool-modal-list"
              onClick={() => {
                setGetToolsModal(true);
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
    </>
  );
};

export default WorkOrdersToolsModal;
