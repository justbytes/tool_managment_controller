import React, { useState } from "react";

import "./ItemManagement.css";

import AddPartNumber from "../components/AddPartNumber";
import UpdateTool from "../components/UpdateTool";

const ItemManagement = () => {
  const [currentOption, setCurrentOption] =
    useState<string>("itemManagementHome");

  const handleItemManagementHome = () => setCurrentOption("itemManagementHome");
  const handleUpdateTool = () => setCurrentOption("updateTool");
  const handleAddPartNumber = () => setCurrentOption("addPartNumber");

  const renderComponent = () => {
    switch (currentOption) {
      case "itemManagementHome":
        return (
          <>
            <div className="title">
              <h1>Item Management</h1>
            </div>
            <div className="choice">
              <a className="big-a" onClick={handleAddPartNumber}>
                Add Tool
              </a>
              <a className="big-a" onClick={handleUpdateTool}>
                Update Tool
              </a>
            </div>
          </>
        );
      case "addPartNumber":
        return (
          <AddPartNumber handleItemManagementHome={handleItemManagementHome} />
        );
      case "updateTool":
        return (
          <UpdateTool handleItemManagementHome={handleItemManagementHome} />
        );
      default:
        return null;
    }
  };

  return (
    <section className="item-management">
      <div className="option">
        {renderComponent()}
        {currentOption === "itemManagementHome" ? (
          <div className="back-div">
            <a href="#/">Back</a>
          </div>
        ) : (
          <div className="back-div">
            <button className="back-btn" onClick={handleItemManagementHome}>
              Back
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ItemManagement;
