import { Router } from "express";
import { WorkOrder } from "../interface/interface";

import GenerateWONumber from "./GenerateWONumber";
import DbUpdater from "./DbUpdater";
import ExcelHandler from "./ExcelHandler";

const mainRouter = Router();

// TODO: Create update WO route
// Read work order from db print all data to excel or
// pull it from the file path to allow user to edit.

// Gets work order data creates work order with excel
// Saves work order data to the db to be archived.

mainRouter.post("/excel", async (req, res) => {
  const data: WorkOrder = req.body;

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

export default mainRouter;
