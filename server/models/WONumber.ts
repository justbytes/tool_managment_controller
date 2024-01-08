import { Model, DataTypes, InferAttributes, InferCreationAttributes, CreationOptional, IntegerDataType } from 'sequelize';
import sequelize from '../config/connection';

class WONumber extends Model<InferAttributes<WONumber>, InferCreationAttributes<WONumber>> {
  declare number: string; 
}

WONumber.init(
  {
    number: {
      type: DataTypes.STRING,
      primaryKey: true,
      unique: true
    }
  },
  {
    sequelize,
    modelName: 'workorder_number',
    timestamps: true
  }
);

export default WONumber;
