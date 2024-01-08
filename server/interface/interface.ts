interface Tool {
    part: string;
    date: string;
  }
  
export interface WorkOrder {
  workOrder: {
    part_number: string;
    serial_number: string;
    customer: string;
    order_number: string;
    tools: Tool[];
  }

}