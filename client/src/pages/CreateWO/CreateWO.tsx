import React, { useState } from "react";
import axios from "axios";

import "./CreateWO.css";

interface Tool {
  tool_part_number: string;
  tool_cal_date: string;
}

interface WorkOrder {
  part_number: string;
  serial_number: string;
  customer: string;
  order_number: string;
  tools: Tool[];
}

const CreateWO = () => {
  // Create inital variables and set state
  const initialWorkOrder: WorkOrder = {
    part_number: "",
    serial_number: "",
    customer: "",
    order_number: "",
    tools: [
      { tool_part_number: "", tool_cal_date: "" },
      { tool_part_number: "", tool_cal_date: "" },
      { tool_part_number: "", tool_cal_date: "" },
      { tool_part_number: "", tool_cal_date: "" },
      { tool_part_number: "", tool_cal_date: "" },
      { tool_part_number: "", tool_cal_date: "" },
      { tool_part_number: "", tool_cal_date: "" },
      { tool_part_number: "", tool_cal_date: "" },
      { tool_part_number: "", tool_cal_date: "" },
    ],
  };
  const [workOrder, setWorkOrder] = useState<WorkOrder>(initialWorkOrder);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(`WORKORDER SUBMIT`, workOrder);
    const response = await axios.post(
      "http://localhost:3001/create/WorkOrder",
      {
        workOrder,
      }
    );
    const data: string = response.data;

    console.log(data);

    // ADD CAPABILITY TO SEE HOW MANY WO's HAVE BEEN CREATED
    setWorkOrder(initialWorkOrder);
  };

  const handlePartNumberChange = (e: React.FormEvent<HTMLInputElement>) => {
    const value = (e.target as HTMLInputElement).value;
    setWorkOrder({
      ...workOrder,
      part_number: value,
    });
  };

  const handleSerialNumberChange = (e: React.FormEvent<HTMLInputElement>) => {
    const value = (e.target as HTMLInputElement).value;
    setWorkOrder({
      ...workOrder,
      serial_number: value,
    });
  };

  const handleCustomerChange = (e: React.FormEvent<HTMLInputElement>) => {
    const value = (e.target as HTMLInputElement).value;
    setWorkOrder({
      ...workOrder,
      customer: value,
    });
  };

  const handleToolChange = (
    e: React.FormEvent<HTMLInputElement>,
    index: number,
    field: keyof Tool
  ) => {
    const value = (e.target as HTMLInputElement).value;
    const updatedWorkOrder = [...workOrder.tools];
    updatedWorkOrder[index][field] = value;
    setWorkOrder((prevWorkOrder) => ({
      ...prevWorkOrder,
      tools: updatedWorkOrder,
    }));
  };

  console.log(workOrder);

  return (
    <section className="createWO">
      <div className="wo-option">
        <h1>Create Work Order</h1>

        <div className="wo-choice">
          <form className="form" onSubmit={handleSubmit}>
            <div>
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
                  onChange={handleSerialNumberChange}
                  placeholder="Serial Number"
                  value={workOrder.serial_number || ""}
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
                  {workOrder.tools.map((tools, index) => (
                    <div key={index} className="calibration-tools">
                      <div className="calibration-tool-field">
                        <input
                          className="input-tool-pn"
                          type="text"
                          name="part"
                          value={tools.tool_part_number || ""}
                          onChange={(e) =>
                            handleToolChange(e, index, "tool_part_number")
                          }
                          placeholder="Calibration Tool Part Number"
                        />
                        <input
                          className="input-tool-pn"
                          value={tools.tool_cal_date || ""}
                          onChange={(e) =>
                            handleToolChange(e, index, "tool_cal_date")
                          }
                          type="date"
                          id="cal-date"
                          name="cal-date"
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="more-stuff">
                  <h3>More stuff here.</h3>
                </div>
              </div>
              <button className="btn" type="submit">
                Submit
              </button>
            </div>
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
