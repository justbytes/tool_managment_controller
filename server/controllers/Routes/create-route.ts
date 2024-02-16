import { Router } from "express";
import { WorkOrderInterface, ToolInterface } from "../../interface/interface";

import GenerateWONumber from "../utils/GenerateWONumber";
import DbUpdater from "../utils/DbUpdater";
import ExcelHandler from "../utils/ExcelHandler";
import Tool from "../../models/Tool";

const workOrderRoute = Router();

// TODO: Create update WO route
// Read work order from db print all data to excel or
// pull it from the file path to allow user to edit.

workOrderRoute.post("/WorkOrder", async (req, res) => {
  const data: WorkOrderInterface = req.body;

  console.log("Create Work Order Route data:", data.updatedWorkOrder);

  try {
    // Generate the order number for the work order and asign it to the object
    const wo_complete = await GenerateWONumber(data);
    console.log("This is the order_number:", wo_complete);

    // Update the DB with the new work order
    const updater = await DbUpdater(wo_complete);
    console.log("Status of update", updater);

    // Creates the work order in excel and saves it to the file dump folder
    const excel = await ExcelHandler(wo_complete);
    console.log("This is after excel method.", excel);

    res.json("Workorder conformation: ???");
  } catch (error) {
    console.error("Error reading Excel file:", error);
    res.status(500).send("Error processing Excel file");
  }
});

workOrderRoute.post("/Tool", async (req, res) => {
  const data: ToolInterface = req.body;
  console.log(data.tool);
  try {
    const newTool = await Tool.create(data.tool);
    res.json("Tool was added to DB");
  } catch (error) {
    console.error("Error when adding a new Tool:", error);
  }
});

export default workOrderRoute;
