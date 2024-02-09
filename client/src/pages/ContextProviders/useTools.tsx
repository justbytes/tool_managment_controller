import React, { useContext } from "react";
import ToolContext from "./ToolContext";

function useTools() {
  const context = useContext(ToolContext);
  if (context === undefined) {
    throw new Error("useTools must be used within a ToolProvider");
  }
  return context;
}

export default useTools;
