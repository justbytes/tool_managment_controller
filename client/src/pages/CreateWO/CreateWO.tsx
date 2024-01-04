import React, {useState} from "react";
import axios from "axios";

import "./CreateWO.css";

const CreateWO = () => {

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
 
  const initialWorkOrder: WorkOrder = {
    part_number: '',
    serial_number: '',
    customer: '',
    tools: [
      {part: '', date: ''},
      {part: '', date: ''},
      {part: '', date: ''},
      {part: '', date: ''},
      {part: '', date: ''},
      {part: '', date: ''},
    ]
  }

  const [workOrder, setWorkOrder] = useState<WorkOrder>(initialWorkOrder)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      console.log(`WORKORDER SUBMIT`)
      const response = await axios.post('http://localhost:3001/excel', {
        workOrder
      });
      const data: string = response.data

      console.log(data);
      
      // ADD CAPABILITY TO SEE HOW MANY WO's HAVE BEEN CREATED
      setWorkOrder(initialWorkOrder)
  }

  const handlePartNumberChange = (e: React.FormEvent<HTMLInputElement>) => {
    const value = (e.target as HTMLInputElement).value;
    setWorkOrder({
      ...workOrder,
      part_number: value,
    });
  }

  const handleSerialNumberChange = (e: React.FormEvent<HTMLInputElement>) => {
    const value = (e.target as HTMLInputElement).value;
    setWorkOrder({
      ...workOrder,
      serial_number: value,
    });
  }

  const handleCustomerChange = (e: React.FormEvent<HTMLInputElement>) => {
    const value = (e.target as HTMLInputElement).value;
    setWorkOrder({
      ...workOrder,
      customer: value,
    });
  }

  const handleToolChange = (e: React.FormEvent<HTMLInputElement>, index: number, field: keyof Tool) => {
    const value = (e.target as HTMLInputElement).value;
    const updatedWorkOrder = [...workOrder.tools];
    updatedWorkOrder[index][field] = value;
    setWorkOrder((prevWorkOrder) => ({
      ...prevWorkOrder,
      tools: updatedWorkOrder,
    }));
  }

  console.log(workOrder);
  

  return (
    <section className="createWO">
      <form className="form" onSubmit={handleSubmit}>
        <div className="top">
          <input type="text" onChange={handlePartNumberChange} placeholder="Part Number" value={workOrder.part_number || ''} />
          <input type="text" onChange={handleSerialNumberChange} placeholder="Serial Number" value={workOrder.serial_number || ''}/>
          <input type="text" onChange={handleCustomerChange} placeholder="Customer Name" value={workOrder.customer || ''}/>
        </div>
        {workOrder.tools.map((tools, index) => (
            <div key={index} className="calibration-tools">
            <div className="calibration-tool-field">
              <input type="text" name="part" value={tools.part || ''} onChange={(e) => handleToolChange(e, index, 'part')} placeholder="Calibration Tool Part Number" />
              <input
                value={tools.date || ''}
                onChange={(e) => handleToolChange(e, index, 'date')}
                type="date"
                id="cal-date"
                name="cal-date"
              />
            </div>
          </div>
        ))}
        
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
      <div className="back-btn">
        <a href="#/">Home</a>
      </div>
    </section>
  );
};

export default CreateWO;
