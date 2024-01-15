import React, { useState } from "react";

import AddPartNumber from "../components/AddPartNumber";
import UpdateTool from "../components/UpdateTool";

const ItemManagment = () => {
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
            <a className="big-a" onClick={handleUpdateTool}>
              Update Tool
            </a>
            <a className="big-a" onClick={handleAddPartNumber}>
              Add Tool
            </a>
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
    <section className="item-managment">
      <div className="option">
        {renderComponent()}
        {currentOption === "itemManagementHome" ? (
          <div className="back-btn">
            <a href="#/">Home</a>
          </div>
        ) : (
          <div className="back-btn">
            <a href="#/">Home</a>
          </div>
        )}
      </div>
    </section>
  );
};

export default ItemManagment;
