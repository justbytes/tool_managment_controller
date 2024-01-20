import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
} from "sequelize";
import sequelize from "../config/connection";

class WONumber extends Model<
  InferAttributes<WONumber>,
  InferCreationAttributes<WONumber>
> {
  declare wo_number: string;
}

WONumber.init(
  {
    wo_number: {
      type: DataTypes.STRING,
      primaryKey: true,
      unique: true,
    },
  },
  {
    sequelize,
    modelName: "workorder_number",
    timestamps: true,
  }
);

export default WONumber;
