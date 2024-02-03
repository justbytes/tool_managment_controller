import { Router } from "express";
import Tool from "../../models/Tool";
import { ToolInterface } from "../../interface/interface";

const updateRoute = Router();

updateRoute.put("/updateTool", async (req, res) => {
  console.log("Updating Tool");
  const data: ToolInterface = req.body;

  try {
    const toolToUpdate = await Tool.findOne({ where: { id: data.tool.id } });

    if (toolToUpdate) {
      await toolToUpdate.update({ ...data.tool });
    }
  } catch (error) {
    console.log("There was an error when updating tool", error);
  }

  res.send("updating tool");
});

export default updateRoute;
