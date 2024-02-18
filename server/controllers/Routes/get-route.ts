import { Router } from "express";

import { ToolInterface } from "../../interface/interface";

import Tool from "../../models/Tool";
import Work_Order from "../../models/WorkOrder";
import ToolWorkOrderLog from "../../models/ToolWorkOrderLog";

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

retrieveDataRoute.post("/WorkOrdersTools", async (req, res) => {
  console.log("Getting a workorders tools list");
  const { workOrderId } = req.body;

  console.log("workorder id coming from workordertools route:", workOrderId);

  try {
    const getTools = await ToolWorkOrderLog.findAll({
      where: {
        workOrderId: workOrderId,
      },
      attributes: ["toolId"], // Fetch only the toolId column
    });

    console.log("Tools fetched are:", getTools);

    const tools = [];

    for (let i = 0; i < getTools.length; i++) {
      // Correctly access the toolId for each item
      const toolId = getTools[i].toolId;

      try {
        const tool = await Tool.findOne({
          where: {
            id: toolId,
          },
        });

        // If the tool is found, add it to the tools array
        if (tool) {
          tools.push(tool);
        }
      } catch (innerError) {
        console.log(`Error fetching tool with ID ${toolId}`, innerError);
        // Optionally handle this error, e.g., by continuing to the next iteration
      }
    }

    // Transform the result to return an array of tools
    res.json(tools);
  } catch (error) {
    console.log("Error when retrieving tools for a specific work order", error);
  }
});

// ADD CAPABILITY TO SEE HOW MANY WO's HAVE BEEN CREATED

export default retrieveDataRoute;
