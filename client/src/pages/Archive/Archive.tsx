import React, { useState, useEffect } from "react";
import axios from "axios";

import { AddProps } from "../../interface/interface";

import Dropdown from "../components/Dropdown";

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

const Archive: React.FC<AddProps> = () => {
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
  const [searchResults, setSearchResults] = useState<boolean>(false);
  const [workOrder, setWorkOrder] = useState<WorkOrder>(initialWorkOrder);
  const [workOrders, setWorkOrders] = useState<WorkOrder[]>([]);
  const options = ["Part Number", "Serial Number", "Customer"];

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

  const handleSearch = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("Searching...");
    setSearchResults(true);
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
              <h2>View tools by:</h2>
              <div className="find-all">
                <a className="find-all-option">View All</a>
                <a className="find-all-option">Part Number</a>
                <a className="find-all-option">Manufacturer</a>
              </div>
            </form>

            {searchResults ? (
              <div className="update-choice">
                <p>Specific WO Search result here</p>
              </div>
            ) : (
              <div className="update-choice">
                <div className="tool-card">
                  {workOrders.map((workOrder) => (
                    <div className="tool-list" key={workOrder.id}>
                      <div className="tool-list-container">
                        <div className="description">
                          <p className="t">WO</p>
                        </div>
                        <div className="description-value">
                          <p className="t">{workOrder.order_number}</p>
                        </div>
                      </div>
                      <div className="tool-list-container">
                        <div className="description">
                          <p className="t">Part Number</p>
                        </div>
                        <div className="description-value">
                          <p className="t">{workOrder.part_number}</p>
                        </div>
                      </div>
                      <div className="tool-list-container">
                        <div className="description">
                          <p className="t">Serial Number</p>
                        </div>
                        <div className="description-value">
                          <p className="t">{workOrder.serial_number}</p>
                        </div>
                      </div>
                      <div className="tool-list-container">
                        <div className="description">
                          <p className="t">Customer</p>
                        </div>
                        <div className="description-value">
                          <p className="t">{workOrder.customer}</p>
                        </div>
                      </div>
                      {/* This needs to be changed to display the tools used.  */}
                      <div className="tool-list-container">
                        <div className="description">
                          <p className="t">Tools used</p>
                        </div>
                        <div className="description-value">
                          <p className="t">{workOrder.id}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
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
