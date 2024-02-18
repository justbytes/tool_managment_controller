import { Model, DataTypes } from "sequelize";
import sequelize from "../config/connection";

class ToolWorkOrderLog extends Model {
  toolId: any;
}

ToolWorkOrderLog.init(
  {
    toolId: {
      type: DataTypes.INTEGER,
      references: {
        model: "tool",
        key: "id",
      },
    },
    workOrderId: {
      type: DataTypes.INTEGER,
      references: {
        model: "workOrder",
        key: "id",
      },
    },
  },
  {
    sequelize,
    modelName: "toolWorkOrder",
  }
);

export default ToolWorkOrderLog;
