import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from "sequelize";
import sequelize from "../config/connection";

class Tool extends Model<InferAttributes<Tool>, InferCreationAttributes<Tool>> {
  declare id: CreationOptional<number>;
  declare assosiated_work_order: number;
  declare tool_part_number: string;
  declare tool_serial_number: string;
  declare tool_manufacturer: string;
  declare tool_cal_date: Date;
  declare date_created: CreationOptional<Date>;
  declare in_use: Boolean;
}

Tool.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    assosiated_work_order: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    tool_part_number: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tool_serial_number: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tool_manufacturer: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    tool_cal_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    date_created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    in_use: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: "tool",
  }
);

export default Tool;
