export interface Tool {
  part: string;
  date: string;
}

export interface WorkOrder {
  part_number: string;
  serial_number: string;
  customer: string;
  order_number: string;
  tools: Tool[];
}

export interface AddProps {
  handleItemManagementHome: () => void;
  setPartNumber: (partNumber: string) => void;
  setCalDate: (calDate: string) => void;
}
