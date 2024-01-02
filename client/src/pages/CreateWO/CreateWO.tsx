import React, {useState} from "react";
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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      console.log("FORM SUBMITTED")
  }

  const handleChange = (e: React.FormEvent<HTMLInputElement>, index: number, field: keyof Tool) => {
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
          <input type="text"  placeholder="Part Number" />
          <input type="text" placeholder="Serial Number" />
          <input type="text"  placeholder="Customer Name" />
        </div>
        {workOrder.tools.map((tools, index) => (
            <div className="calibration-tools">
            <div className="calibration-tool-field">
              <input type="text" name="part" value={tools.part || ''} onChange={(e) => handleChange(e, index, 'part')} placeholder="Calibration Tool Part Number" />
              <input
              value={tools.date || ''}
               onChange={(e) => handleChange(e, index, 'date')}
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
