import { Router } from "express";
import Tool from "../../models/Tool";

const deleteRoute = Router();

deleteRoute.delete("/tool/:id", async (req, res) => {
  const toolId = req.params.id;

  try {
    // Update the in_use flag to false for the specified tool
    const [updatedRows] = await Tool.update(
      { in_use: false },
      { where: { id: toolId } }
    );

    if (updatedRows === 0) {
      // If no rows were updated, it means the tool does not exist
      console.log("Tool not found:", toolId);
      res.status(404).send(`Tool id of ${toolId} was not found.`);
      return;
    }

    // Respond to the client that the tool was "deleted" (in_use set to false)
    res.send(`Tool id of ${toolId} is no longer in use.`);
  } catch (error) {
    console.error("There was an error updating tool:", toolId, error);
    res.status(500).send("There was an error updating the tool.");
  }
});

export default deleteRoute;
