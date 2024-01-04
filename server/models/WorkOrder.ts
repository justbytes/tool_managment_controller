import { Model, DataTypes, InferAttributes, InferCreationAttributes, CreationOptional } from 'sequelize';
import sequelize from '../config/connection';

class WorkOrder extends Model<InferAttributes<WorkOrder>, InferCreationAttributes<WorkOrder>> {
  declare id: CreationOptional<number>;
  declare part_number: string;
  declare serial_number: string;
  declare customer: string;
  declare date_created: CreationOptional<Date>;
  
}

WorkOrder.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    part_number: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    serial_number: {
      type: DataTypes.STRING,
      allowNull: false, 
    },
    customer : {
      type: DataTypes.STRING,
      allowNull: false, 
    },

    date_created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    }
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'workOrder',
  }
);

export default WorkOrder;