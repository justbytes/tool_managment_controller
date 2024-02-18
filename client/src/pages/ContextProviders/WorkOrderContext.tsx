import React, { ReactNode, createContext, useState, useCallback } from "react";
import axios from "axios";

import { WorkOrder } from "../../interface/interface";

import { formatDate } from "../components/FormatDate";

interface WorkOrderContextType {
  workOrders: WorkOrder[];
  setWorkOrders: React.Dispatch<React.SetStateAction<WorkOrder[]>>;
  refreshData: () => Promise<void>;
}

const WorkOrderContext = createContext<WorkOrderContextType | undefined>(
  undefined
);

export const WorkOrderProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [workOrders, setWorkOrders] = useState<WorkOrder[]>([]);

  const refreshData = useCallback(async () => {
    try {
      const response = await axios.get<WorkOrder[]>(
        "http://localhost:3001/get/WorkOrders"
      );
      const data = response.data;

      const newWorkOrder = data.map((workOrder) => {
        // Assuming the date you want to format is stored in workOrder.date_created
        // and you want to store the formatted date back in the same property or a new one.
        const formattedDate = formatDate(workOrder.date_created);
        return {
          ...workOrder,
          date_created: formattedDate, // or use a new property if you prefer
        };
      });
      console.log("this is from refreshData:", newWorkOrder);
      setWorkOrders(newWorkOrder);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  }, []);

  return (
    <WorkOrderContext.Provider
      value={{ workOrders, setWorkOrders, refreshData }}
    >
      {children}
    </WorkOrderContext.Provider>
  );
};

export default WorkOrderContext;
