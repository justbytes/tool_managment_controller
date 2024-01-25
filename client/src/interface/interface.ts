export interface Tool {
  tool_part_number: string;
  tool_serial_number: string;
  tool_manufacturer: string;
  tool_cal_date: string;
}

export interface WorkOrder {
  part_number: string;
  serial_number: string;
  customer: string;
  order_number: string;
  tools: Tool[];
}

export interface AddProps {
  // handleItemManagementHome: () => void;
}

export interface AddUpdateProps {
  setTool: (tool: Tool) => void;
  tool: Tool;
}
