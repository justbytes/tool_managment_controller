interface Tool {
  tool_part_number: string;
  tool_serial_number: string;
  tool_manufaturer: string;
  tool_cal_date: string;
}

export interface WorkOrder {
  workOrder: {
    part_number: string;
    serial_number: string;
    customer: string;
    order_number: string;
    tools: Tool[];
  };
}
