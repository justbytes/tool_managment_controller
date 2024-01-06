import { Router } from 'express';
import {spawn} from 'child_process'
import path from 'path';



const mainRouter = Router();

interface Tool {
  part: string;
  date: string;
}

interface WorkOrder {
  part_number: string;
  serial_number: string;
  customer: string;
  tools: Tool[];
}

// TODO: Create update WO route
// Read work order from db print all data to excel or
// pull it from the file path to allow user to edit.


// Gets work order data creates work order with excel
// Saves work order data to the db to be archived.
mainRouter.post('/excel', async (req, res) => {

  
  const filePath = path.join(__dirname, 'excel', 'WorkOrderTemplate.xlsx');

  try {
    const data: WorkOrder = req.body;
  
    const python = spawn('python', [path.join(__dirname, 'HandleExcel.py')])

    res.json('Excel stuff here');
    console.log(data);
    
  } catch (error) {
    console.error('Error reading Excel file:', error);
    res.status(500).send('Error processing Excel file');
  }
  

});

export default mainRouter;

function expect(type: any) {
  throw new Error('Function not implemented.');
}
