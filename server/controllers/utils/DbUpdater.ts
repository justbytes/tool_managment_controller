import { WorkOrderInterface } from "../../interface/interface";
import Work_Order from "../../models/WorkOrder";
import Tool from "../../models/Tool";
import ToolWorkOrderLog from "../../models/ToolWorkOrderLog";

const DbUpdater = async (data: WorkOrderInterface): Promise<string> => {
  console.log("from dbupdater check for tools here:", data);

  try {
    const WO = await Work_Order.create({ ...data.updatedWorkOrder });

    console.log(
      "DbUpdater list of tools from data.workorder.tools",
      data.updatedWorkOrder.tools
    );

    if (data.updatedWorkOrder.tools.length > 0) {
      for (let i = 0; i < data.updatedWorkOrder.tools.length; i++) {
        const id = data.updatedWorkOrder.tools;
        const findID = id[i].id;
        console.log("This is the id", id[i].id);

        console.log(data.updatedWorkOrder.tools[i]);

        // Check if the tool already exists in the database
        let tool = await Tool.findOne({
          where: {
            id: findID,
          },
        });

        if (tool) {
          // If tool exists, update its workOrderId
          await ToolWorkOrderLog.create({
            toolId: tool.id,
            workOrderId: WO.id,
          });
        } else {
          console.log(
            "That tool is not in the database please add it first and try again."
          );
        }
      }
    }

    console.log("WO ADDED TO DB:", WO);

    const msg = "Unit was added into the DB.";

    return msg;
  } catch (error) {
    return error;
  }
};

export default DbUpdater;
