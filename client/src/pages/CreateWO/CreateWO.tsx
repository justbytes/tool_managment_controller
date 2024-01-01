import React from "react";
import "./CreateWO.css";

const CreateWO = () => {
  return (
    <section className="createWO">
      <div className="input-field">
        <div className="top">
          <input type="text" placeholder="Part Number" />
          <input type="text" placeholder="Serial Number" />
          <input type="text" placeholder="Customer Name" />
        </div>
        <div className="calibration-tools">
          <div className="calibration-tool-field">
            <input type="text" placeholder="Calibration Tool Part Number" />
            <input
              type="date"
              id="cal-date"
              name="cal-date"
              placeholder="Calibration Date"
            />
          </div>
          <div className="calibration-tool-field">
            <input type="text" placeholder="Calibration Tool Part Number" />
            <input type="date" id="cal-date" name="cal-date" />
          </div>
          <div className="calibration-tool-field">
            <input type="text" placeholder="Calibration Tool Part Number" />
            <input type="date" id="cal-date" name="cal-date" />
          </div>
          <div className="calibration-tool-field">
            <input type="text" placeholder="Calibration Tool Part Number" />
            <input type="date" id="cal-date" name="cal-date" />
          </div>

          <div className="calibration-tool-field">
            <input type="text" placeholder="Calibration Tool Part Number" />
            <input type="date" id="cal-date" name="cal-date" />
          </div>
          <div className="calibration-tool-field">
            <input type="text" placeholder="Calibration Tool Part Number" />
            <input type="date" id="cal-date" name="cal-date" />
          </div>
          <div className="calibration-tool-field">
            <input type="text" placeholder="Calibration Tool Part Number" />
            <input type="date" id="cal-date" name="cal-date" />
          </div>
        </div>
      </div>
      <div className="back-btn">
        <a href="#/">Home</a>
      </div>
    </section>
  );
};

export default CreateWO;
