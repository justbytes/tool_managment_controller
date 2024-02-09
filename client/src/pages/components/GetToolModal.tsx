import React, { useState } from "react";
import axios from "axios";

import { Tool, GetToolProps } from "../../interface/interface";

import "../../css/components.css";

const GetToolModal: React.FC<GetToolProps> = ({
  addToolToUtilized,
  setModal,
}) => {
  return (
    <>
      <form className="update-form">
        <div className="add-tool" onClick={() => setModal(false)}>
          <p>Click to add this tool</p>
        </div>
      </form>
    </>
  );
};

export default GetToolModal;
