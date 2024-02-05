import React, { useState, useEffect } from "react";
import axios from "axios";

import { AddWOUpdateProps } from "../../interface/interface";

import Dropdown from "../components/Dropdown";
import UpdateWorkOrderModal from "../components/WorkOrderModal";

import "./Archive.css";

interface Tool {
  id: number;
  tool_part_number: string;
  tool_serial_number: string;
  tool_manufacturer: string;
  tool_cal_date: string;
}

interface WorkOrder {
  id: number;
  part_number: string;
  serial_number: string;
  customer: string;
  order_number: string;
  tools: Tool[];
}

const Archive: React.FC<AddWOUpdateProps> = () => {
  const initialWorkOrder: WorkOrder = {
    id: 0,
    part_number: "",
    serial_number: "",
    customer: "",
    order_number: "",
    tools: [
      {
        id: 0,
        tool_part_number: "",
        tool_serial_number: "",
        tool_manufacturer: "",
        tool_cal_date: "",
      },
    ],
  };
  const [option, setOption] = useState<string>("Part Number");
  const [modal, setModal] = useState<boolean>(false);
  const [workOrder, setWorkOrder] = useState<WorkOrder>(initialWorkOrder);
  const [workOrders, setWorkOrders] = useState<WorkOrder[]>([]);
  const [searchInput, setSearchInput] = useState<string>("");

  const options = ["Part Number", "Serial Number", "Customer"];

  const refreshData = async () => {
    try {
      const response = await axios.get<WorkOrder[]>(
        "http://localhost:3001/retrieve/get/allWorkOrders"
      );
      const data = response.data;
      console.log("this is from the useEffect:", data);
      setWorkOrders(data);
    } catch (error) {
      // Handle the error
      console.error("Error fetching data: ", error);
    }
  };

  useEffect(() => {
    // Define the async function
    const fetchData = async () => {
      try {
        const response = await axios.get<WorkOrder[]>(
          "http://localhost:3001/retrieve/get/allWorkOrders"
        );
        const data = response.data;
        console.log(data);
        setWorkOrders(data);
      } catch (error) {
        // Handle the error
        console.error("Error fetching data: ", error);
      }
    };
    fetchData();
  }, []);

  console.log(workOrders);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  const handleSearch = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    let filteredWorkOrders = workOrders;

    if (option === "Part Number") {
      filteredWorkOrders = workOrders.filter((workorder) =>
        workorder.part_number
          .toLowerCase()
          .startsWith(searchInput.toLowerCase())
      );
    } else if (option === "Serial Number") {
      filteredWorkOrders = workOrders.filter((workorder) =>
        workorder.serial_number
          .toLowerCase()
          .startsWith(searchInput.toLowerCase())
      );
    } else if (option === "Customer") {
      filteredWorkOrders = workOrders.filter((workorder) =>
        workorder.customer.toLowerCase().startsWith(searchInput.toLowerCase())
      );
    }

    setWorkOrders(filteredWorkOrders);
  };

  const handleSelect = (value: string) => {
    console.log("Selected:", value);
    setOption(value);
  };

  return (
    <section className="archive-section">
      <div className="option">
        <>
          <h1>Work Order Archive</h1>
          <div className="update-tool-container">
            <form className="search-form">
              <h2>Search</h2>
              <div className="search-div">
                <div className="search-input-div">
                  <input
                    type="search"
                    id="search-input"
                    className="search-input"
                    placeholder={`Enter ` + option}
                    value={searchInput || ""}
                    onChange={handleInputChange}
                  />
                  <Dropdown
                    options={options}
                    label="Search By"
                    onSelect={handleSelect}
                  />
                </div>
              </div>
              <button className="btn" type="submit" onClick={handleSearch}>
                Search
              </button>
              <h2>View Work Orders by:</h2>
              <div className="find-all">
                <a className="find-all-option">View All</a>
                <a className="find-all-option">Customer</a>
              </div>
            </form>

            {modal && (
              <div className="modal-backdrop" onClick={() => setModal(false)}>
                <div
                  className="modal modal-active"
                  onClick={(e) => e.stopPropagation()}
                >
                  <UpdateWorkOrderModal
                    setWorkOrder={setWorkOrder}
                    setModal={setModal}
                    workOrder={workOrder}
                    refreshData={refreshData}
                  />
                </div>
              </div>
            )}
            <div className="update-choice">
              <div className="tool-card">
                {workOrders.map((workorder) => (
                  <div
                    className="tool-list"
                    onClick={() => {
                      setWorkOrder(workorder);
                      setModal(true);
                    }}
                    key={workorder.id}
                  >
                    <div className="tool-list-container">
                      <div className="description">
                        <p className="t">ID</p>
                      </div>
                      <div className="description-value">
                        <p className="t">{workorder.id}</p>
                      </div>
                    </div>
                    <div className="tool-list-container">
                      <div className="description">
                        <p className="t">Part Number</p>
                      </div>
                      <div className="description-value">
                        <p className="t">{workorder.part_number}</p>
                      </div>
                    </div>
                    <div className="tool-list-container">
                      <div className="description">
                        <p className="t">Serial Number</p>
                      </div>
                      <div className="description-value">
                        <p className="t">{workorder.serial_number}</p>
                      </div>
                    </div>
                    <div className="tool-list-container">
                      <div className="description">
                        <p className="t">Customer</p>
                      </div>
                      <div className="description-value">
                        <p className="t">{workorder.customer}</p>
                      </div>
                    </div>
                    <div className="tool-list-container">
                      <div className="description">
                        <p className="t">Date Created</p>
                      </div>
                      {/* <div className="description-value">
                        <p className="t">{formatDate(tool.tool_cal_date)}</p>
                      </div> */}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
        <div className="back-div">
          <div className="back-div">
            <a href="#/">Back</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Archive;
