import { Router } from 'express';
import {spawn} from 'child_process'
import path, { join } from 'path';



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

  const filePath = path.join(__dirname, 'HandleExcel.py')

  try {
    const data: WorkOrder = req.body;
    //const data: string = "hello?"

    console.log("Data sent to python", data);

    const python = spawn('py', [filePath, JSON.stringify(data)]);

    python.stdout.on('data', (data) => {
      // console.log("data recieved from python", JSON.parse(data.toString()));
      console.log("data recieved from python", data.toString());
    })

    python.stderr.on('data', (data) => {
      console.error(`Error: ${data.toString()}`);
    });
    
    python.on('close', (code) => {
      console.log(`Child process exited with code ${code}`);
    });
    
  
    

    res.json('Workorder conformation: ???');
    
    
  } catch (error) {
    console.error('Error reading Excel file:', error);
    res.status(500).send('Error processing Excel file');
  }
  

});

export default mainRouter;

