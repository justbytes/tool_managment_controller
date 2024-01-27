import { Router } from "express";

import { ToolInterface } from "../../interface/interface";

import Tool from "../../models/Tool";
import Work_Order from "../../models/WorkOrder";

const retrieveDataRoute = Router();

retrieveDataRoute.get("/allTools", async (req, res) => {
  console.log("Getting all Tools");

  try {
    const toolData = await Tool.findAll();
    const tools = toolData.map((tool) => tool.get({ plain: true }));
    res.json(tools);
  } catch (error) {
    res.send(error);
  }
});

retrieveDataRoute.get("/allWorkOrders", async (req, res) => {
  console.log("Getting all Work Orders");

  try {
    const workOrderData = await Work_Order.findAll();
    const workorders = workOrderData.map((workorder) =>
      workorder.get({ plain: true })
    );
    res.json(workorders);
  } catch (error) {
    res.send(error);
  }
});

export default retrieveDataRoute;
