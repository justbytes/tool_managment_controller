import React, { ReactNode, createContext, useState, useCallback } from "react";
import axios from "axios";

import { WorkOrder } from "../../interface/interface";

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
      console.log("this is from refreshData:", data);
      setWorkOrders(data);
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
