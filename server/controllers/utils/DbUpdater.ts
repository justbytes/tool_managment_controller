import { WorkOrderInterface } from "../../interface/interface";
import Work_Order from "../../models/WorkOrder";
import Tool from "../../models/Tool";

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
        console.log(
          " **************************************",
          data.updatedWorkOrder.tools[i]
        );

        // Check if the tool already exists in the database
        let tool = await Tool.findOne({
          where: {
            id: 1,
          },
        });

        console.log("************************", tool);

        if (tool) {
          // If tool exists, update its workOrderId
          await tool.update({ assosiated_work_order: WO.id });
        } else {
          // If tool doesn't exist, create new tool and associate with the work order
          // await Tool.create({ ...toolData, assosiated_work_order: WO.id });
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
