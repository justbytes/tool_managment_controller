export interface Tool {
  id: number;
  assosiated_work_order: number;
  tool_part_number: string;
  tool_serial_number: string;
  tool_manufacturer: string;
  tool_cal_date: string;
}

export interface WorkOrder {
  // date_created: string;
  id: number;
  part_number: string;
  customer: string;
  order_number: string;
  tools: Tool[];
}

export interface AddProps {
  // handleItemManagementHome: () => void;
  setMoal: (value: boolean) => void;
  setWorkOrder: (workOrder: WorkOrder) => void;
  refreshData: () => void;
  // workOrder: WorkOrder;
}

export interface AddUpdateProps {
  setTool: (tool: Tool) => void;
  setModal: (value: boolean) => void;
  refreshData: () => void;
  tool: Tool;
}

export interface AddWOUpdateProps {
  setWorkOrder: (workOrder: WorkOrder) => void;
  setModal: (value: boolean) => void;
  refreshData: () => void;
  workOrder: WorkOrder;
}

export interface GetToolProps {
  setModal: (value: boolean) => void;
  addToolsUtilized: (tool: Tool) => void;
  filteredTools: Tool[];
}

export interface ToolProps {
  tools: Tool[];
  setTools: (value: Tool[]) => void;
}

export interface GetWoToolsProps {
  setGetToolsModal: (value: boolean) => void;
  workOrderId: number;
}
