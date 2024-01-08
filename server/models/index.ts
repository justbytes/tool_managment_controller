import WorkOrder from './WorkOrder';
import Tool from './Tool';

// Define the one-to-many relationship
WorkOrder.hasMany(Tool, {
  foreignKey: 'workOrderId',
  as: 'tools',
});

Tool.belongsTo(WorkOrder, {
  foreignKey: 'workOrderId',
  as: 'workOrder',
});


