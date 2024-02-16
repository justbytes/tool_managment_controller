import React, { useState } from "react";
import axios from "axios";

import GetToolModal from "./components/GetToolModal";
import { formatDate } from "./components/FormatDate";
import { WorkOrder, Tool } from "../interface/interface";

import "../css/CreateWO.css";

const CreateWO: React.FC = () => {
  // Create inital variables and set state
  const initialWorkOrder: WorkOrder = {
    id: 0,
    part_number: "",
    serial_number: "",
    customer: "",
    order_number: "",
    tools: [],
  };

  const [toolsUtilized, setToolsUtilized] = useState<Tool[]>([]);
  const [workOrder, setWorkOrder] = useState<WorkOrder>(initialWorkOrder);
  const [modal, setModal] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const updatedWorkOrder = {
      ...workOrder,
      tools: toolsUtilized,
    };
    console.log(`WORKORDER SUBMIT`, updatedWorkOrder);
    const response = await axios.post(
      "http://localhost:3001/create/WorkOrder",
      {
        updatedWorkOrder,
      }
    );
    const data: string = response.data;

    console.log(data);

    setWorkOrder(initialWorkOrder);
  };

  const handlePartNumberChange = (e: React.FormEvent<HTMLInputElement>) => {
    const value = (e.target as HTMLInputElement).value;
    setWorkOrder({
      ...workOrder,
      part_number: value,
    });
  };

  const handleCustomerChange = (e: React.FormEvent<HTMLInputElement>) => {
    const value = (e.target as HTMLInputElement).value;
    setWorkOrder({
      ...workOrder,
      customer: value,
    });
  };

  const addToolsUtilized = (tool: Tool) => {
    setToolsUtilized((prevTools) => [...prevTools, tool]);
  };

  console.log(workOrder);

  return (
    <section className="createWO">
      <div className="wo-option">
        <h1>Create Work Order</h1>

        <div className="wo-choice">
          <form className="form" onSubmit={handleSubmit}>
            <div className="left">
              <input
                className="single-input"
                type="text"
                onChange={handlePartNumberChange}
                placeholder="Part Number"
                value={workOrder.part_number || ""}
              />

              <input
                className="single-input"
                type="text"
                onChange={handleCustomerChange}
                placeholder="Customer Name"
                value={workOrder.customer || ""}
              />
            </div>
            <div className="tool-div">
              <div className="tool-container">
                {modal && (
                  <div
                    className="modal-backdrop"
                    onClick={() => setModal(false)}
                  >
                    <div
                      className="modal modal-active"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <GetToolModal
                        addToolsUtilized={addToolsUtilized}
                        setModal={setModal}
                        filteredTools={[]}
                      />
                    </div>
                  </div>
                )}
                <div className="results">
                  <div className="tool-card">
                    {toolsUtilized.map((tool) => (
                      <div className="tool-list" key={tool.id}>
                        <div className="tool-list-container">
                          <div className="description">
                            <p className="t">ID</p>
                          </div>
                          <div className="description-value">
                            <p className="t">{tool.id}</p>
                          </div>
                        </div>
                        <div className="tool-list-container">
                          <div className="description">
                            <p className="t">Part Number</p>
                          </div>
                          <div className="description-value">
                            <p className="t">{tool.tool_part_number}</p>
                          </div>
                        </div>
                        <div className="tool-list-container">
                          <div className="description">
                            <p className="t">Serial Number</p>
                          </div>
                          <div className="description-value">
                            <p className="t">{tool.tool_serial_number}</p>
                          </div>
                        </div>
                        <div className="tool-list-container">
                          <div className="description">
                            <p className="t">Manufacturer</p>
                          </div>
                          <div className="description-value">
                            <p className="t">{tool.tool_manufacturer}</p>
                          </div>
                        </div>
                        <div className="tool-list-container">
                          <div className="description">
                            <p className="t">Cal Due Date</p>
                          </div>
                          <div className="description-value">
                            <p className="t">
                              {formatDate(tool.tool_cal_date)}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="tool-list-adder" onClick={() => setModal(true)}>
                  <div className="tool-list-container-adder">
                    <p>CLICK TO ADD TOOL</p>
                  </div>
                </div>
              </div>
            </div>
            <button className="btn" type="submit">
              Submit
            </button>
          </form>
        </div>
        <div className="back-div">
          <a href="#/">Back</a>
        </div>
      </div>
    </section>
  );
};

export default CreateWO;
