import { Router } from "express";

import { ToolInterface } from "../../interface/interface";

import Tool from "../../models/Tool";
import Work_Order from "../../models/WorkOrder";

const retrieveDataRoute = Router();

retrieveDataRoute.get("/Tools", async (req, res) => {
  console.log("Getting all Tools");

  try {
    const toolData = await Tool.findAll();
    const tools = toolData.map((tool) => tool.get({ plain: true }));
    res.json(tools);
  } catch (error) {
    res.send(error);
  }
});

retrieveDataRoute.get("/WorkOrders", async (req, res) => {
  console.log("Getting all Work Orders");

  try {
    const workOrderData = await Work_Order.findAll();
    console.log(workOrderData);
    const workorders = workOrderData.map((workorder) =>
      workorder.get({ plain: true })
    );
    console.log("route workorders going to client:", workorders);
    res.json(workorders);
  } catch (error) {
    res.send(error);
  }
});

export default retrieveDataRoute;
