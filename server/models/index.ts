import Work_Order from "./WorkOrder";
import Tool from "./Tool";

// Define the one-to-many relationship
Work_Order.hasMany(Tool, {
  foreignKey: "assosiated_work_order",
  as: "tools",
});

Tool.belongsTo(Work_Order, {
  foreignKey: "assosiated_work_order",
  as: "workOrder",
});
