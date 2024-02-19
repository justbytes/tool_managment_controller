import React, { useEffect, useState } from "react";

import useWorkOrders from "./ContextProviders/useWorkOrders";
import { WorkOrder, Tool } from "../interface/interface";

import Dropdown from "./components/Dropdown";
import UpdateWorkOrderModal from "./components/WorkOrderModal";
import WorkOrdersToolsModal from "./components/WorkOrdersToolsModal";

import "../css/Archive.css";

const Archive: React.FC = () => {
  const initialWorkOrder: WorkOrder = {
    id: 0,

    part_number: "",
    customer: "",
    order_number: "",
    tools: [],
  };
  const initalTool: Tool = {
    id: 0,
    assosiated_work_order: 0,
    tool_part_number: "",
    tool_serial_number: "",
    tool_manufacturer: "",
    tool_cal_date: "",
  };
  const { workOrders, setWorkOrders, refreshData } = useWorkOrders();
  const [option, setOption] = useState<string>("Part Number");
  const [modal, setModal] = useState<boolean>(false);
  const [getToolsModal, setGetToolsModal] = useState<boolean>(false);
  const [workOrder, setWorkOrder] = useState<WorkOrder>(initialWorkOrder);
  const [workOrderTools, setWorkOrderTools] = useState<Tool[]>([]);
  const [searchInput, setSearchInput] = useState<string>("");

  const options = ["Part Number", "Serial Number", "Customer"];

  useEffect(() => {
    refreshData();
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
      // ********** Replace with WORKORDER NUMBER
      // } else if (option === "Serial Number") {
      //   filteredWorkOrders = workOrders.filter((workorder) =>
      //     workorder.serial_number
      //       .toLowerCase()
      //       .startsWith(searchInput.toLowerCase())
      //   );
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
                    value={searchInput}
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

            {getToolsModal && (
              <div
                className="modal-backdrop"
                onClick={() => setGetToolsModal(false)}
              >
                <div
                  className="modal modal-active"
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                >
                  <WorkOrdersToolsModal
                    setGetToolsModal={setGetToolsModal}
                    workOrderId={workOrder.id}
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
                        <p className="t">WO Number</p>
                      </div>
                      <div className="description-value">
                        <p className="t">{workorder.order_number}</p>
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
                      <div className="description-value">
                        <p className="t">{(workorder as any).date_created}</p>
                      </div>
                    </div>
                    <div className="tool-list-container">
                      <div
                        className="description"
                        onClick={(e) => {
                          e.stopPropagation();
                          setWorkOrder(workorder);
                          setGetToolsModal(true);
                        }}
                      >
                        <p className="t">View Tools</p>
                      </div>
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
