import { WorkOrder } from "../interface/interface";
import Work_Order from "../models/WorkOrder";

const DbUpdater = async (data: WorkOrder): Promise<string> => {
  console.log("from dbupdater:", data);

  // Basic validation to ensure required fields are present
  if (
    !data.workOrder.part_number ||
    !data.workOrder.serial_number ||
    !data.workOrder.customer ||
    !data.workOrder.order_number
  ) {
    throw new Error("Missing required fields.");
  }

  const WO = await Work_Order.create({ ...data.workOrder });

  console.log("WO ADDED TO DB:", WO);

  const msg = "Unit was added into the DB.";

  return msg;
};

export default DbUpdater;
