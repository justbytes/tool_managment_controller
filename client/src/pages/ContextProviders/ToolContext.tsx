import React, { ReactNode, createContext, useState, useCallback } from "react";
import axios from "axios";

import { Tool } from "../../interface/interface";

interface ToolContextType {
  tools: Tool[];
  setTools: React.Dispatch<React.SetStateAction<Tool[]>>;
  refreshData: () => Promise<void>;
}

const ToolContext = createContext<ToolContextType | undefined>(undefined);

export const ToolProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [tools, setTools] = React.useState<Tool[]>([]);

  const refreshData = useCallback(async () => {
    try {
      const response = await axios.get<Tool[]>(
        "http://localhost:3001/get/Tools"
      );
      const data = response.data;
      console.log("this is from refreshData:", data);
      setTools(data);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  }, []);

  return (
    <ToolContext.Provider value={{ tools, setTools, refreshData }}>
      {children}
    </ToolContext.Provider>
  );
};

export default ToolContext;
