export interface ToolInterface {
  tool: {
    tool_part_number: string;
    tool_serial_number: string;
    tool_manufacturer: string;
    tool_cal_date: Date;
  };
}

export interface WorkOrderInterface {
  workOrder: {
    part_number: string;
    serial_number: string;
    customer: string;
    order_number: string;
    tools: ToolInterface[];
  };
}
