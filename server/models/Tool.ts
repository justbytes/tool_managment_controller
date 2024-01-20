import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from "sequelize";
import sequelize from "../config/connection";

class Tool extends Model<InferAttributes<Tool>, InferCreationAttributes<Tool>> {
  declare part_number: string;
  declare serial_number: string;
  declare manufaturer: string;
  declare cal_date: Date;
}

Tool.init(
  {
    part_number: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    serial_number: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    manufaturer: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    cal_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "tool",
  }
);

export default Tool;
