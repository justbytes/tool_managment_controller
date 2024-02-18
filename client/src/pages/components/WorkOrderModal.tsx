import React, { useState } from "react";
import axios from "axios";

import { Tool, AddWOUpdateProps } from "../../interface/interface";

import { inputDate } from "./FormatDate";

import "../../css/components.css";

const UpdateWorkOrderModal: React.FC<AddWOUpdateProps> = ({
  setWorkOrder,
  setModal,
  workOrder,
  refreshData,
}) => {
  console.log("From update modal work order = ", workOrder);

  const handlePartNumberChange = (e: React.FormEvent<HTMLInputElement>) => {
    const value: string = (e.target as HTMLInputElement).value;
    const newWO = { ...workOrder, part_number: value };
    setWorkOrder(newWO);
  };

  // const handleSerialNumberChange = (e: React.FormEvent<HTMLInputElement>) => {
  //   const value = (e.target as HTMLInputElement).value;
  //   setWorkOrder({
  //     ...workOrder,
  //     serial_number: value,
  //   });
  // };

  const handleCustomerChange = (e: React.FormEvent<HTMLInputElement>) => {
    const value = (e.target as HTMLInputElement).value;
    setWorkOrder({
      ...workOrder,
      customer: value,
    });
  };

  // const handleCalDateChange = (e: React.FormEvent<HTMLInputElement>) => {
  //   const value = (e.target as HTMLInputElement).value;
  //   console.log("Cal Date", value);
  //   setWorkOrder({ ...workOrder, cal_date: value });
  // };

  const updateWorkOrderSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("updating db");
    try {
      const response = await axios.put(
        "http://localhost:3001/update/WorkOrder",
        {
          workOrder,
        }
      );
      const data: string = response.data;
      console.log("from update tool route client side", data);
    } catch (error) {
      // Handle the error
      console.error("Error fetching data: ", error);
    }
    refreshData();
    setModal(false);
  };

  return (
    <>
      <form className="update-form" onSubmit={updateWorkOrderSubmit}>
        <div className="add-tool">
          <input
            className="add-tool-input"
            type="text"
            onChange={handlePartNumberChange}
            placeholder="Part Number"
            value={workOrder.part_number || ""}
          />
          {/* <input
            className="add-tool-input"
            type="text"
            onChange={handleSerialNumberChange}
            placeholder="Serial Number"
            value={workOrder.serial_number || ""}
          /> */}
          <input
            className="add-tool-input"
            type="text"
            onChange={handleCustomerChange}
            placeholder="Customer Name"
            value={workOrder.customer || ""}
          />
          {/* <input
            className="add-tool-input"
            onChange={handleCalDateChange}
            type="date"
            id="cal-date"
            name="date"
            value={inputDate(workOrder.tool_cal_date) || ""}
          /> */}
          <button className="btn" type="submit">
            Update
          </button>
        </div>
      </form>
    </>
  );
};

export default UpdateWorkOrderModal;
