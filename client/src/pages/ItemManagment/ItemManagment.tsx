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
            <a className="big-a" onClick={handleUpdateTool}>
              Update a Tool
            </a>
            <a className="big-a" onClick={handleAddPartNumber}>
              Add a Part Number
            </a>
            <a className="big-a" href="#/">
              Create a Template
            </a>
          </>
        );
      case "addPartNumber":
        return <AddPartNumber />;
      case "updateTool":
        return <UpdateTool />;
      default:
        return null;
    }
  };

  return (
    <section className="item-managment">
      <div className="option">
        <div className="title">
          <h1>Item Managment</h1>
        </div>
        {renderComponent()}
        {currentOption === "itemManagementHome" ? (
          <div className="back-btn">
            <a href="#/">Home</a>
          </div>
        ) : (
          <div className="back-btn">
            <a onClick={handleItemManagementHome}>Back</a>
            <a href="#/">Home</a>
          </div>
        )}
      </div>
    </section>
  );
};

export default ItemManagment;
