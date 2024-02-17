import Work_Order from "./WorkOrder";
import Tool from "./Tool";
import ToolWorkOrderLog from "./ToolWorkOrderLog";

Tool.belongsToMany(Work_Order, {
  through: ToolWorkOrderLog,
  foreignKey: "toolId",
});

Work_Order.belongsToMany(Tool, {
  through: ToolWorkOrderLog,
  foreignKey: "workOrderId",
});
