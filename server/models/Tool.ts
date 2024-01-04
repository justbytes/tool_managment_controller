import { Model, DataTypes, InferAttributes, InferCreationAttributes, CreationOptional } from 'sequelize';
import sequelize from '../config/connection';

class Tool extends Model<InferAttributes<Tool>, InferCreationAttributes<Tool>> {
  declare part: string;
  declare date: Date;
}

Tool.init(
  {
    part: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'tool',
  }
);

export default Tool;