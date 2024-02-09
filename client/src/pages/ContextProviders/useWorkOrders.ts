import React, { useContext } from "react";
import WorkOrderContext from "./WorkOrderContext";

function useWorkOrders() {
  const context = useContext(WorkOrderContext);
  if (context === undefined) {
    throw new Error("useWorkOrders must be used within a WorkOrderProvider");
  }
  return context;
}

export default useWorkOrders;
